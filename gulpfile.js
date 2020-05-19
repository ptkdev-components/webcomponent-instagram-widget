/**
 * Gulp Config
 * =====================
 * Automation task
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
const argv = require("yargs").argv;
const pkg = require("./package.json");
const gulp = require("gulp");
const gulp_concat = require("gulp-concat");
const gulp_sass = require("gulp-sass");
const gulp_data = require("gulp-data");
const gulp_nunjucks_render = require("gulp-nunjucks-render");
const gulp_minifycss = require("gulp-clean-css");
const gulp_minifyjs = require("gulp-terser");
const gulp_rename = require("gulp-rename");
const nodemon = require("gulp-nodemon");
const browsersync = require("browser-sync").create();

const language = argv.language === undefined ? "en" : argv.language;
const version = argv.build === "dev" ? "dev" : pkg.version;
const config = (argv.config ? require(argv.config) : require("./configs/config.js"));

/**
* Task: build-css & build-js + nunjucks
* =====================
* Minify and concat js and css files
*
*/
gulp.task("build-css", function() {
	let files = [
		"./webcomponent/css/*.scss"
	];

	return gulp.src(files)
		.pipe(gulp_concat({path: "./full.min.tmp"}))
		.pipe(gulp_sass())
		.pipe(gulp_minifycss())
		.pipe(gulp_rename("main.css"))
		.pipe(gulp.dest(`./dist/${version}/css/`));
});

gulp.task("build-js", function() {
	let files = [
		"./webcomponent/js/*.js"
	];

	const translate = require(`./translations/${language}.js`);
	delete require.cache[require.resolve(`./translations/${language}.js`)];

	return gulp.src(files)
		.pipe(gulp_concat({path: "full.min.tmp"}))
		.pipe(gulp_data({package: pkg, translate: translate}))
		.pipe(gulp_nunjucks_render({
			envOptions: {autoescape: false},
		    path: [`./dist/${version}/`]
	    }))
		.pipe(gulp_rename("instagram-widget.js"))
		.pipe(gulp.dest(`./dist/${version}/js/`));
});

gulp.task("build-js-minify", function() {
	let files = [
		"./dist/dev/js/instagram-widget.js"
	];

	const translate = require(`./translations/${language}.js`);
	delete require.cache[require.resolve(`./translations/${language}.js`)];

	return gulp.src(files)
		.pipe(gulp_concat({path: "full.min.tmp"}))
		.pipe(gulp_data({package: pkg, translate: translate}))
		.pipe(gulp_nunjucks_render({
			envOptions: {autoescape: false},
		    path: [`./dist/${version}/`]
		}))
		.pipe(gulp_minifyjs({output: {comments: false}}))
		.pipe(gulp_rename("instagram-widget.min.js"))
		.pipe(gulp.dest(`./dist/${version}/js/`));
});

gulp.task("build-html", function() {
	let files = [
		"./webcomponent/html/*.html",
		"./webcomponent/includes/*",
	];

	return gulp.src(files).pipe(gulp.dest(`./dist/${version}/`));
});

gulp.task("build-version-latest-lib", function() {
	let files = [
		"./dist/dev/lib.njk"
	];

	const translate = require(`./translations/${language}.js`);
	delete require.cache[require.resolve(`./translations/${language}.js`)];

	return gulp.src(files)
		.pipe(gulp_data({package: pkg, translate: translate}))
		.pipe(gulp_nunjucks_render({
			envOptions: {autoescape: false},
			path: [`./dist/dev/`]
		}))
		.pipe(gulp_rename("instagram-widget.js"))
		.pipe(gulp.dest(`./dist/lib/${language}/`));
});

gulp.task("build-version-latest-lib-minify", function() {
	let files = [
		"./dist/dev/lib.min.njk"
	];

	const translate = require(`./translations/${language}.js`);
	delete require.cache[require.resolve(`./translations/${language}.js`)];

	return gulp.src(files)
		.pipe(gulp_data({package: pkg, translate: translate}))
		.pipe(gulp_nunjucks_render({
			envOptions: {autoescape: false},
			path: [`./dist/dev/`]
		}))
		.pipe(gulp_rename("instagram-widget.min.js"))
		.pipe(gulp.dest(`./dist/lib/${language}/`));
});

gulp.task("build-version-wordpress-plugin", function() {
	let files = [
		"./wordpress/**/*"
	];

	const translate = require(`./translations/${language}.js`);
	delete require.cache[require.resolve(`./translations/${language}.js`)];

	return gulp.src(files)
		.pipe(gulp_data({package: pkg, translate: translate}))
		.pipe(gulp_nunjucks_render({
			envOptions: {autoescape: false},
			path: [`./wordpress/`],
			inheritExtension: true,
		}))
		.pipe(gulp.dest(`./dist/wordpress/last-9-photos-webcomponent/`));
});

gulp.task("cpy-changelog-wordpress-plugin", function() {
	let files = [
		"./CHANGELOG.md"
	];

	const translate = require(`./translations/${language}.js`);
	delete require.cache[require.resolve(`./translations/${language}.js`)];

	return gulp.src(files)
		.pipe(gulp_data({package: pkg, translate: translate}))
		.pipe(gulp_nunjucks_render({
			envOptions: {autoescape: false},
			path: [`./wordpress/`],
			inheritExtension: true,
		}))
		.pipe(gulp_rename("changelog.txt"))
		.pipe(gulp.dest(`./dist/wordpress/last-9-photos-webcomponent/`));
});

gulp.task("cpy-js-wordpress-plugin", function() {
	let files = [
		"./dist/lib/**/*"
	];

	return gulp.src(files).pipe(gulp.dest(`./dist/wordpress/last-9-photos-webcomponent/js/`));
});

gulp.task("cpy-readme-wordpress-plugin", function() {
	let files = [
		"./dist/wordpress/last-9-photos-webcomponent/readme.txt",
		"./CHANGELOG.md"
	];

	return gulp.src(files).pipe(gulp_concat({path: "readme.txt"})).pipe(gulp.dest(`./dist/wordpress/last-9-photos-webcomponent/`));
});

/**
* Task: browser-sync
* =====================
* Start browser sync in combo with express: auto refresh files and browser page.
*
*/
gulp.task("browser-sync", function() {
	browsersync.init({
		port: parseInt(config.server.bs_port),
		proxy: `http://localhost:${parseInt(config.server.express_port)}`,
		ui: {port: parseInt(config.server.ui_port)},
		open: true
	});

	nodemon({
		script: "app.js",
		args: [`--build=${version}`],
		"watch": [
			"./webcomponent/css/*.scss",
			"./webcomponent/js/*.js",
			"./webcomponent/html/*.html",
			"./translations/*.js"
		],
		"ext": "js, html, css, scss"
	}).on("restart", function() {
		browsersync.reload();
	});

	gulp.watch([`./webcomponent/css/*.scss`, `./webcomponent/js/*.js`, `./webcomponent/html/**/*.html`, `./translations/*.js`]).on("change", gulp.series("build-css", "build-html", "build-js"));
});

/**
* Task: server
* =====================
* Run in combo gulp-nodemon + browser-sync tasks
*
*/
gulp.task("start", gulp.series("build-css", "build-html", "build-js", "browser-sync"));
gulp.task("dist", gulp.series("build-css", "build-html", "build-js", "build-js-minify"));
gulp.task("release", gulp.series("build-version-latest-lib", "build-version-latest-lib-minify"));
gulp.task("wordpress-plugin", gulp.series("build-version-wordpress-plugin", "cpy-js-wordpress-plugin", "cpy-changelog-wordpress-plugin", "cpy-readme-wordpress-plugin"));
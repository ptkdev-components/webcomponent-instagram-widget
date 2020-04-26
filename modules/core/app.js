/**
 * InstagramWidget WebComponent
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
const express = require("express");
const nunjucks = require("nunjucks");
const core = require("./core");
const path = require("path");
const http = require("http");
const fse = require("fs-extra");
const Logger = require("@ptkdev/logger");
const Pages = require("./../routes/pages");

class App {
	constructor(config, version) {
		this.core = core;
		this.core.app = express();
		this.core.config = config;
		this.core.config.version = version;

		this.LOG_NAME = "start";
		this.log = new Logger(this.core.config.log);
		this.pages = new Pages.Pages();
	}

	/**
     * Init all empty files and directory.
     * =====================
     * This fix file system errors at boot
     *
     */
	create_files() {
		if (!fse.existsSync(this.core.config.log.path.debug_log)) {
			fse.outputFileSync(this.core.config.log.path.debug_log, "");
		}
		if (!fse.existsSync(this.core.config.log.path.error_log)) {
			fse.outputFileSync(this.core.config.log.path.error_log, "");
		}
	}

	/**
	 * Initialize the app
	 * =====================
	 * Set config options and integrity of app
	 *
	 */
	init() {
		this.create_files();
		this.log.info("Component::init()");

		nunjucks.configure(`./dist/${this.core.config.version}/`, {
		    autoescape: false,
		    express: this.core.app
		});

		// @credits: Akseli Palén
		// @link: https://stackoverflow.com/questions/13442377/redirect-all-trailing-slashes-globally-in-express
		this.core.app.use(function(req, res, next) {
		    if (req.path.substr(-1) === "/" && req.path.length > 1) {
		        let query = req.url.slice(req.path.length);
		        res.redirect(301, req.path.slice(0, -1) + query);
		    } else {
		        next();
		    }
		});

		this.core.app.use("/css", express.static(path.join(__dirname, `/../../dist/${this.core.config.version}/css`)));
		this.core.app.use("/js", express.static(path.join(__dirname, `/../../dist/${this.core.config.version}/js`)));

		this.pages.index();
	}

	/**
	 * Start the app
	 * =====================
	 * Run express
	 *
	 */
	start() {
		const server = http.createServer(this.core.app);
		server.listen(parseInt(this.core.config.server.express_port));
	}
}

module.exports = App;
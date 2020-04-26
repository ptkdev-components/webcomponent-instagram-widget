/**
 * InstagramWidget WebComponent
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
const argv = require("yargs").argv;
const config = (argv.config ? require(argv.config) : require("./configs/config.js"));
const App = require("./modules/core/app");

/**
 * Start the component
 * =====================
 * Run
 *
 */
let app = new App(config, argv.build);
app.init();
app.start();
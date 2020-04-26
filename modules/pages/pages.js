/**
 * Pages route
 * =====================
 * Express routes
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
const core = require("./../core/core");
const Logger = require("@ptkdev/logger");

class Pages {
	constructor() {
		this.core = core;

		this.LOG_NAME = "pages";
		this.log = new Logger(this.core.config.log);
	}

	/**
	 * Initialize pages (all)
	 * =====================
	 * Express render
	 *
	 */
	index() {
		this.core.app.get("/", function(req, res) {
			res.set("Content-Type", "text/html");
		    res.render(`./index.html`, {});
		});
	}
}

module.exports = Pages;
/**
 * Core
 * =====================
 * Singleton of core variables (getter and setter of app and config)
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
class Core {
	constructor() {
		this._app = null;
		this._config = {"log": {}};
	}

	set app(app) {
		this._app = app;
	}
	get app() {
		return this._app;
	}

	set config(config) {
		this._config = config;
	}
	get config() {
		return this._config;
	}
}

module.exports = new Core();
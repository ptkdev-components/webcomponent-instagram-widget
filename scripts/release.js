/**
 * Scripts: Release Build
 * =====================
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const path = require("path");
const fs = require("fs");
const logger = console;

fs.readdir(path.join(__dirname, "/../translations/"), async function(err, files) {
	if (err) {
		return logger.log(`Unable to scan directory: ${err}`);
	}

	for (let i=0; i<files.length; i++) {
		logger.log(files[i]);
		let file = files[i].replace(".js", "");
		const {stdout, stderr} = await exec(`npm run dist -- --language="${file}" && npm run build -- --language="${file}"`);
		logger.log("stdout:", stdout);
		logger.log("stderr:", stderr);
	}
});
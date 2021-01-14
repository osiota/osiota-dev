var fs = require("fs");

module.exports = function(data, load_partial_dir, Handlebars, Helper, template){
	load_partial_dir(__dirname + "/partials");

	data.argv.app = data.argv.app.replace(/^osiota-app-/, "");

	data.subapps = {};
	fs.readdirSync(process.cwd()).forEach(function(file) {
		if (file !== "schema.json" && file.match(/-schema\.json$/)) {
			data.subapps[file.replace(/-schema\.json$/, "")] =
				JSON.parse(fs.readFileSync(process.cwd() + "/" + file));
		}
	});
};

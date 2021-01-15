const fs = require("fs");

exports.adapt_json = function(filename, object, options) {
	try {
		var schema = JSON.parse(fs.readFileSync(filename));
		// throw file not found
		// throw json not valid

		if (typeof object === "function") {
			schema = object(schema, filename);
		} else if (typeof object === "object") {
			// TODO: Merge object
			Object.keys(object).forEach(function(key) {
				schema[key] = object[key];
			});
		}
		var content = JSON.stringify(schema, null,
			(options && options.spaces ? options.spaces : "\t"));
		if (options && options.simulate) {
			console.log("File:", filename);
			console.log(content);
			return;
		}

		fs.writeFileSync(filename, content);
	} catch (err) {
		console.error(err);
	}
};

const fs = require("fs");

var merge = function(a, b) {
	var changed = false;
	Object.keys(b).forEach(function(key) {
		if (typeof b[key] === "object" && b[key] !== null &&
				typeof a[key] === "object" && a[key] !== null) {
			changed = merge(a[key], b[key]) || changed;
			return;
		}
		if (typeof b[key] === "function") {
			let cached = a[key];
			a[key] = b[key](a[key]);
			changed = a[key] !== cached || changed;
			return;
		}
		if (a[key] !== b[key]) {
			if (typeof b[key] === "object" && b[key] !== null) {
				a[key] = {};
				merge(a[key], b[key]);
			} else {
				a[key] = b[key];
			}
			changed = true;
		}
	});

	return changed;
};

exports.adapt_json = function(filename, object, options) {
	try {
		var schema = JSON.parse(fs.readFileSync(filename));
		// throw file not found
		// throw json not valid

		if (!Array.isArray(object)) {
			object = [object];
		}
		var changed = false;
		object.forEach(function(o) {
			if (typeof o === "function") {
				changed = o(schema, filename) || changed;
			} else if (typeof o === "object") {
				changed = merge(schema, o) || changed;
			}
		});
		if (!changed) return false;

		var content = JSON.stringify(schema, null,
			(options && options.spaces ? options.spaces : "\t"));
		if (options && options.simulate) {
			console.log("File:", filename);
			console.log(content);
			return;
		}

		fs.writeFileSync(filename, content+"\n");
		return true;
	} catch (err) {
		console.error(err);
	}
	return false;
};

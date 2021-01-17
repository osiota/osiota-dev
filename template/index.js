exports.init = function(node, app_config, main) {
	node.announce([{
		"type": "MYAPP.app"
	}, app_config.metadata]);

	return [node];
};

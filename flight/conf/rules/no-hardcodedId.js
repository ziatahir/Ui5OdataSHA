module.exports = function(context) {
					"use strict";
					function myIdFunction(node) {
						var src = context.getSource(node);
						var matched = src.match(/byid\('/gi) || src.match(/byid\("/gi);
						if (matched && matched.length > 0) {
							context.report(node, "Do not use hardcoded IDs RECOMMENDATION: ID should be prefixed with this.getId()");
						}
					}
					return {
						"CallExpression": myIdFunction,
					};
				};
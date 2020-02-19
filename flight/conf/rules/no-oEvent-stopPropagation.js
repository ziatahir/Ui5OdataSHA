module.exports = function(context) {
					"use strict";
					function myIdFunction(node) {
						var src = context.getSource(node);
						var matched = src.match(/oEvent.stopPropagation/gi);
						if (matched && matched.length > 0) {
							context.report(node, "Do not use oEvent.stopPropagation() without a good reason");
						}
					}
					return {
						"CallExpression": myIdFunction,
					};
				};
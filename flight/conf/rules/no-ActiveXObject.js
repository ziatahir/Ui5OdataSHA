module.exports = function(context) {
					'use strict';

					function checkActiveXObject(node) {
						var name = node.name;
						if (name && name === "ActiveXObject") {
							context.report(node, "Use of ActiveX object should be avoided.");
						}
					}
					return {
						"Identifier": checkActiveXObject
					};
				};
module.exports = function(context) {
					'use strict';

					function noFuncSpace(node) {
						var src = context.getSource(node);
						var fn = src.split('\n')[0];

						var matched = fn.match(/function(\s*)\(/);
						if (matched && matched[1].length > 0) {
							context.report(node, 'no space between "function" and "()"');

						}
					}
					return {
						"FunctionExpression": noFuncSpace
					};
				};
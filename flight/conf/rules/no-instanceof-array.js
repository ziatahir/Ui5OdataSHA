module.exports = function(context) {
					"use strict";
					function myIdFunction(node) {
						var leftOperandText = context.getSourceCode().getText(node.left)
						if (node.operator === 'instanceof' && node.right.type === 'Identifier' && node.right.name === 'Array') {
							context.report(node, 'Use `Array.isArray(' + leftOperandText + ')` instead of `' + leftOperandText + ' instanceof Array`');
						}
					}
					return {
						"BinaryExpression": myIdFunction
					};
				};
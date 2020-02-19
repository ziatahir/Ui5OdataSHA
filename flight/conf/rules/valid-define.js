module.exports = {
					meta: {
						docs: {},
					},

					create(context) {

						return {
							CallExpression(node) {

								// check callee object
								const obj = node.callee;
								if (!obj || obj.type !== 'Identifier' || obj.name !== 'define') {
									return;
								}

								// signature with only one argument [function] is correct
								if (node.arguments.length !== 1) {
									context.report(node, 'Incorrect signature for module definition');
								}
							}
						};
					}
				};
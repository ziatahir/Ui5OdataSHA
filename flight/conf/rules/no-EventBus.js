module.exports = function(context) {
					'use strict';

					function noEventBus(node) {
						var callee = node.callee;
						if (callee && callee.type === "MemberExpression") {
							if (callee.property.name === "EventBus") {
								context.report(node, "Use of EventBus should be avoided.");
							}
						}
					}
					return {
						"NewExpression": noEventBus,
					};
				};
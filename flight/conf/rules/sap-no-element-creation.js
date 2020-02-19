/**
 * @fileoverview Detect direct DOM insertion
 * @author Christopher Fenner, C5224075
 * @ESLint Version 0.22.1 / June 2015
 */

// ------------------------------------------------------------------------------
// Rule Disablement
// ------------------------------------------------------------------------------
/*eslint-disable strict*/
// ------------------------------------------------------------------------------
// Invoking global form of strict mode syntax for whole script
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------
module.exports = function(context) {
    "use strict";
    var MSG = "Direct element creation, create a custom control instead";
    var WINDOW_OBJECTS = [];
    var DOCUMENT_OBJECTS = [];
    var FORBIDDEN_DOM_INSERTION = [
            "createElement", "createTextNode", "createElementNS",
            "createDocumentFragment", "createComment", "createAttribute",
            "createEvent"
    ];

    // --------------------------------------------------------------------------
    // Helpers
    // --------------------------------------------------------------------------
    function isType(node, type) {
        return node && node.type === type;
    }
    function isIdentifier(node) {
        return isType(node, "Identifier");
    }
    function isMember(node) {
        return isType(node, "MemberExpression");
    }
    function isCall(node) {
        return isType(node, "CallExpression");
    }
    function isLiteral(node) {
        return isType(node, "Literal");
    }

    function contains(a, obj) {
        for (var i = 0; i < a.length; i++) {
            if (obj === a[i]) {
                return true;
            }
        }
        return false;
    }

    function isWindow(node) {
        // true if node is the global variable 'window'
        return node && isIdentifier(node) && node.name === "window";
    }

    function isWindowObject(node) {
        // true if node is the global variable 'window' or a reference to it
        return isWindow(node) || node && isIdentifier(node)
                && contains(WINDOW_OBJECTS, node.name);
    }

    function isDocument(node) {
        if (node) {
            if (isIdentifier(node)) {
                // true if node id the global variable 'document'
                return node.name === "document";
            } else if (isMember(node)) {
                // true if node id the global variable 'window.document' or '<windowReference>.document'
                return isWindowObject(node.object) && isDocument(node.property);
            }
        }
        return false;
    }

    function isDocumentObject(node) {
        // true if node is the global variable 'document'/'window.document' or a reference to it
        return isDocument(node) || node && isIdentifier(node)
                && contains(DOCUMENT_OBJECTS, node.name);
    }

    // --------------------------------------------------------------------------
    // Helpers
    // --------------------------------------------------------------------------
    function rememberWindow(left, right) {
        if (isWindowObject(right) && isIdentifier(left)) {
            WINDOW_OBJECTS.push(left.name);
            return true;
        }
        return false;
    }

    function rememberDocument(left, right) {
        if (isDocumentObject(right) && isIdentifier(left)) {
            DOCUMENT_OBJECTS.push(left.name);
            return true;
        }
        return false;
    }

    function isInteresting(node) {
        return node && isCall(node.parent) && isDocumentObject(node.object);
    }

    function isValid(node) {
        var methodName = false;
        if (isIdentifier(node.property)) {
            methodName = node.property.name;
        } else if (isLiteral(node.property)) {
            methodName = node.property.value;
        }
        return methodName
                && (!contains(FORBIDDEN_DOM_INSERTION, methodName) || methodName === "createElement"
                        && isCall(node.parent)
                        && node.parent.arguments
                        && node.parent.arguments.length > 0
                        && isLiteral(node.parent.arguments[0])
                        && node.parent.arguments[0].value === "a");
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------
    return {
        "VariableDeclarator": function(node) {
            return rememberWindow(node.id, node.init)
                    || rememberDocument(node.id, node.init);
        },
        "AssignmentExpression": function(node) {
            return rememberWindow(node.left, node.right)
                    || rememberDocument(node.left, node.right);
        },
        "MemberExpression": function(node) {
            if (isInteresting(node) && !isValid(node)) {
                context.report(node, MSG);
            }
        }
    };
};

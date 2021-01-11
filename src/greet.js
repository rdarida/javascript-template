'use strict';

/**
 * Gets a name and returns a greeting with it.
 * @param {string=} name Name of somebody to greet.
 * @return {string} The greeting.
 */
function greet(name = 'World') {
  return `Hello, ${name.trim()}!`;
}

module.exports = greet;

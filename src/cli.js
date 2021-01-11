#!/usr/bin/env node

'use strict';

const { greet } = require('./index');

/**
 * @param {string[]} argv The command line arguments.
 */
((argv) => {
  try {
    console.log(greet(argv.join(' ')));
  } catch (error) {
    console.log(error.message);
  }

  process.exit();
})(process.argv.slice(2));

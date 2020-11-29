#!/usr/bin/env node

'use strict';

const { greet } = require('./index');

((argv) => {
  try {
    console.log(greet(argv.joins(' ')));
  } catch (error) {
    console.log(error.message);
  }

  process.exit();
})(process.argv.slice(2));

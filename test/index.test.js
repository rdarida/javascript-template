'use strict';

const { greet } = require('../src/index');

describe('Test index', () => {
  test('should greet to be truthy', () => {
    expect(greet).toBeTruthy();
  });
});

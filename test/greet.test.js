'use strict';

const greet = require('../src/greet');

describe('Test greet', () => {
  test('should send greetings to the World', () => {
    const result = greet();
    expect(result).toEqual('Hello, World!');
  });

  test('should send greetings to John Doe', () => {
    const result = greet('John Doe');
    expect(result).not.toEqual('Hello, World!');
    expect(result).toEqual('Hello, John Doe!');
  });
});

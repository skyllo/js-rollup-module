/* eslint-disable no-console */

import * as Alpha from '../src/alpha';

describe('#freeze', () => {
  it('should not be able to add any properties to an empty object', () => {
    const obj = {};
    Alpha.freeze(obj);
    expect(() => {
      obj.alpha = 'ALPHA';
    }).toThrow(TypeError);
  });
});

describe('#forEach', () => {
  it('should iterate over an array', () => {
    const input = ['item', 'item2'];
    const output = [];
    Alpha.forEach(input, (item) => {
      output.push(item);
    });
    expect(output).toEqual(input);
  });

  it('should iterate over an array until false returned', () => {
    const input = ['item', 'item2'];
    const output = [];
    Alpha.forEach(input, (item) => {
      output.push(item);
      return false;
    });
    expect(output).toEqual(['item']);
  });
});

describe('#sayName', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  it('should say your name', () => {
    Alpha.sayName('Test');
    expect(console.log).toHaveBeenCalledWith('Your name is Test!');
  });
});

/* eslint-enable no-console */

/* eslint-disable no-console */

import sinon from 'sinon';
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
    sinon.spy(console, 'log');
  });

  afterEach(() => {
    console.log.restore();
  });

  it('should say your name', () => {
    Alpha.sayName('Test');
    expect(console.log).toHaveBeenCalled;
  });
});

/* eslint-enable no-console */

/* eslint-disable no-console */

import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import * as Alpha from '../src/alpha';

chai.config.truncateThreshold = 0;
chai.use(sinonChai);

describe('#freeze', () => {
  it('should not be able to add any properties to an empty object', () => {
    const obj = {};
    Alpha.freeze(obj);
    expect(() => {
      obj.alpha = 'ALPHA';
    }).to.throw(TypeError);
  });
});

describe('#forEach', () => {
  it('should iterate over an array', () => {
    const input = ['item', 'item2'];
    const output = [];
    Alpha.forEach(input, (item) => {
      output.push(item);
    });
    expect(output).to.deep.equal(input);
  });

  it('should iterate over an array until false returned', () => {
    const input = ['item', 'item2'];
    const output = [];
    Alpha.forEach(input, (item) => {
      output.push(item);
      return false;
    });
    expect(output).to.deep.equal(['item']);
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
    expect(console.log).to.be.called;
  });
});

/* eslint-enable no-console */

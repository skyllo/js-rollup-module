import chai, { expect } from 'chai';
import * as Alpha from '../src/alpha';

chai.config.truncateThreshold = 0;

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

  });

  it('should iterate over an array until false returned', () => {

  });
});

describe('#sayName', () => {
  it('should say your name', () => {

  });
});

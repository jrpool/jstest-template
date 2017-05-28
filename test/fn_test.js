import { expect } from 'chai';
import stringLength from '../src/fn';

describe('stringLength()', function(){

  it('is a function', function(){
    expect(stringLength).to.be.a('function');
  });

  context('valid arguments', function() {

    it('returns a number', function(){
      expect(stringLength('this is a string')).to.be.a('number');
    });

    it('returns 5 when given “hello”', function(){
      expect(stringLength('hello')).to.be.equal(5);
    });

    it('incorrect test: returns 5 when given “hello there”', function(){
      expect(stringLength('hello there')).to.be.equal(5);
    });

  });

  context('invalid arguments', function() {

    it('returns undefined if anyString is a number', function(){
      expect(stringLength(33)).to.be.undefined;
    });

    it('returns undefined if anyString is an array', function(){
      expect(stringLength(['hello'])).to.be.undefined;
    });

    it('returns undefined if anyString is an object', function(){
      expect(stringLength({a: 'hello'})).to.be.undefined;
    });

  });

});

var utils = require('./utils.js');
var expect = require('chai').expect;

describe('unit test for correct ip strings', function() {

  it("verify correct ip string:' 192.168.1.1'", function() {
    expect(utils.isIp('192.168.1.1')).to.be.ok;
  });

  it("verify correct ip string:' 192 . 168.1 .1 '", function() {
    expect(utils.isIp(' 192 . 168.1 .1 ')).to.be.ok;
  });

  it("verify correct ip string:' 192 . 168.1 . 1 '", function() {
    expect(utils.isIp(' 192 . 168.1 .1 ')).to.be.ok;
  });

  it("verify correct ip string:' 192 . 168.0 . 1 '", function() {
    expect(utils.isIp(' 192 . 168.1 .1 ')).to.be.ok;
  });

  it("verify correct ip string:' 192 . 0.7 .1 '", function() {
    expect(utils.isIp(' 192 . 0.7 .1 ')).to.be.ok;
  });

});

describe('unit test for wrong ip string', function() {

  it('verify wrong ip string: 19 2.168.1.1', function() {
    expect(utils.isIp('19 2.168.1.1')).to.not.be.ok;
  });

  it('verify wrong ip string: 192.1 68.1.1', function() {
    expect(utils.isIp('192.1 68.1.1')).to.not.be.ok;
  });

  it('verify wrong ip string: 19w.168.1.1', function() {
    expect(utils.isIp('19w.168.1.1')).to.not.be.ok;
  });

  it('verify wrong ip string: 192.168.1.1.6', function() {
    expect(utils.isIp('192.168.1.1.6')).to.not.be.ok;
  });

  it('verify wrong ip string: 276.168.1.1', function() {
    expect(utils.isIp('276.168.1.1')).to.not.be.ok;
  });

  it('verify wrong ip string: 192.168.01.1', function() {
    expect(utils.isIp('192.168.01.1')).to.not.be.ok;
  });

  it('verify wrong ip string: 192.168.2.0', function() {
    expect(utils.isIp('192.168.2.0')).to.not.be.ok;
  });

  it('verify wrong ip string: 0.168.2.7', function() {
    expect(utils.isIp('0.168.2.7')).to.not.be.ok;
  });

});

describe('unit test for convert ip strings to 32 bit integer', function() {

  it("convert ip strings:'172.168.5.1' to 32 bit integer: 2896692481", function() {
    expect(utils.convertIPTo32bitInteger('172.168.5.1')).to.be.equal(2896692481);
  });

  it("convert wrong ip strings:'17 2.168.5.1' to 32 bit integer failure", function() {
    expect(utils.convertIPTo32bitInteger('17 2.168.5.1')).to.not.be.ok;
  });

  it("convert ip strings:'192.168.5.1' to 32 bit integer succeed", function() {
    expect( 256*256*256<utils.convertIPTo32bitInteger('192.168.5.1') && 
    	256*256*256*256>utils.convertIPTo32bitInteger('192.168.5.1') ).to.be.ok;
  });

});
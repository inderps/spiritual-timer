let chai = require('chai'),
  SpiritualTimer = require('./../src/SpiritualTimer.js');

chai.should();

describe('setTimeout', () => {
  it('should behave same as native setTimeout', (done) => {
    let status = 'Bachelor';

    SpiritualTimer.setTimeout(() => {
      status = 'Married';
    }, 200);

    setTimeout(() => {
      status.should.equal('Bachelor');
      setTimeout(() => {
        status.should.equal('Married');
        done();
      }, 101);
    }, 100);
  });

  it('should return the time (ms) it waited', (done) => {
    SpiritualTimer.setTimeout((waitingTime) => {
      waitingTime.should.equal(200);
      done();
    }, 200);
  });
});

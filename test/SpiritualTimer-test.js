let chai = require('chai'),
  MockDate = require('mockdate'),
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
      waitingTime.should.be.at.least(200);
      waitingTime.should.be.at.most(210);
      done();
    }, 200);
  });

  it('should return the actual waiting time (ms) if there has been actual delays', (done) => {
    MockDate.set('1/1/2000 00:00:00');
    SpiritualTimer.setTimeout((waitingTime) => {
      waitingTime.should.be.at.least(1000);
      waitingTime.should.be.at.most(1010);
      done();
    }, 200);
    MockDate.set('1/1/2000 00:00:01');
  });

  afterEach(() => {
    MockDate.reset();
  });
});

import LogNumbers from './logNumbers';
import sinon from 'sinon';
import { expect } from 'chai';

describe('logNumbers', () => {
    let logNumbers;
    let consoleLogSpy;
    let multiplesOfThree = [3,6,9,12,36,99];
    let multiplesOfFive = [5,10,25,35,95,100];
    let multiplesOfFiveAndThree = [15,30,45,60,75,90];
    let nonMultiples = [2,4,7,23,29,74,94];
    const lengthArg = 100;

    beforeEach(() => {
        logNumbers = new LogNumbers();
        consoleLogSpy = new sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleLogSpy.restore();
    });

    it('logNumbers has an evaluateNumber method', () => {
        expect(logNumbers).to.have.a.property('evaluateNumber');
    });

    it('logNumbers has a runLoop method', () => {
        expect(logNumbers).to.have.a.property('runLoop');
    });

    it('console.log should be called and be a string', () => {
      expect(console.log).to.be.called;
      expect(console.log.value).to.be.a.string;
    });

    it('logNumbers.evaluateNumber outputs "Boss" on multiples of 3', () => {
      multiplesOfThree.forEach((value) => {
        let output = logNumbers.evaluateNumber(value);
        expect(output).to.equal('Boss');
      });
    });

    it('logNumbers.evaluateNumber outputs "Hog" on multiples of 5', () => {
      multiplesOfFive.forEach((value) => {
        let output = logNumbers.evaluateNumber(value);
        expect(output).to.equal('Hog');
      });
    });

    it('logNumbers.evaluateNumber outputs "BossHog" on multiples of 5 & 3', () => {
      multiplesOfFiveAndThree.forEach((value) => {
        let output = logNumbers.evaluateNumber(value);
        expect(output).to.equal('BossHog');
      });
    });

    it('logNumbers.evaluateNumber outputs a number for all other cases', () => {
      nonMultiples.forEach((value) => {
        let output = logNumbers.evaluateNumber(value);
        expect(parseInt(output)).to.equal(value);
      });
    });

});

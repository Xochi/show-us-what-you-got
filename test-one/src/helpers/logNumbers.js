import Logger from './logger';

let logger = new Logger();

class LogNumbers {

  constructor() {}

  evaluateNumber(i) {
    let output = '';
    if( i % 3 === 0 ) {
      output += 'Boss';
    }
    if( i % 5 === 0 ) {
      output += 'Hog';
    }
    if( i % 3 !== 0 && i % 5 !== 0 ) {
      output += i;
    }
    return output;
  }

  runLoop(length, cb) {
    for(let i = 1; i <= length; i++){
      cb(i);
    }
  }
}

module.exports = LogNumbers;

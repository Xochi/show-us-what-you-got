import Logger from './helpers/logger';
import LogNumbers from './helpers/logNumbers';

let logger = new Logger();

//Your code should go here instead of the welcome message below. Create and modify additional files as necessary.
let logNumbers = new LogNumbers();

logNumbers.runLoop(100, (i) => {
  logger.log(logNumbers.evaluateNumber(i));
});

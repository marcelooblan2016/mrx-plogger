const fs = require('fs-extra');
const { type } = require('jquery');
const moment = require('moment');

class Plogger {
  constructor (options) {
    this.logFileName = options[`logFileName`];
    this.dateFormat = options[`dateFormat`] ?? `YYYY-MM-DD hh:mm:ssA`;
  }
  /**
   * Write message to the log file with details
   * Sample: [2022-10-05 11:03:44] local.INFO: YV4A22RL4M1768603  
   * @param {*} message 
   * @param {*} prefix 
   * @return boolean
   */
  log (message, prefix = 'INFO') {
    try {
    let content = [
        `[${moment().format(this.dateFormat)}]`,
        `${prefix}:`,
        typeof message == 'object' ? JSON.stringify(message) : message,
      ].join(" ");
  
      fs.appendFileSync(this.logFileName, `${content}\n`);
      return true;
    } catch (error) { return false; }
  }

  info (message, prefix = 'INFO') { return this.log(message, prefix); }
  error (message, prefix = 'ERROR') { return this.log(message, prefix); }
  warning (message, prefix = 'WARNING') { return this.log(message, prefix); }
}

module.exports = Plogger;
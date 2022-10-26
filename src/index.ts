
import * as fs from 'fs-extra';
import moment from 'moment'

class plogger {
    private logFileName: string;
    private dateFormat: string;

    constructor (options: constructorOptions) {
        this.logFileName = options.logFileName;
        this.dateFormat = options.dateFormat ?? `YYYY-MM-DD hh:mm:ssA`;
    }
    /**
     * Write message to the log file with details
     * Sample: [2022-10-05 11:03:44] local.INFO: YV4A22RL4M1768603  
     * @param string message 
     * @param string prefix 
     * @return boolean
     */
    public log (message: string, prefix: string = 'INFO') {
        try {
            let content: string = [
                `[${moment().format(this.dateFormat)}]`,
                `${prefix}:`,
                typeof message == 'object' ? JSON.stringify(message) : message,
            ].join(" ");

            fs.appendFileSync(this.logFileName, `${content}\n`);

          return true;
        } catch (error) {}

        return false; 
    }
    /**
     * Shortcuts for: info, error, warning
     * @param string message 
     * @param string prefix 
     * @return boolean
     **/
    public info (message: string, prefix: string = 'INFO') { return this.log(message, prefix); }
    public error (message: string, prefix: string = 'ERROR') { return this.log(message, prefix); }
    public warning (message: string, prefix: string = 'WARNING') { return this.log(message, prefix); }
}

export {
    plogger
}
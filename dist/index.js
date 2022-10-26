"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.plogger = void 0;
const fs = __importStar(require("fs-extra"));
const moment_1 = __importDefault(require("moment"));
class plogger {
    constructor(options) {
        var _a;
        this.logFileName = options.logFileName;
        this.dateFormat = (_a = options.dateFormat) !== null && _a !== void 0 ? _a : `YYYY-MM-DD hh:mm:ssA`;
    }
    /**
     * Write message to the log file with details
     * Sample: [2022-10-05 11:03:44] local.INFO: YV4A22RL4M1768603
     * @param string message
     * @param string prefix
     * @return boolean
     */
    log(message, prefix = 'INFO') {
        try {
            let content = [
                `[${(0, moment_1.default)().format(this.dateFormat)}]`,
                `${prefix}:`,
                typeof message == 'object' ? JSON.stringify(message) : message,
            ].join(" ");
            fs.appendFileSync(this.logFileName, `${content}\n`);
            return true;
        }
        catch (error) { }
        return false;
    }
    /**
     * Shortcuts for: info, error, warning
     * @param string message
     * @param string prefix
     * @return boolean
     **/
    info(message, prefix = 'INFO') { return this.log(message, prefix); }
    error(message, prefix = 'ERROR') { return this.log(message, prefix); }
    warning(message, prefix = 'WARNING') { return this.log(message, prefix); }
}
exports.plogger = plogger;

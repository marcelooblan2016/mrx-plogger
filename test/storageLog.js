const {plogger} = require('../dist/index');

( async () => {
    // create a logfile within the same folder
    let ploggerIniatiated = new plogger({logFileName: 'test.log'});
    ploggerIniatiated.log("test hello0");
    ploggerIniatiated.info("test hello1");
    ploggerIniatiated.warning("test hello2");
    ploggerIniatiated.error("test hello3");
})()
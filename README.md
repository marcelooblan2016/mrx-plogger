# MrxPlogger
Nodejs storage log
# Installation
```bash
npm i mrx-plogger
```
## Usage
```js
 const {plogger} = require('mrx-plogger');
( async () => {
    // create a logfile within the same folder
    let ploggerIniatiated = new plogger({logFileName: 'test.log'});
    ploggerIniatiated.log("test hello0");
    ploggerIniatiated.info("test hello1");
    ploggerIniatiated.warning("test hello2");
    ploggerIniatiated.error("test hello3");
})()
```
## Output
```bash
[2022-10-26 10:06:39PM] INFO: test hello0
[2022-10-26 10:06:39PM] INFO: test hello1
[2022-10-26 10:06:39PM] WARNING: test hello2
[2022-10-26 10:06:39PM] ERROR: test hello3

```
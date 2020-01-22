const pwdModule = require('./pwd')
const fs = require('fs')
const lsModule = require('./ls')


process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if(cmd === "pwd") {
      pwdModule()
    } else if (cmd === 'ls'){
      lsModule();
    }
    else {
        process.stdout.write('You have typed ' + cmd);
        process.stdout.write('\nprompt > ');
    }
})


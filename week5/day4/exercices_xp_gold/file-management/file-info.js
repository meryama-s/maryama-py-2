const fs = require('fs');
const path = require('path');

function readFileContent(){
   
    const path_file = path.join(__dirname, 'data', 'exemple.txt');
   
    if(fs.existsSync(path_file)){
        const state = fs.statSync(path_file);
        console.log('##__FILE INFORMATION__##\n');
        console.log('file size:', state.size);
        console.log('created at: ', state.birthtime);
        
    }else{
        console.log('the file does not exist');
        
    }
}
module.exports = readFileContent
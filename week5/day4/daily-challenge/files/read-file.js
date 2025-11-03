const fs = require('fs');
const path = require('path');
function readfile(){
    //TODO: built the correct path
    const filepath= path.join(__dirname, 'file-data.txt');


//! read files asynchronously
fs.readFile(filepath, 'utf-8', (err, data)=>{
    if(err){
        console.log('error reading file', err);
        return;

    }
    console.log('file content: \n');
    console.log(data);
    
});
}
module.exports= readfile;
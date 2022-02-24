// const fs = require('fs');
const p = new Promise(function (resolve, reject) {
    fs.readFile('相思.md', (err, data) => {
        if (err) reject(err);
        resolve(data);
    });
});
    p.then(function(value){
        console.log(value);
    }, function(reason){

    });
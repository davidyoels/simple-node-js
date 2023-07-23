// importing required modules
const fs = require('fs');
const path = require('path');

const filesPath = path.resolve(__dirname, 'data');

const readFile = async (filePath) => {
    const fileContent = await new Promise((resolve, reject) => {
        return fs.readFile(`${filesPath}/${filePath}`, { encoding: 'utf8' }, (err, data) => {
            if (err) {
                return reject(err);
            }
            return resolve(data);
        });
    });
    return fileContent;
}

module.exports = { readFile }
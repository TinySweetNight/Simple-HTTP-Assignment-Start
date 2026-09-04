const fs = require('fs');

const memes = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getMeme = (request, response) => {
    response.writeHead(200, {'Content-Type': 'image/png'});
    response.write(memes);
    response.end();
}

module.exports = {
    getMeme
}
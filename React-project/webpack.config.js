const path = require('path');

module.exports = {
    entry: {
        filename: './src/index.js'
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname ,'dist')
    }
}
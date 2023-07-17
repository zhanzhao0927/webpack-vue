const autoprefixer = require("autoprefixer");

module.exports = {
    plugin: {
        'autoprefixer': {},
        'postcss-pxtorem': {
            rootValue: 200
        }
    }
}
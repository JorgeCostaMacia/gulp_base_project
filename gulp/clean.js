const del = require('del');
const Config = require("./config");

module.exports = {
    dist: () => {
        return del(Config.base.dest);
    },
    temp: () => {
        return del(Config.base.temp);
    }
};
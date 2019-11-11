const { src } = require('gulp');
const plumber = require('gulp-plumber');
const jsdoc = require('gulp-jsdoc3');
const notify = require("gulp-notify");
const Helper = require("./helper");
const Config = require("./config");

module.exports = (cb) => {
    return src(Config.documentation.src, {
            read: false
        })
        .pipe(plumber({
            errorHandler: notify.onError((error) => {
                error.title = "ERROR documentation";
                error.date = Helper.getDate();
                console.log("\n" + error.toString() + "\n");

                return {
                    title: error.title,
                    message: error.message + "\n" + error.date,
                    onLast: true
                }
            })
        }))
        .pipe(jsdoc({
            "recurseDepth": 10,
            "tags": {
                "allowUnknownTags": true
            },
            "opts": {
                "destination": Config.documentation.dest
            },
            "plugins": [
                "plugins/markdown"
            ],
            "templates": {
                "cleverLinks": false,
                "monospaceLinks": false,
                "default": {
                    "outputSourceFiles": true
                },
                "path": "ink-docstrap",
                "theme": "cerulean",
                "navType": "vertical",
                "linenums": true,
                "dateFormat": "MMMM Do YYYY, h:mm:ss a"
            }
        }, cb));
};
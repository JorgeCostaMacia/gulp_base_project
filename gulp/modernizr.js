const {
    src,
    dest
} = require('gulp');
const plumber = require('gulp-plumber');
const jsImport = require('gulp-js-import');
const modernizr = require('gulp-modernizr');
const notify = require("gulp-notify");
const Helper = require("./helper");
const Config = require("./config");

module.exports = () => {
    return src(Config.modernizr.src)
        .pipe(plumber({
            errorHandler: notify.onError((error) => {
                error.title = "ERROR modernizr";
                error.date = Helper.getDate();
                console.log("\n" + error.toString() + "\n");

                return {
                    title: error.title,
                    message: error.message + "\n" + error.date,
                    onLast: true
                }
            })
        }))
        .pipe(jsImport({
            hideConsole: true
        }))
        .pipe(modernizr({
            "options": Config.modernizr.options,
            "tests": Config.modernizr.tests,
            "excludeTests": Config.modernizr.excludeTests
        }))
        .pipe(dest(Config.modernizr.dest));
};
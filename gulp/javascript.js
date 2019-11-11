const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const jsImport = require('gulp-js-import');
const uglifyes = require('gulp-uglify-es').default;
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const notify = require("gulp-notify");
const Helper = require("./helper");
const Config = require("./config");

module.exports = {
    dist: () => {
        return src(Config.javascript.src)
            .pipe(plumber({
                errorHandler: notify.onError((error) => {
                    error.title = "ERROR javascript.dist";
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
            .pipe(uglifyes())
            .pipe(rename({
                basename: 'main',
                suffix: '.min'
            }))
            .pipe(dest(Config.javascript.dest))
    },
    dev: () => {
        return src(Config.javascript.src)
            .pipe(plumber({
                errorHandler: notify.onError((error) => {
                    error.title = "ERROR javascript.dev";
                    error.date = Helper.getDate();
                    console.log("\n" + error.toString() + "\n");

                    return {
                        title: error.title,
                        message: error.message + "\n" + error.date,
                        onLast: true
                    }
                })
            }))
            .pipe(sourcemaps.init())
            .pipe(jsImport({
                hideConsole: true
            }))
            .pipe(rename({
                basename: 'main',
                suffix: '_des.min'
            }))
            .pipe(sourcemaps.write('.'))
            .pipe(dest(Config.javascript.dest))
    }
};
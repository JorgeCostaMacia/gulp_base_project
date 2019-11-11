const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const stylus = require('gulp-stylus');
const nib = require('nib');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const notify = require("gulp-notify");
const Helper = require("./helper");
const Config = require("./config");

module.exports = {
    dist: () => {
        return src(Config.stylesheet.src, { allowEmpty: true })
            .pipe(plumber({
                errorHandler: notify.onError((error) => {
                    error.title = "ERROR stylesheet.dist";
                    error.date = Helper.getDate();
                    console.log("\n" + error.toString() + "\n");

                    return {
                        title: error.title,
                        message: error.message + "\n" + error.date,
                        onLast: true
                    }
                })
            }))
            .pipe(stylus({
                'include css': true,
                'compress': true,
                use: nib(),
                paths: ['node_modules'],
                import: ['nib']
            }))
            .pipe(cleanCSS({
                compatibility: 'ie10'
            }))
            .pipe(rename({
                basename: 'main',
                suffix: '.min'
            }))
            .pipe(dest(Config.stylesheet.dest))
    },
    dev: () => {
        return src(Config.stylesheet.src, { allowEmpty: true })
            .pipe(plumber({
                errorHandler: notify.onError((error) => {
                    error.title = "ERROR stylesheet.dev";
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
            .pipe(stylus({
                'include css': true,
                'compress': false,
                use: nib(),
                paths: ['node_modules'],
                import: ['nib']
            }))
            .pipe(cleanCSS({ format: 'beautify', compatibility: 'ie10' }))
            .pipe(rename({
                basename: 'main',
                suffix: '_des.min'
            }))
            .pipe(sourcemaps.write('.'))
            .pipe(dest(Config.stylesheet.dest))
    }
};
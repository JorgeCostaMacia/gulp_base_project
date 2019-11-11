const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const fs = require('fs');
const pug = require('gulp-pug');
const notify = require("gulp-notify");
const Helper = require("./helper");
const Config = require("./config");

module.exports = {
    dist: () => {
        return src(Config.pug.src)
            .pipe(plumber({
                errorHandler: notify.onError((error) => {
                    error.title = "ERROR pug";
                    error.date = Helper.getDate();
                    console.log("\n" + error.toString() + "\n");

                    return {
                        title: error.title,
                        message: error.message + "\n" + error.date,
                        onLast: true
                    }
                })
            }))
            .pipe(pug({
                basedir: Config.pug.basedir,
                data: {
                    env: Config.pug.env,
                    host: Config.pug.host,
                    projectData: JSON.parse(
                        fs.readFileSync(Config.pug.data, { encoding: 'utf8' })
                    )
                },
                cache: false,
                pretty: true
            }))
            .pipe(dest(Config.pug.dest));
    },
    dev: () => {
        return src(Config.pug.src)
            .pipe(plumber({
                errorHandler: notify.onError((error) => {
                    error.title = "ERROR pug";
                    error.date = Helper.getDate();
                    console.log("\n" + error.toString() + "\n");

                    return {
                        title: error.title,
                        message: error.message + "\n" + error.date,
                        onLast: true
                    }
                })
            }))
            .pipe(pug({
                basedir: Config.pug.basedir.toString(),
                data: {
                    env: Config.pug.env,
                    host: Config.pug.host,
                    projectData: JSON.parse(
                        fs.readFileSync(Config.pug.data, { encoding: 'utf8' })
                    )
                },
                cache: false,
                pretty: false
            }))
            .pipe(dest(Config.pug.dest));
    }
};
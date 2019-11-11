const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const merge = require('gulp-merge-json');
const path = require('path');
const notify = require("gulp-notify");
const Helper = require("./helper");
const Config = require("./config");

module.exports = () => {
    return src("assets/data/**/*.json")
        .pipe(plumber({
            errorHandler: notify.onError((error) => {
                error.title = "ERROR data";
                error.date = Helper.getDate();
                console.log("\n" + error.toString() + "\n");

                return {
                    title: error.title,
                    message: error.message + "\n" + error.date,
                    onLast: true
                }
            })
        }))
        .pipe(merge({
            fileName: Config.data.file,
            edit: (json, file) => {
                // Extract the filename and strip the extension
                let filename = path.basename(file.path);
                let primaryKey = filename.replace(path.extname(filename), '');

                // Set the filename as the primary key for our JSON data
                let data = {};
                data[primaryKey] = json;

                return data;
            }
        }))
        .pipe(dest(Config.data.dest));
};
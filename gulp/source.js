const {
    src,
    dest
} = require('gulp');
const plumber = require('gulp-plumber');
const iconfont = require('gulp-iconfont');
const svgSprites = require('gulp-svg-sprite');
const runTimestamp = Math.round(Date.now() / 1000);
const imagemin = require('gulp-imagemin');
const favicons = require("favicons").stream;
const notify = require("gulp-notify");
const Helper = require("./helper");
const Config = require("./config");

module.exports = {
    fonts: () => {
        return src(Config.fonts.src)
            .pipe(plumber({
                errorHandler: notify.onError((error) => {
                    error.title = "ERROR source.fonts";
                    error.date = Helper.getDate();
                    console.log("\n" + error.toString() + "\n");

                    return {
                        title: error.title,
                        message: error.message + "\n" + error.date,
                        onLast: true
                    }
                })
            }))
            .pipe(dest(Config.fonts.dest))
    },
    iconfont: () => {
        return src(Config.iconfont.src)
            .pipe(plumber({
                errorHandler: notify.onError((error) => {
                    error.title = "ERROR SRC.icons";
                    error.date = Helper.getDate();
                    console.log("\n" + error.toString() + "\n");

                    return {
                        title: error.title,
                        message: error.message + "\n" + error.date,
                        onLast: true
                    }
                })
            }))
            .pipe(iconfont({
                fontName: 'main',
                prependUnicode: true,
                formats: ['ttf', 'eot', 'woff'],
                timestamp: runTimestamp
            }))
            .pipe(dest(Config.iconfont.dest))
    },
    icons: () => {
        return src(Config.icons.src)
            .pipe(plumber({
                errorHandler: notify.onError((error) => {
                    error.title = "ERROR source.fonts";
                    error.date = Helper.getDate();
                    console.log("\n" + error.toString() + "\n");

                    return {
                        title: error.title,
                        message: error.message + "\n" + error.date,
                        onLast: true
                    }
                })
            }))
            .pipe(dest(Config.icons.dest))
    },
    favicons: () => {
        return src(Config.favicons.src)
            .pipe(plumber({
                errorHandler: notify.onError((error) => {
                    error.title = "ERROR source.favicons";
                    error.date = Helper.getDate();
                    console.log("\n" + error.toString() + "\n");

                    return {
                        title: error.title,
                        message: error.message + "\n" + error.date,
                        onLast: true
                    }
                })
            }))
            .pipe(
                favicons({
                    appName: Config.favicons.appName,
                    appShortName: Config.favicons.appShortName,
                    appDescription: Config.favicons.appDescription,
                    developerName: 'Jorge Costa Macia',
                    developerURL: 'https://github.com/JorgeCostaMacia/',
                    background: Config.favicons.background,
                    path: Config.favicons.directory,
                    url: Config.favicons.url,
                    display: Config.favicons.display,
                    orientation: Config.favicons.orientation,
                    scope: '/',
                    start_url: '/?homescreen=1',
                    version: 1.0,
                    logging: false,
                    html: 'favicons.html',
                    pipeHTML: true,
                    replace: true,
                })
            )
            .pipe(dest(Config.favicons.dest));
    },
    images: () => {
        return src(Config.images.src)
            .pipe(plumber({
                errorHandler: notify.onError((error) => {
                    error.title = "ERROR source.images";
                    error.date = Helper.getDate();
                    console.log("\n" + error.toString() + "\n");

                    return {
                        title: error.title,
                        message: error.message + "\n" + error.date,
                        onLast: true
                    }
                })
            }))
            .pipe(imagemin([
                imagemin.gifsicle({
                    interlaced: true,
                    optimizationLevel: Config.images.gif_optimizationLevel
                }),
                imagemin.jpegtran({
                    progressive: true,
                    arithmetic: true
                }),
                imagemin.optipng({
                    optimizationLevel: Config.images.png_optimizationLevel,
                    bitDepthReduction: true,
                    colorTypeReduction: true,
                    paletteReduction: true
                }),
                imagemin.svgo({
                    plugins: [{
                            removeComments: true
                        },
                        {
                            removeMetadata: true
                        },
                        {
                            removeTitle: true
                        },
                        {
                            removeDesc: true
                        },
                        {
                            removeEmptyAttrs: true
                        },
                        {
                            convertColors: true
                        },
                        {
                            removeViewBox: false
                        },
                        {
                            cleanupIDs: false
                        }
                    ]
                })
            ]))
            .pipe(dest(Config.images.dest))
    },
    videos: () => {
        return src(Config.videos.src)
            .pipe(plumber({
                errorHandler: notify.onError((error) => {
                    error.title = "ERROR source.videos";
                    error.date = Helper.getDate();
                    console.log("\n" + error.toString() + "\n");

                    return {
                        title: error.title,
                        message: error.message + "\n" + error.date,
                        onLast: true
                    }
                })
            }))
            .pipe(dest(Config.videos.dest))
    },
    sprites: () => {
        return src(Config.sprites.src)
            .pipe(plumber({
                errorHandler: notify.onError((error) => {
                    error.title = "ERROR source.sprites";
                    error.date = Helper.getDate();
                    console.log("\n" + error.toString() + "\n");

                    return {
                        title: error.title,
                        message: error.message + "\n" + error.date,
                        onLast: true
                    }
                })
            }))
            .pipe(svgSprites({
                svg: {
                    xmlDeclaration: false,
                    doctypeDeclaration: false
                },
                mode: {
                    symbol: {
                        dest: '.',
                        example: true,
                        sprite: 'sprites.svg'
                    }
                }
            }))
            .pipe(dest(Config.sprites.dest))
    }
};
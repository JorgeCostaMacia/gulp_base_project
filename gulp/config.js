let Gulpconfig = require("../gulpconfig");
let Config = {};

Config.app = Gulpconfig.app;

Config.base = Gulpconfig.base;

Config.data = {
    file: "data.json",
    src: Config.base.src + Gulpconfig.data.directory + "**/*.json",
    dest: Config.base.temp
};

Config.pug = {
    src: Config.base.src + Gulpconfig.pug.directory + 'layouts/*.pug',
    dest: Config.base.dest,
    basedir: Config.base.src + Gulpconfig.pug.directory,
    env: Gulpconfig.app.env,
    host: Gulpconfig.app.host,
    data: Config.data.dest + Gulpconfig.data.file
};

Config.javascript = {
    src: Config.base.src + Gulpconfig.javascript.directory + 'index.js',
    dest: Config.base.dest + Gulpconfig.javascript.directory
};

Config.stylesheet = {
    src: Config.base.src + Gulpconfig.stylesheet.directory + "index.styl",
    dest: Config.base.dest + Gulpconfig.stylesheet.directory
};

Config.modernizr = {
    src: [
        Config.base.src + Gulpconfig.javascript.directory + "**/*.js",
        '!' + Config.base.src + Gulpconfig.javascript.directory + '**/index.js'
    ],
    dest: Config.base.src + Gulpconfig.javascript.directory + "vendor/plugins/",
    options:  [
        "html5shiv",
        "html5printshiv",
        "setClasses"
    ],
    tests: Gulpconfig.modernizr.tests,
    excludeTests: Gulpconfig.modernizr.excludeTests
};

Config.documentation = {
    src: [
        'README.md',
        Config.base.src + Gulpconfig.javascript.directory + 'core/**/*.js',
        '!' + Config.base.src + Gulpconfig.javascript.directory + 'core/**/index.js',
        Config.base.src + Gulpconfig.javascript.directory + 'components/**/*.js',
        '!' + Config.base.src + Gulpconfig.javascript.directory + 'components/**/index.js'
    ],
    dest: Config.base.dest + Gulpconfig.documentation.directory
};

Config.source = {
    src: Config.base.src + Gulpconfig.source.directory,
    dest: Config.base.dest + Gulpconfig.source.directory
};

Config.fonts = {
    src: Config.source.src + Gulpconfig.fonts.directory + '**/*.{ttf,otf,eot,svg,woff,woff2,lol}',
    dest: Config.source.dest + Gulpconfig.fonts.directory
};

Config.iconfont = {
    src: Config.source.src + Gulpconfig.iconfont.directory + '*.svg',
    dest: Config.source.dest + Gulpconfig.iconfont.directory
};

Config.icons = {
    src: Config.source.src + Gulpconfig.icons.directory + '**/*.{png,jpg,jpeg,gif,svg}',
    dest: Config.source.dest + Gulpconfig.icons.directory
};

Config.favicons = {
    src: Config.source.src + Gulpconfig.favicons.directory + '*main.png',
    dest: Config.source.dest + Gulpconfig.favicons.directory,
    directory: Gulpconfig.favicons.directory,
    appName: Gulpconfig.favicons.appName,
    appShortName: Gulpconfig.favicons.appShortName,
    appDescription: Gulpconfig.favicons.appDescription,
    url: Gulpconfig.favicons.url,
    display: Gulpconfig.favicons.display,
    orientation: Gulpconfig.favicons.orientation,
    background: Gulpconfig.favicons.background
};

Config.images = {
    src: Config.source.src + Gulpconfig.images.directory + '**/*.{png,jpg,jpeg,gif,svg}',
    dest: Config.source.dest + Gulpconfig.images.directory,
    gif_optimizationLevel: Gulpconfig.images.gif_optimizationLevel,
    png_optimizationLevel: Gulpconfig.images.png_optimizationLevel
};

Config.videos = {
    src: Config.source.src + Gulpconfig.videos.directory + '**/*.{avi,mp4,mpg}',
    dest: Config.source.dest + Gulpconfig.videos.directory
};

Config.sprites = {
    src: Config.source.src + Gulpconfig.sprites.directory + '**/*.svg',
    dest: Config.source.dest + Gulpconfig.sprites.directory,
};

module.exports = Config;
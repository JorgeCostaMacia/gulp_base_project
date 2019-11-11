/*********************************************************************
 *                        GULP COMPONENTES                           *
 *********************************************************************/
const {
    series,
    parallel
} = require('gulp');
const Clean = require('./gulp/clean');
const Pug = require('./gulp/pug');
const Javascript = require('./gulp/javascript');
const Stylesheet = require('./gulp/stylesheet');
const Source = require('./gulp/source');
const modernizr = require('./gulp/modernizr');
const documentation = require('./gulp/documentation');
const data = require('./gulp/data');

/*********************************************************************
 *                               TAREAS                              *
 *********************************************************************/
exports.default = series(
    parallel(
        Clean.dist,
        Clean.temp
    ),
    parallel(
        modernizr,
        data,
    ),
    parallel(
        Pug.dev,
        Javascript.dev,
        Stylesheet.dev
    )
);

exports.dist = series(
    parallel(
        Clean.dist,
        Clean.temp
    ),
    parallel(
        modernizr,
        data,
    ),
    parallel(
        Pug.dist,
        Javascript.dist,
        Stylesheet.dist
    )
);

exports.src = series(
    Clean.dist,
    parallel(
        Source.fonts,
        Source.iconfont,
        Source.icons,
        Source.favicons,
        Source.images,
        Source.videos,
        Source.sprites
    )
);

exports.full = series(
    parallel(
        Clean.dist,
        Clean.temp
    ),
    parallel(
        modernizr,
        data,
    ),
    parallel(
        documentation,
        Pug.dist,
        Javascript.dist,
        Javascript.dev,
        Stylesheet.dist,
        Stylesheet.dev,
        Source.fonts,
        Source.iconfont,
        Source.icons,
        Source.favicons,
        Source.images,
        Source.videos,
        Source.sprites
    )
);
module.exports = {
    app:{
        env: "dev",
        host: 'Cambiar por host segun entorno',
        dist_host: "http://localhost/mustang-b2b/build/",
        dev_host: "http://localhost/mustang-b2b/build/"
    },
    base: {
        src: 'assets/',
        dest: 'dist/',
        temp: 'temp/'
    },
    pug: {
        directory: 'pug/'
    },
    javascript: {
        directory: 'javascript/'
    },
    stylesheet: {
        directory: 'stylesheet/'
    },
    modernizr: {
        tests: [
            "touchevents"
        ],
        excludeTests: [
            //'hidden',
            //'video'
        ]
    },
    documentation: {
        directory: 'documentation/'
    },
    data: {
        file: 'data.json',
        directory: 'data/'
    },
    source: {
        directory: 'source/'
    },
    fonts: {
        directory: 'fonts/'
    },
    iconfont: {
        directory: 'iconfont/'
    },
    icons: {
        directory: 'icons/'
    },
    favicons: {
        directory: 'favicons/',
        appName: 'My app',
        appShortName: 'App',
        appDescription: 'desc App',
        url: '',
        background: '#020307',
        display: 'standalone',
        orientation: 'portrait',
    },
    images: {
        directory: 'images/',
        /*
            1 => Almacena solo la parte modificada de cada imagen.
            2 => También usa la transparencia para reducir aún más el archivo.
            3 => Pruebe varios métodos de optimización (generalmente resultados más lentos, a veces mejores)
         */
        gif_optimizationLevel: 1,
        /*
            1 => 1 trial
            2 => 8 trials
            3 => 16 trials
            4 => 24 trials
            5 => 48 trials
            6 => 120 trials
            7 => 240 trials
        */
        png_optimizationLevel: 3
    },
    videos: {
        directory: 'videos/'
    },
    sprites: {
        directory: 'sprites/'
    }
};
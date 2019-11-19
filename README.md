# Statics Base
	Jorge Costa Maciá

	https://github.com/JorgeCostaMacia/

## Git
	El proyecto esta configurado para que excluya los siguientes directorios:
        .vscode/
        .vs/
        .idea/
        node_modules/
        private/
        dist/
        temp/
        package-lock.json


## Introducción
	Proyecto implementado con gulp mediante componentes
	El core de la app está en la carpeta assets/
    Cada componente serán un pequeño fragmentos de código separado según funcionalidad

    Javascript
        Toda la aplicación cuelga del objeto App el cual se puede declarar en el proyecto o bien en las vistas (Si fuera necesario incluir datos)
        Implementado mediante namespaces
    
    Documentación
        Implementada la documentación mediante jsdoc
    
    Stylesheet
        Implementados los estilos con stylus
    
    Templates
        Implementadas las vistas con pug

    Recursos
        docs
        favicons
        fonts
        iconfont
        icons
        images
        sprites
        videos
    
    Gulp          
        La configuración de las tareas se gestiona en el archivo gulpconfig.js
    
        Con el comando gulp ejecutaremos las tareas programadas.
        Estas tareas se dividen en:
            gulp
                Tareas para desarrollo
            gulp dist
                Tareas para producción
            gulp src
                Tareas para recursos
            gulp full
                Todas las tareas
        
        Tiene las siguientes tareas programadas las cuales genera los archivos resultantes dentro de sus respectivas carpetas en dist/:
            Valida los recursos
            
            Compila los stylesheets y javascripts en un único fichero
            Para desarrollo los ficheros serán:
                main_des.min.css
                main_des.min.css.map
                main_des.min.js
                main_des.min.js.map
            Para producción los ficheros serán:
                main.min.css
                main.min.js
                Además estarán  minificados y sin comentarios
            
            Compila las templates en un único fichero por página
                Para producción estarán minificados y sin comentarios
    
            Genera la documentacion
    
            Genera los favicons a partir de la imagen base
            
            Comprime los recursos images, fonts, icons, docs, videos
            
            Genera una fuente  con los iconfont
            
            Genera un svg con todos los sprites
            
## Importante
    Comprobar y replicar estructura de directorio assets/
    Las carpetas que no existan darán  error en gulp

    La configuración de las tareas se gestionan en el archivo gulpconfig.js
    
    Los recursos una vez generados habrá que moverlos a `source/`
    Con esto mejorara el rendimiento de las tareas programadas gulp
    
## Carpetas principales   
    assets/
       Carpeta destinada a desarrollo
       Estara a su vez subdividida según el tipo de recurso
    dist/
           Carpeta destinada a distribuibles
           Estará a su vez subdividida según el tipo de recurso
    gulp/
       Carpeta destinada a tareas gulp
    source 
       Carpeta destinada a las versiones y recursos
       Estará a su vez subdividida según el tipo de recurso   
    private/
       Carpeta destinada a los archivos que no queremos que sean subidos al repositorio
       Tendrá un commit inicial con un readme.md para que se publique la carpeta, pero luego sera excluida
    temp/
       Carpeta destinada a los archivos temporales

## Stylesheet
	Para trabajar con los estilos se utiliza Stylus [http://stylus-lang.com/](http://stylus-lang.com/) como lenguaje de preprocesado. 

	Está dividido en los siguientes componentes/modulos: 
	    components:
		    Componentes reutilizables
		layouts:
		    Componentes específicos para una página  
		partials:
            Componentes específicos para una sección       		
	    core:
		    Componentes principales
		    variables, mixins...
	    vendor:
		    Plugins utilizados

	El punto de entrada será el archivo index.styl alojado en la raíz

## Javascript
	Está dividido en los siguientes componentes/modulos:
	    components:
		    Componentes reutilizables
	    core:
		    Componentes principales
		    namespace, ini jsdoc...
	    vendor:
		    Plugins utilizados

	El punto de entrada será el archivo index.js alojado en la raíz

## Templates
	Para trabajar con las vistas se utiliza Pug [https://pugjs.org/api/getting-started.html](https://pugjs.org/api/getting-started.html) como lenguaje de compilación. 

	Está dividido en los siguientes componentes/modulos:
	    components:
		    Componentes reutilizables
		layouts:
		    Componentes específicos para una página  
		partials:
            Componentes específicos para una sección       		
	    core:
		    Componentes principales
		    variables, mixins...
	    vendor:
		    Plugins utilizados

	El punto de entrada serán los archivos alojados en la carpeta layouts/
	
## Documentación
	Para trabajar con los estilos se utiliza jsdoc [https://devdocs.io/jsdoc/](https://devdocs.io/jsdoc/) como herramienta para generarlo. 

	Los apartados principales son:
	    App:
		    Objeto del que cuelga toda la aplicación
	    App.Data:
		    Datos necesarios para la app cargados por el servidor
	    App.Namespaces:
		    Namespaces con los namespaces y clases de la aplicación
	    App.Eventos:
		    Registro de eventos del DOM
	    App.Instances:
		    Instancias de objetos

## Programas necesarios
	nodejs

## Instrucciones para la inicialización

### 1 Inicializar package.json si no está inicializado.
	npm ini

### 2 instalar y actualizar dependencias con el comando de nodejs
	npm update npm@latest -g
	
	npm i -g npm-check-updates

	ncu -u
	ncu -a

### 3 instalar dependencias en local con el comando de node js
	npm i -D

	Para un mayor control sobre las versiones utilizaremos -D para instalarlos de forma local y no global

## Despliegue tareas

### Despliegue Desarrollo
	gulp

### Despliegue Producción
	gulp dist
	
### Despliegue Recursos
    gulp src
    
### Despliegue Todo
    gulp full

## Estructura carpetas

### Estructura assets
```
+-- assets
|   +-- data
|   |   +-- index.json
|   +-- javascript
|   |   +-- index.js
|   |   +-- namespace.js
|   |   +-- components
|   |   |   +-- component
|   |   |   |   +-- index.js
|   |   |   |   +-- class.js
|   |   |   |   +-- instance.js
|   |   |   +-- cursos
|   |   |   +-- error
|   |   |   |   +-- console
|   |   |   |   +-- event
|   |   |   |   +-- exception
|   |   |   |   +-- process
|   |   |   +-- helpers
|   |   |   |   +-- date_time
|   |   |   |   +-- device
|   |   |   |   +-- parser
|   |   |   |   +-- validate
|   |   |   +-- initialize
|   |   |   +-- model
|   |   |   |   +-- ajax
|   |   |   |   +-- controller
|   |   |   |   +-- cookie
|   |   |   |   +-- msj
|   |   |   +-- popup
|   |   |   |   +-- event
|   |   |   |   +-- loading
|   |   |   |   +-- msj
|   |   |   +-- slider
|   |   |   +-- touch
|   |   +-- core
|   |   |   +-- index.js
|   |   |   +-- use_strict.js
|   |   |   +-- description.js
|   |   |   +-- namespace.js
|   |   |   +-- webfont.js
|   |   +-- vendor.js
|   |   |   +-- index.js
|   |   |   +-- plugins
|   |   |   |   +-- plugin.js
|   |   |   |   +-- index.js
|   +-- pug
|   |   +-- components
|   |   |   +-- component.pug
|   |   +-- core
|   |   |   +-- core.pug
|   |   +-- layouts
|   |   |   +-- layout.pug
|   |   +-- partials
|   |   |   +-- partial.pug
|   +-- source
|   |   +-- docs
|   |   |   +-- doc
|   |   +-- favicons
|   |   |   +-- favicon
|   |   +-- fonts
|   |   |   +-- font
|   |   +-- iconfont
|   |   |   +-- iconfont
|   |   +-- icons
|   |   |   +-- icon
|   |   +-- images
|   |   |   +-- image
|   |   +-- sprites
|   |   |   +-- sprite.svg
|   |   +-- videos
|   |   |   +-- video
|   +-- stylesheet
|   |   +-- index.styl
|   |   +-- components
|   |   |   +-- index.styl
|   |   |   +-- component
|   |   |   | 	+-- index.styl
|   |   |   |	+-- main.styl
|   |   |   |	+-- media_query.styl
|   |   +-- core
|   |   |   +-- index.styl
|   |   |   +-- _variables.styl
|   |   |   +-- _mixins.styl
|   |   |   +-- _helpers.styl
|   |   |   +-- _grid.styl
|   |   |   +-- _print.styl
|   |   +-- layouts
|   |   |   +-- index.styl
|   |   |   +-- layout
|   |   |   | 	+-- index.styl
|   |   |   |	+-- main.styl
|   |   |   |	+-- media_query.styl
|   |   +-- partials
|   |   |   +-- index.styl
|   |   |   +-- partial
|   |   |   | 	+-- index.styl
|   |   |   |	+-- main.styl
|   |   |   |	+-- media_query.styl
|   |	+-- vendor
|   |   |   +-- index.styl
|   |   |   +-- plugins
|   |   |   |   +-- plugin.styl
```

## Estructura distribuible
```
+-- dist
|   +-- css
|   |   +-- main_des.min.css
|   |   +-- main_des.min.css.map
|   |   +-- main.min.css
|   +-- docs
|   +-- fonts
|   +-- icons
|   +-- images
|   +-- js
|   |   +-- main_des.min.js
|   |   +-- main_des.min.js.map
|   |   +-- main.min.js
```

## Estructura gulp
```
+-- gulp
|   +-- clean.js
|   +-- config.js
|   +-- data.js
|   +-- documentation.js
|   +-- helper.js
|   +-- javascript.js
|   +-- modernizr.js
|   +-- pug.js
|   +-- source.js
|   +-- stylesheet.js
```

## Estructura source
```
+-- source
|   +-- cdn
|   |   +-- docs
|   |   +-- fonts
|   |   +-- icons
|   |   +-- images
|   |   +-- javascripts
|   |   +-- sprites
|   |   +-- stylesheets
|   |   +-- videos
|   +-- dist
|   |   +-- docs
|   |   +-- fonts
|   |   +-- icons
|   |   +-- images
|   |   +-- javascripts
|   |   +-- sprites
|   |   +-- stylesheets
|   |   +-- videos
|   +-- docs
|   +-- favicons
|   +-- fonts
|   +-- icons
|   +-- images
|   +-- sprites
|   +-- videos
```

## PLUGINS

### JQUERY
	[https://jquery.com/](https://jquery.com/)
	[https://github.com/jquery/jquery](https://github.com/jquery/jquery)
	[https://www.npmjs.com/package/jquery/](https://www.npmjs.com/package/jquery/)

	npm i -D jquery

	node_modules/jquery/dist/jquery.js
	==========================================================================	
	node_modules/jquery/dist/jquery.min.js
	node_modules/jquery/dist/jquery.min.map

### WEBFONTLOADER
	[https://developers.google.com/fonts/docs/webfont_loader?hl=es](https://developers.google.com/fonts/docs/webfont_loader?hl=es)
	[https://github.com/typekit/webfontloader](https://github.com/typekit/webfontloader)
	[https://www.npmjs.com/package/webfontloader](https://www.npmjs.com/package/webfontloader)

	npm i -D webfontloader

	node_modules/webfontloader/webfontloader.js
	==========================================================================	
	node_modules/webfontloader/webfontloader.js

### SWIPER
	[https://swiperjs.com/](https://swiperjs.com/)
	[https://github.com/nolimits4web/Swiper/tree/master/package](https://github.com/nolimits4web/Swiper/tree/master/package)
	[https://www.npmjs.com/package/swiper](https://www.npmjs.com/package/swiper)

	npm i -D swiper

	node_modules/swiper/js/swiper.js
	node_modules/swiper/css/swiper.css
	==========================================================================	
	node_modules/swiper/js/swiper.min.js
	node_modules/swiper/css/swiper.min.css

### PHTOSWIPE
	[https://photoswipe.com/](https://photoswipe.com/)
	[https://github.com/dimsemenov/photoswipe](https://github.com/dimsemenov/photoswipe)
	[https://www.npmjs.com/package/photoswipe](https://www.npmjs.com/package/photoswipe)

    npm i -D mmenu-js

	node_modules/photoswipe/dist/photoswipe.js
	node_modules/photoswipe/dist/photoswipe-ui-default.js
	==========================================================================	
    node_modules/photoswipe/dist/photoswipe.min.js
	node_modules/photoswipe/dist/photoswipe-ui-default.min.js

### JQUERY MMENU
	[https://mmenujs.com/](https://mmenujs.com/)
	[https://github.com/FrDH/mmenu-js](https://github.com/FrDH/mmenu-js)
	[https://www.npmjs.com/package/mmenu-js/v/8.0.3](https://www.npmjs.com/package/mmenu-js/v/8.0.3)

	npm i -D photoswipe

	node_modules/jquery.mmenu/dist/jquery.mmenu.all.js
	node_modules/jquery.mmenu/dist/jquery.mmenu.all.css
	==========================================================================	
    node_modules/jquery.mmenu/dist/jquery.mmenu.all.js
	node_modules/jquery.mmenu/dist/jquery.mmenu.all.css

### JQUERY ACCORDION
	[https://jqueryui.com/accordion/](https://jqueryui.com/accordion/)
	[https://github.com/vctrfrnndz/jquery-accordion](https://github.com/vctrfrnndz/jquery-accordion)
	[https://www.npmjs.com/package/jq-accordion](https://www.npmjs.com/package/jq-accordion)

	npm i -D jq-accordion

	node_modules/jq-accordion/dist/js/jquery.accordion.js
	node_modules/jq-accordion/dist/css/jquery.accordion.css
	==========================================================================	
    node_modules/jq-accordion/dist/js/jquery.accordion.min.js
	node_modules/jq-accordion/dist/css/jquery.accordion.css

### MASONRY-LAYOUT
	[https://masonry.desandro.com/](https://masonry.desandro.com/)
	[https://github.com/desandro/masonry](https://github.com/desandro/masonry)
	[https://www.npmjs.com/package/masonry-layout](https://www.npmjs.com/package/masonry-layout)

	npm i -D masonry-layout

	node_modules/masonry-layout/dist/masonry.pkgd.js
	==========================================================================	
    node_modules/masonry-layout/dist/masonry.pkgd.min.js
	
### MOMENTJS
	[https://momentjs.com/](https://momentjs.com/)
	[https://www.npmjs.com/package/moment](https://www.npmjs.com/package/moment)

	npm i -D moment

	node_modules/moment/moment.js
	node_modules/moment/min/locales.js
	node_modules/moment/min/moment-with-locales.js
	==========================================================================
	node_modules/moment/min/moment.min.js
	node_modules/moment/min/locales.min.js
	node_modules/moment/min/moment-with-locales.min.js

### UNDERSCORE
	[https://underscorejs.org/](https://underscorejs.org/)
	[https://www.npmjs.com/package/underscore](https://www.npmjs.com/package/underscore)

	npm i -D underscore

	node_modules/underscore/underscore.js
	==========================================================================
	node_modules/underscore/underscore.min.js
	node_modules/underscore/underscore.min.map

### POPPER
	[https://popper.js.org/](https://popper.js.org/)
	[https://www.npmjs.com/package/popper](https://www.npmjs.com/package/popper)

	npm i -D popper 

	node_modules/popper.js/dist/popper.js
	==========================================================================
	node_modules/popper.js/dist/popper.min.js
	node_modules/popper.js/dist/popper.min.map

### BOOTSTRAP	
	[https://getbootstrap.com/](https://getbootstrap.com/)
	[https://www.npmjs.com/package/bootstrap](https://www.npmjs.com/package/bootstrap)
	
	npm i -D bootstrap

	node_modules/bootstrap/dist/js/bootstrap.js
	node_modules/bootstrap/dist/css/bootstrap.css
	==========================================================================
	node_modules/bootstrap/dist/js/bootstrap.min.js
	node_modules/bootstrap/dist/js/bootstrap.min.js.map
	node_modules/bootstrap/dist/css/bootstrap.min.css
	node_modules/bootstrap/dist/css/bootstrap.min.css.map

### BOOTSTRAP-DATEPICKER
	[https://github.com/uxsolutions/bootstrap-datepicker](https://github.com/uxsolutions/bootstrap-datepicker)	
	[https://www.npmjs.com/package/bootstrap-datepicker](https://www.npmjs.com/package/bootstrap-datepicker)

	npm i -D bootstrap-datepicker

	node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js
	node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.css
	==========================================================================
	node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js
	node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.css

### ANIMATE.CSS
	[https://daneden.github.io/animate.css/](https://daneden.github.io/animate.css/)
	[https://github.com/daneden/animate.css](https://github.com/daneden/animate.css)

	npm i -D animate.css

	node_modules/animate.css/animate.css
	==========================================================================	
	node_modules/animate.css/animate.min.css

### FOOTABLE
	[https://fooplugins.github.io/FooTable/](https://fooplugins.github.io/FooTable/)
	[https://www.npmjs.com/package/footable](https://www.npmjs.com/package/footable)

	npm i -D footable

	node_modules/footable/dist/footable.js
	==========================================================================
	node_modules/footable/dist/footable.min.js

### SCROLLMAGIC
	[http://scrollmagic.io/](http://scrollmagic.io/)
	[https://www.npmjs.com/package/scrollmagic](https://www.npmjs.com/package/scrollmagic)

	npm i -D scrollmagic

	node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js
	==========================================================================
	node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js

### VEGAS
	[https://vegas.jaysalvat.com/](https://vegas.jaysalvat.com/)
	[https://www.npmjs.com/package/vegas](https://www.npmjs.com/package/vegas)

	npm i -D vegas

	node_modules/vegas/dist/vegas.js
	node_modules/vegas/dist/vegas.css
	==========================================================================
	node_modules/vegas/dist/vegas.min.js
	node_modules/vegas/dist/vegas.min.css
	
### JSPDF
	[https://parall.ax/products/jspdf](https://parall.ax/products/jspdf)
	[https://www.npmjs.com/package/jspdf](https://www.npmjs.com/package/jspdf)
    [https://github.com/MrRio/jsPDF](https://github.com/MrRio/jsPDF)
    
	npm i -D jspdf

	node_modules/jspdf/dist/jspdf.min.js
	==========================================================================
	node_modules/jspdf/dist/jspdf.min.js

### JSPDF-AUTOTABLE
	[https://simonbengtsson.github.io/jsPDF-AutoTable/](https://simonbengtsson.github.io/jsPDF-AutoTable/)
	[https://www.npmjs.com/package/jspdf-autotable](https://www.npmjs.com/package/jspdf-autotable)
    [https://github.com/simonbengtsson/jsPDF-AutoTable](https://github.com/simonbengtsson/jsPDF-AutoTable)
    
	npm i -D jspdf-autotable

	node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.min.js
	==========================================================================
	node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.min.js
	
### JSPDF-ADDIMAGE
	[https://parall.ax/products/jspdf](https://parall.ax/products/jspdf)
	[https://www.npmjs.com/package/jspdf](https://www.npmjs.com/package/jspdf)
    [https://github.com/MrRio/jsPDF](https://github.com/MrRio/jsPDF)
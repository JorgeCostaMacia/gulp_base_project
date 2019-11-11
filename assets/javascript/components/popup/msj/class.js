/** 
 * Manage alerts popups
 *  
 * @class
 */
App.Namespaces.Popup.Msj = class {
    /**
     * Create Instance
     * 
     * @memberof App.Namespaces.Popup.Msj
     * @constructor
     * @access public
     * @this App.Namespaces.Popup.Msj
     * @throws {InvalidArgumentException}
     */
    constructor() {
        try {
            this.events();
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'popup',
                'COMPONENT': 'msj',
                'METHOD': 'constructor'
            });
        }
    }

    /**
     * Add events:<br/>
     * Capture click on<br/>
     * .popup-inform<br/>
     * Call this.information
     * 
     * @memberof App.Namespaces.Popup.Msj
     * @method events
     * @access public
     * @this App.Namespaces.Popup.Msj
     */
    events() {
        try {
            let $document = $(document);

            /**
             * Capture document.click on<br/> 
             * .popup-toggle<br/> 
             * Call App.Namespaces.Popup.Msj.information
             * 
             * @memberof App.Eventos
             * @event document#".popup-information"#"click" 
             * @param {event} event
             */
            $document.on('click', '.popup-information', (event) => this.information(event));
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'popup',
                'COMPONENT': 'msj',
                'METHOD': 'events'
            });
        }
    }

    /**
     * Capture click on<br/>
     * .popup-inform<br/>
     * Get popup button<br/>
     * Call this.open
     * 
     * @memberof App.Namespaces.Popup.Msj
     * @method information
     * @access public
     * @this App.Namespaces.Popup.Msj
     * @param {event} event
     */
    information(event) {
        try {
            let $this = $(event.currentTarget);

            this.open({
                id: "popup-aviso",
                title: $this.data("title"),
                content: $this.data("content")
            });
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'popup',
                'COMPONENT': 'msj',
                'METHOD': 'information'
            });
        }
    }

    /**
     * Get data options<br/>
     * Get Popup ID<br/>
     * Close all popups<br/>
     * Set title and content<br/>
     * Open popup
     * 
     * @memberof App.Namespaces.Popup.Msj
     * @method open
     * @access public
     * @this App.Namespaces.Popup.Msj
     * @throws {InvalidArgumentException}
     * @param {json} popup
     * @param {string} popup.id
     * @param {string} popup.title
     * @param {string} popup.content
     */
    open(popup) {
        try {
            let $popup = $('#' + popup.id);

            this.close();
            $popup.find(".popup-title").html(popup.title);
            $popup.find(".popup-content").html(popup.content);
            $('body').addClass('popup--opened');
            $popup.addClass('show-item');
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'popup',
                'COMPONENT': 'msj',
                'METHOD': 'open'
            });
        }
    }

    /**
     * Close popups
     * 
     * @memberof App.Namespaces.Popup.Msj
     * @method close
     * @access public
     * @this App.Namespaces.Popup.Msj
     * @throws {InvalidArgumentException}
     */
    close() {
        try {
            $('body').removeClass('popup--opened');
            $('.popup').removeClass('show-item');
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'popup',
                'COMPONENT': 'msj',
                'METHOD': 'close'
            });
        }
    }

    /**
     * Get msj content<br/>
     * Get time to close<br/>
     * Close dropdown<br/>
     * Set content of popup<br/>
     * Open popup popup-alerta<br/>
     * At time if popup has open, close it
     * 
     * @memberof App.Namespaces.Popup.Msj
     * @method alerta
     * @access public
     * @this App.Namespaces.Popup.Msj
     * @throws {InvalidArgumentException}
     * @param {json} msj
     * @param {string} msj.title
     * @param {string} msj.content
     * @param {int} time
     */
    alerta(msj = {
        title: "Alerta",
        content: ""
    }, time = 5000) {
        try {
            this.open({
                id: "popup-alerta",
                title: msj.title,
                content: msj.content
            });
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'popup',
                'COMPONENT': 'msj',
                'METHOD': 'alerta'
            });
        }
    }

    /**
     * Get msj content<br/>
     * Get time to close<br/>
     * Close dropdown<br/>
     * Set content of popup<br/>
     * Open popup popup-aviso<br/>
     * At time if popup has open, close it
     *
     * @memberof App.Namespaces.Popup.Msj
     * @method aviso
     * @access public
     * @this App.Namespaces.Popup.Msj
     * @throws {InvalidArgumentException}
     * @param {json} msj
     * @param {string} msj.title
     * @param {string} msj.content
     * @param {int} time
     */
    aviso(msj = {
        title: "Aviso",
        content: ""
    }, time = 5000) {
        try {
            this.open({
                id: "popup-aviso",
                title: msj.title,
                content: msj.content
            });
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'popup',
                'COMPONENT': 'msj',
                'METHOD': 'aviso'
            });
        }
    }
}
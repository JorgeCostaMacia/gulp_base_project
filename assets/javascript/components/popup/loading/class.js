/** 
 * Manage Loading popups
 *  
 * @class
 */
App.Namespaces.Popup.Loading = class {
    /**
     * Create Instance
     * 
     * @memberof App.Namespaces.Popup.Loading
     * @constructor
     * @access public
     * @this App.Namespaces.Popup.Loading
     * @throws {InvalidArgumentException}
     */
    constructor() {
        try {
            this.events();
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'popup',
                'COMPONENT': 'loading',
                'METHOD': 'constructor'
            });
        }
    }

    /**
     * Add events:<br/>
     * Capture beforeunload on<br/>
     * window<br/>
     * Call App.Popup.Loading.open
     * 
     * @memberof App.Namespaces.Popup.Loading
     * @method events
     * @access public
     * @this App.Namespaces.Popup.Loading
     */
    events() {
        try {
            let $window = $(window);

            /**
             * Capture beforeunload on<br/>
             * window<br/>
             * Call App.Popup.Loading.open
             * 
             * @memberof App.Eventos
             * @event document#"window"#".popup-information"#"click" 
             * @param {event} event
             */
            $window.on("beforeunload", (event) => this.open_delay(event));
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'popup',
                'COMPONENT': 'loading',
                'METHOD': 'events'
            });
        }
    }

    /**
     * Close popups<br/>
     * Open modal loading
     * 
     * @memberof App.Namespaces.Popup.Loading
     * @method open_delay
     * @access public
     * @this App.Namespaces.Popup.Loading
     * @throws {InvalidArgumentException}
     * @param {event} event
     */
    open_delay(event) {
        try {
            let $body = $("body");

            setTimeout(() => {
                $body.removeClass('popup--opened');
                $(".popup").removeClass('show-item');

                $body.addClass('popup--opened');
                $("#popup-cargando").addClass('show-item');
            }, 1000);
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'popup',
                'COMPONENT': 'loading',
                'METHOD': 'open_delay'
            });
        }
    }

    /**
     * Close popups<br/>
     * Open modal loading
     * 
     * @memberof App.Namespaces.Popup.Loading
     * @method open
     * @access public
     * @this App.Namespaces.Popup.Loading
     * @throws {InvalidArgumentException}
     */
    open() {
        try {
            let $body = $("body");

            $body.removeClass('popup--opened');
            $(".popup").removeClass('show-item');

            $body.addClass('popup--opened');
            $("#popup-cargando").addClass('show-item');
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'popup',
                'COMPONENT': 'loading',
                'METHOD': 'open'
            });
        }
    }

    /**
     * Close popups
     * 
     * @memberof App.Namespaces.Popup.Loading
     * @method close
     * @access public
     * @this App.Namespaces.Popup.Loading
     * @throws {InvalidArgumentException}
     */
    close() {
        try {
            $("#popup-cargando").removeClass('show-item');

            if ($(".popup.show-item").length == 0) {
                $('body').removeClass('popup--opened');
            }
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'popup',
                'COMPONENT': 'loading',
                'METHOD': 'close'
            });
        }
    }
}
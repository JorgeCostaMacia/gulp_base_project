/** 
 * Manage Popup events
 *  
 * @class
 */
App.Namespaces.Popup.Event = class {
    /**
     * Create Instance<br/>
     * Call events
     * 
     * @memberof App.Namespaces.Popup.Event
     * @constructor
     * @access public
     * @this App.Namespaces.Popup.Event
     * @throws {InvalidArgumentException}
     */
    constructor() {
        try {
            this.events();
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'popup',
                'COMPONENT': 'event',
                'METHOD': 'constructor'
            });
        }
    }

    /**
     * Add events:<br/>
     * Capture click on<br/>
     * .popup-toggle<br/>
     * Call this.open
     * 
     * @memberof App.Namespaces.Popup.Event
     * @method events
     * @access public
     * @this App.Namespaces.Popup.Event
     */
    events() {
        try {
            let $document = $(document);

            /**
             * Capture document.click on<br/> 
             * .popup-toggle<br/> 
             * Call App.Popup.Event.open
             * 
             * @memberof App.Eventos
             * @event document#".popup-toggle"#"click" 
             * @param {event} event
             */
            $document.on('click', '.popup-toggle', (event) => this.open(event));

            /**
             * Capture document.click on<br/> 
             * body.popup--opened .popup, body.popup--opened, .btn--close<br/> 
             * Call App.Popup.Event.close
             * 
             * @memberof document
             * @event document#"body.popup--opened&nbsp;.popup,&nbsp;body.popup--opened,&nbsp;.btn--close"#"click" 
             * @param {event} event
             */
            $document.on('click', 'body.popup--opened .popup, body.popup--opened, .btn--close, .pswp--open', (event) => this.close(event));
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'popup',
                'COMPONENT': 'event',
                'METHOD': 'events'
            });
        }
    }

    /**
     * Capture event click on<br/>
     * .popup-toggle<br/>
     * Open popup
     * 
     * @memberof App.Namespaces.Popup.Event
     * @method open
     * @access public
     * @this App.Namespaces.Popup.Event
     * @throws {InvalidArgumentException}
     * @param {event} event
     */
    open(event) {
        try {
            event.preventDefault();

            let $this = $(event.currentTarget);

            App.Nav.Mobile.close();

            $('body').addClass('popup--opened');
            $('#' + $this.data("popup")).addClass('show-item');
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'popup',
                'COMPONENT': 'event',
                'METHOD': 'open'
            });
        }
    }

    /**
     * Capture event click on<br/> 
     * body.popup--opened, body.popup--opened .popup<br/>
     * If this event not popup and any popup open<br/>
     * Close popup
     * 
     * @memberof App.Namespaces.Popup.Event
     * @method close
     * @access public
     * @this App.Namespaces.Popup.Event
     * @throws {InvalidArgumentException}
     * @param {event} event
     */
    close(event) {
        try {
            let $this = $(event.currentTarget);
            let $video = $('video');


            if (!$this.hasClass("popup") && !$this.hasClass("pswp--open") && !$("#popup-cargando").hasClass("show-item")) {
                if ($('body').hasClass('popup--opened')) {
                    event.preventDefault();

                    if ($video.length > 0) {
                        $video[0].pause();
                    }

                    $('body').removeClass('popup--opened');
                    $('.popup').removeClass('show-item');
                }
            } else {
                event.stopPropagation();
            }
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'popup',
                'COMPONENT': 'event',
                'METHOD': 'close'
            });
        }
    }
}
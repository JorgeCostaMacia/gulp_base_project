/** 
 * Manage error event
 *
 * @class
 */
App.Namespaces.Error.Event = class {
    /**
     * Create Instance<br/>
     * Call events
     * 
     * @memberof App.Namespaces.Error.Event
     * @constructor
     * @access public
     * @this App.Namespaces.Error.Event
     * @throws {InvalidArgumentException}
     */
    constructor() {
        try {
            this.events();
        } catch (exception) {
            App.Error.Console.error(exception);
        }
    }

    /**
     * Add events:<br/>
     * Capture error on<br/>
     * window<br/>
     * Call App.Error.Event.capture
     * 
     * @memberof App.Namespaces.Error.Event
     * @method events
     * @access public
     * @this App.Namespaces.Error.Event
     * @throws {InvalidArgumentException} 
     */
    events() {
        try {
            /**
             * Capture error on<br/>
             * window<br/>
             * Call App.Error.Event.capture
             * 
             * @memberof App.Eventos
             * @event document#"ready" 
             * @param {event} event
             */
            window.addEventListener('error', (event) => this.capture(event), true);
        } catch (exception) {
            App.Error.Console.error(exception);
        }
    }

    /**
     * Capture error on<br/>
     * window<br/>
     * Send data to server
     * 
     * @memberof App.Namespaces.Error.Event
     * @method capture
     * @access public
     * @this App.Namespaces.Error.Event
     * @throws {InvalidArgumentException} 
     * @param {event} event
     * @param {string} event.message
     * @param {event} event.filename
     * @param {int} event.lineno
     * @param {int} event.colno
     * @param {error} event.error
     */
    capture(event) {
        try {
            let exception = {
                DATE: App.Helpers.Date_Time.getNow()
            };

            if (event.message == "Script error.") {
                exception.ERROR = "Excepcion no controlada";
                exception.NAMESPACE = "window";
                exception.COMPONENT = "script";
                exception.METHOD = "";

                App.Error.Console.info(exception);
                App.Error.Process.process(exception);
            }
            /*
            else {
                let $this = $(event.target);

                exception.ERROR = "404 " + $this.prop("src");
                exception.NAMESPACE = "window";
                exception.COMPONENT = event.target.tagName.toLowerCase() + "#" + $this.prop("id") + "." + $this.prop("class").replace(/ /g, ".");
                exception.METHOD = "get";
            }

            App.Error.Console.info(exception);

            App.Error.Process.process(exception);
            */
        } catch (exception_p) {
            App.Error.Console.error(exception_p);
        }
    }
}
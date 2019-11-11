/** 
 * Manage App initialize
 *
 * @class
 */
App.Namespaces.Initialize = class {
    /**
     * Create Instance<br/>
     * Call events
     * 
     * @memberof App.Namespaces.Initialize
     * @constructor
     * @access public
     * @this App.Namespaces.Initialize
     * @throws {InvalidArgumentException}
     */
    constructor() {
        try {
            this.events();
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'initialize',
                'COMPONENT': 'initialize',
                'METHOD': 'constructor'
            });
        }
    }

    /**
     * Add events:<br/>
     * Capture ready on <br/>
     * document<br/>
     * Call this.app_ini
     * 
     * @memberof App.Namespaces.Initialize
     * @method events
     * @access public
     * @this App.Namespaces.Initialize
     * @throws {InvalidArgumentException} 
     */
    events() {
        try {
            let $document = $(document);
            /**
             * Capture ready on <br/>
             * document<br/>
             * Call App.Initialize.app_ini
             * 
             * @memberof App.Eventos
             * @event document#"ready" 
             * @param {event} event
             */
            $document.ready((event) => this.app_ini(event));
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'initialize',
                'COMPONENT': 'initialize',
                'METHOD': 'events'
            });
        }
    }

    /**
     * Capture ready on <br/>
     * document<br/>
     * Call App.Model.Controller.loaded<br/>
     * Remove hidden of popups div
     * 
     * @memberof App.Namespaces.Initialize
     * @method app_ini
     * @access public
     * @this App.Namespaces.Initialize
     * @throws {InvalidArgumentException}
     * @param {event} event
     */
    app_ini(event) {
        try {
            App.Model.Controller.loaded();
            $(".overlay").removeClass("hidden");

            App.Model.Cookie.set({
                "name": "EnableCookie",
                "value": "1"
            }, () => {

            });
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'initialize',
                'COMPONENT': 'initialize',
                'METHOD': 'app_ini'
            });
        }
    }
}
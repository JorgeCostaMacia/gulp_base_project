/** 
 * Touch events Manage
 * 
 * @class
 */
App.Namespaces.Touch = class {
    /**
     * Create Instance<br/>
     * Call events
     * 
     * @memberof App.Namespaces.Touch
     * @constructor
     * @access public
     * @this App.Namespaces.Touch
     * @throws {InvalidArgumentException}
     */
    constructor() {
        try {
            this.events();
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'touch',
                'COMPONENT': 'touch',
                'METHOD': 'constructor'
            });
        }
    }

    /**
     * Add events:<br/>
     * Capture touchstart<br/>
     * Capture touchmove<br/>
     * set passive to true
     * 
     * @memberof App.Namespaces.Touch
     * @method events
     * @access public
     * @this App.Namespaces.Touch
     * @throws {InvalidArgumentException} 
     */
    events() {
        try {
            let $document = $(document);

            /**
             * Capture click on<br/>
             * .tab-trigger<br/>
             * Call App.Tabs.toggle
             * 
             * @memberof App.Eventos
             * @event document#".tab-trigger"#"click" 
             * @param {event} event
             */
            jQuery.event.special.touchstart = {
                setup: function(_, ns, handle) {
                    if (ns.includes("noPreventDefault")) {
                        this.addEventListener("touchstart", handle, { passive: false });
                    } else {
                        this.addEventListener("touchstart", handle, { passive: true });
                    }
                }
            };

            jQuery.event.special.touchmove = {
                setup: function(_, ns, handle) {
                    if (ns.includes("noPreventDefault")) {
                        this.addEventListener("touchmove", handle, { passive: false });
                    } else {
                        this.addEventListener("touchmove", handle, { passive: true });
                    }
                }
            };
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'tabs',
                'COMPONENT': 'tabs',
                'METHOD': 'events'
            });
        }
    }
}
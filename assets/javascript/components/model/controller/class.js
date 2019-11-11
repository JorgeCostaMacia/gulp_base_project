/** 
 * Manage petitions of Model
 *  
 * @class
 */
App.Namespaces.Model.Controller = class {
    /**
     * Create Instance<br/>
     * Call events
     * 
     * @memberof App.Namespaces.Model.Controller
     * @constructor
     * @access public
     * @this App.Namespaces.Model.Controller
     * @throws {InvalidArgumentException}
     * @property {boolean} in_progress - If call is in progess
     */
    constructor() {
        try {
            this.in_progress = true;
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'model',
                'COMPONENT': 'controller',
                'METHOD': 'constructor'
            });
        }
    }

    /**
     * Validate if in_progress<br/>
     * Change to loading if in_progess === false<br/>
     * return validation
     * 
     * @memberof App.Namespaces.Model.Controller
     * @method eval_progess
     * @access public
     * @this App.Namespaces.Model.Controller
     * @throws {InvalidArgumentException} 
     * @return {boolean}
     */
    eval_progess() {
        try {
            if (this.in_progress === false) {
                this.loading();
                return false;
            } else {
                return true;
            }
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'model',
                'COMPONENT': 'controller',
                'METHOD': 'eval_progess'
            });
        }
    }

    /**
     * Set inprogress = true<br/>
     * Change cursor to loading
     * 
     * @memberof App.Namespaces.Model.Controller
     * @method loading
     * @access public
     * @this App.Namespaces.Model.Controller
     * @throws {InvalidArgumentException}
     */
    loading() {
        try {
            this.in_progress = true;
            App.Popup.Loading.open();
            App.Cursor.loading();
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'model',
                'COMPONENT': 'controller',
                'METHOD': 'loading'
            });
        }
    }

    /**
     * Set inprogress = false<br/>
     * Remove cursor to loading
     * 
     * @memberof App.Namespaces.Model.Controller
     * @method loaded
     * @access public
     * @this App.Namespaces.Model.Controller|e
     * @throws {InvalidArgumentException} 
     * @property {event|null} event
     */
    loaded(event) {
        try {
            this.in_progress = false;
            App.Popup.Loading.close();
            App.Cursor.loaded();
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'model',
                'COMPONENT': 'controller',
                'METHOD': 'loaded'
            });
        }
    }
}
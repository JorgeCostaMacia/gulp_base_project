/** 
 * Manage error<br/>
 * Error JS controller by exceptions<br/>
 * Error 404 controller by page 404<br/>
 *
 * @class
 */
App.Namespaces.Error.Console = class {
    /**
     * Capture exception JS with custom data of the exception<br/>
     * Show in to console.log
     * 
     * @memberof App.Namespaces.Error.Console
     * @method info
     * @access public
     * @this App.Namespaces.Error.Console
     * @param {json} exception
     * @param {exception} exception.ERROR
     * @param {string} exception.NAMESPACE
     * @param {string} exception.COMPONENT
     * @param {string} exception.METHOD
     */
    info(exception) {
        try {
            console.groupCollapsed('%c Ohhh noo, rayos y centellas, sucedio un error', 'background: #222; color: #bada55');
            Object.keys(exception).forEach((value) => {
                console.log('%c ' + value + " => " + exception[value], 'background: #222; color: #bada55');
            });
            console.groupEnd();
        } catch (exception_p) {
            this.error(exception_p);
        }
    }

    /**
     * Capture exception JS of exception catch<br/>
     * Show in to console.log
     * 
     * @memberof App.Namespaces.Error.Console
     * @method error
     * @access public
     * @this App.Namespaces.Error.Console
     * @param {Exception} exception
     */
    error(exception) {
        try {
            console.log('%c Error al guardar la excepción en el servidor', 'background: #FF0000; color: #000000');
            console.log(exception);
        } catch (exception_p) {
            console.log('%c Error al guardar la excepción en el servidor', 'background: #FF0000; color: #000000');
            console.log(exception_p);
        }
    }
}
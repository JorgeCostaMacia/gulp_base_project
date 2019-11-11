/** 
 * Send error to server
 *
 * @class
 */
App.Namespaces.Error.Process = class {
    /**
     * Send petition with prepare query and callback<br/>
     * Call App.Error.Process.process_callback with response
     * 
     * @memberof App.Namespaces.Error.Process
     * @method process
     * @access public
     * @this App.Namespaces.Error.Process
     * @param {json} exception
     * @param {exception} exception.ERROR
     * @param {string} exception.NAMESPACE
     * @param {string} exception.COMPONENT
     * @param {string} exception.METHOD
     */
    process(exception) {
        try {
            App.Model.Ajax.llamar(
                this.process_query(exception),
                (response) => this.process_callback(response)
            );
        } catch (exception_p) {
            App.Error.Console.error(exception_p);
        }
    }

    /**
     * Prepare petition of process<br/>
     * Return JSON with petition params
     * 
     * @memberof App.Namespaces.Error.Process
     * @method process_query
     * @access public
     * @this App.Namespaces.Error.Process
     * @throws {InvalidArgumentException}
     * @return {json}
     */
    process_query(exception) {
        try {
            return {
                url: `${App.Data.Url.api}Error/Exception_JS`,
                data: {
                    Url: window.location.href,
                    Date: exception.DATE,
                    Mensaje: exception.ERROR,
                    Namespace: exception.NAMESPACE,
                    Clase: exception.COMPONENT,
                    Nombre_Funcion: exception.METHOD,
                    Proyecto: "webs_b2b_static"
                }
            }
        } catch (exception_p) {
            App.Error.Console.error(exception_p);
        }
    }

    /**
     * Get response of process<br/>
     * Show in console log if is save in the server
     * 
     * @memberof App.Namespaces.Error.Process
     * @method process_callback
     * @access public
     * @this App.Namespaces.Error.Process
     * @throws {InvalidArgumentException}
     * @param {json} response
     * @param {boolean} response.status
     * @param {json} response.data
     * @param {boolean} response.data.Status
     * @param {json} response.data.Msj
     * @param {string} response.data.Msj.Title
     * @param {string} response.data.Msj.Content
     */
    process_callback(response) {
        try {
            if (response.status && response.data.Status) {
                console.log('%c Excepción guardada en el servidor', 'background: #00FF00; color: #000000');

            } else {
                console.log('%c Error al guardar la excepción en el servidor', 'background: #FF0000; color: #000000');
            }
        } catch (exception_p) {
            App.Error.Console.error(exception_p);
        }
    }
}
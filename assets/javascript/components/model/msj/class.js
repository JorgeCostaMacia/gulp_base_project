/** 
 * Manage Alertas and Avisos of Model calls
 *  
 * @class
 */
App.Namespaces.Model.Msj = class {

    /**
     * Valuate if send status is true or false<br/>
     * If send status is false<br/> 
     * Show Msj<br/>
     * If send status is true<br/>
     * Valuate if data.status is true<br/>
     * If data.status is true show Msj<br/>
     * If data.status is false show Msj<br/>
     * 
     * @memberof App.Namespaces.Model.Msj
     * @method full
     * @access public
     * @this App.Namespaces.Model.Msj
     * @throws {InvalidArgumentException}
     * @param {json} response
     * @param {boolean} response.status
     * @param {json} response.data
     * @param {boolean} response.data.Status
     * @param {json} response.data.Msj
     * @param {string} response.data.Msj.Title
     * @param {string} response.data.Msj.Content
     */
    full(response) {
        try {
            if (response.status) {
                if (response.data.Status) {
                    App.Popup.Msj.aviso({
                        title: response.data.Msj.Title,
                        content: response.data.Msj.Content
                    });
                } else {
                    App.Popup.Msj.alerta({
                        title: response.data.Msj.Title,
                        content: response.data.Msj.Content
                    });
                }
            } else {
                App.Popup.Msj.alerta({
                    title: App.Data.Msj.title,
                    content: App.Data.Msj.connect
                });
            }
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'model',
                'COMPONENT': 'msj',
                'METHOD': 'full'
            });
        }
    }

    /**
     * Valuate if send status is true or false<br/>
     * If send status is false<br/> 
     * Show Msj<br/>
     * If send status is true<br/>
     * Valuate if data.status is false<br/>
     * If data.status is false show Msj<br/>
     * 
     * @memberof App.Namespaces.Model.Msj
     * @method fail
     * @access public
     * @this App.Namespaces.Model.Msj
     * @throws {InvalidArgumentException}
     * @param {json} response
     * @param {boolean} response.status
     * @param {json} response.data
     * @param {boolean} response.data.Status
     * @param {json} response.data.Msj
     * @param {string} response.data.Msj.Title
     * @param {string} response.data.Msj.Content
     */
    fail(response) {
        try {
            if (response.status) {
                if (!response.data.Status) {
                    App.Popup.Msj.alerta({
                        title: response.data.Msj.Title,
                        content: response.data.Msj.Content
                    });
                }
            } else {
                App.Popup.Msj.alerta({
                    title: App.Data.Msj.title,
                    content: App.Data.Msj.connect
                });
            }
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'model',
                'COMPONENT': 'msj',
                'METHOD': 'fail'
            });
        }
    }
}
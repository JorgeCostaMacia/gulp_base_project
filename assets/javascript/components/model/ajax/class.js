/** 
 * Manage AJAX petitions
 *  
 * @class
 */
App.Namespaces.Model.Ajax = class {
    /**
     * Create Ajax Instance
     * 
     * @memberof App.Namespaces.Model.Ajax
     * @constructor
     * @access public
     * @this App.Namespaces.Model.Ajax
     * @throws {InvalidArgumentException} 
     * @property {boolean} async - true / false
     * @property {boolean} cache - true / false
     * @property {string} dataType -  xml / json / script / html default: Guess(xml, json, script, or html)
     * @property {json} headers
     * @property {string} method - POST / GET / PUT
     * @property {string|boolean} contentType - application/x-www-form-urlencoded; charset=UTF-8 / application/x-www-form-urlencoded / multipart/form-data / text/plain / false
     * @property {boolean} processData  - true / false
     */
    constructor() {
        try {
            this.async = true;
            this.cache = false;
            this.dataType = "json";
            this.headers = {};
            this.method = "POST";
            this.contentType = 'application/x-www-form-urlencoded; charset=UTF-8';
            this.processData = true;
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'model',
                'COMPONENT': 'ajax',
                'METHOD': 'constructor'
            });
        }
    }

    /**
     * Get a JSON with the params of the petition <br/>
     * If not optiones, set params to defaults<br/>
     * Return petition
     * 
     * @memberof App.Namespaces.Model.Ajax
     * @method prepare
     * @public
     * @this App.Namespaces.Model.Ajax
     * @throws {InvalidArgumentException}
     * @param {json} query
     * @param {string} query.url
     * @param {json|string} query.data
     * @param {boolean} query.async
     * @param {boolean} query.cache
     * @param {json} query.headers
     * @param {string} query.method
     * @return {json}
     */
    prepare(query) {
        try {
            let prepare_query = {
                url: query.url,
            };

            if (typeof query.data !== "undefined") {
                prepare_query.data = query.data;
            }

            if (typeof query.async !== "undefined") {
                prepare_query.async = query.async;
            } else {
                prepare_query.async = this.async;
            }

            if (typeof query.cache !== "undefined") {
                prepare_query.cache = query.cache;
            } else {
                prepare_query.cache = this.cache;
            }

            if (typeof query.headers !== "undefined") {
                prepare_query.headers = query.headers;
            } else {
                prepare_query.headers = this.headers;
            }

            if (typeof query.method !== "undefined") {
                prepare_query.method = query.method;
            } else {
                prepare_query.method = this.method;
            }

            if (typeof query.contentType !== "undefined") {
                prepare_query.contentType = query.contentType;
            } else {
                prepare_query.contentType = this.contentType;
            }

            if (typeof query.processData !== "undefined") {
                prepare_query.processData = query.contentType;
            } else {
                prepare_query.processData = this.contentType;
            }

            return prepare_query;
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'model',
                'COMPONENT': 'ajax',
                'METHOD': 'prepare'
            });
        }
    }

    /**
     * Get a result of the petition<br/>
     * Format object result<br/>
     * Return result
     * 
     * @memberof App.Namespaces.Model.Ajax
     * @method process
     * @public
     * @this App.Namespaces.Model.Ajax   
     * @throws {InvalidArgumentException}
     * @param {json} response
     * @param {boolean} response.status
     * @param {json|string} response.data
     * @param {json} response.jqXH
     * @param {json} response.err
     * @return {json}
     */
    process(response) {
        try {
            return {
                status: response.status,
                data: response.data,
                err: response.err,
            };
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'model',
                'COMPONENT': 'ajax',
                'METHOD': 'process'
            });
        }
    }

    /**
     * Get petition options and callback function<br/>
     * Prepare the petition<br/>
     * Send it<br/>
     * if done Call this.llamar_done
     * if error Call this.llamar_error
     * Process the result<br/>
     * Call callback with JSON result
     * 
     * @memberof App.Namespaces.Model.Ajax
     * @method llamar
     * @access public
     * @async
     * @this App.Namespaces.Model.Ajax
     * @throws {InvalidArgumentException}
     * @param {json} query
     * @param {function} callback
     */
    llamar(query, callback) {
        try {
            $.ajax(this.prepare(query))
                .done((data, textStatus, jqXHR) => this.llamar_done(data, textStatus, jqXHR, callback))
                .fail((jqXHR, textStatus, errorThrown) => this.llamar_fail(jqXHR, textStatus, errorThrown, callback));
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'model',
                'COMPONENT': 'ajax',
                'METHOD': 'llamar'
            });
        }
    }

    /**
     * Get petition response and callback<br/>
     * Process the result<br/>
     * Call callback with JSON result
     * 
     * @memberof App.Namespaces.Model.Ajax
     * @method llamar_done
     * @access public
     * @this App.Namespaces.Model.Ajax
     * @throws {InvalidArgumentException}
     * @param {json} data
     * @param {string} textStatus
     * @param {jqXHR} jqXHR
     * @param {function} callback
     */
    llamar_done(data, textStatus, jqXHR, callback) {
        try {
            callback(this.process({
                status: true,
                data: data,
                jqXHR: jqXHR,
                err: null
            }));
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'model',
                'COMPONENT': 'ajax',
                'METHOD': 'llamar_done'
            });
        }
    }

    /**
     * Get petition error response and callback<br/>
     * Process the result<br/>
     * Call callback with JSON result
     * 
     * @memberof App.Namespaces.Model.Ajax
     * @method llamar
     * @access public
     * @this App.Namespaces.Model.Ajax
     * @throws {InvalidArgumentException}
     * @param {jqXHR} jqXHR
     * @param {string} textStatus
     * @param {errorThrown} errorThrown
     * @param {function} callback
     */
    llamar_fail(jqXHR, textStatus, errorThrown, callback) {
        try {
            if (jqXHR.status == 401) {
                if (jqXHR.getResponseHeader('Url_Redirect') != null) {
                    window.location.href = jqXHR.getResponseHeader('Url_Redirect');
                } else {
                    window.location.href = App.Data.Url.api;
                }
            } else {
                callback(this.process({
                    status: false,
                    data: null,
                    jqXHR: jqXHR,
                    err: {
                        jqXHR: jqXHR,
                        textStatus: textStatus,
                        errorThrown: errorThrown
                    }
                }));
            }
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'model',
                'COMPONENT': 'ajax',
                'METHOD': 'llamar_fail'
            });
        }
    }
}
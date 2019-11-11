/** 
 * Manage Cookies
 *  
 * @class
 */
App.Namespaces.Model.Cookie = class {
    /**
     * Get a JSON with the params of the cookie<br/>
     * Get function of callback<br/>
     * Set expire date to 15 dias<br/>
     * Call callback
     * 
     * @memberof App.Namespaces.Model.Cookie
     * @method set
     * @access public
     * @this App.Namespaces.Model.Cookie
     * @throws {InvalidArgumentException}
     * @param {json} cookie_p
     * @param {string} cookie_p.name
     * @param {string} cookie_p.value
     * @param {function} callback
     */
    set(cookie_p, callback) {
        try {
            let date = new Date();
            date.setTime(date.getTime() + (15 * 24 * 60 * 60 * 1000)); // VALOR EN DIAS - DIAS * HORAS * MINUTOS * SEGUNDOS * MILISEGUNDOS
            let expires = "expires=" + date.toUTCString();
            document.cookie = cookie_p.name + "=" + JSON.stringify(cookie_p.value) + ";" + expires + ";path=/";
            callback();
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'model',
                'COMPONENT': 'cookie',
                'METHOD': 'set'
            });
        }
    }

    /**
     * Get a the name of the cookie and<br/> 
     * Set expire date to 15 dias<br/>
     * Call callback with JSON data of cookie
     * 
     * @memberof App.Namespaces.Model.Cookie
     * @method get
     * @access public
     * @this App.Namespaces.Model.Cookie
     * @throws {InvalidArgumentException}
     * @param {string} cname
     * @param {function} callback
     */
    get(cname, callback) {
        try {
            let name = cname + "=",
                decodedCookie = decodeURIComponent(document.cookie),
                ca = decodedCookie.split(';'),
                cookie = {};

            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    cookie = JSON.parse(c.substring(name.length, c.length));
                }
            }
            callback(cookie);
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'model',
                'COMPONENT': 'cookie',
                'METHOD': 'get'
            });
        }
    }
}
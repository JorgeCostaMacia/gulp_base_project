/** 
 * Manage parser
 *  
 * @class
 */
App.Namespaces.Helpers.Parser = class {
    /**
     * Get value of input<br/>
     * Parse to boolean<br/>
     * Return if true or false
     * 
     * @memberof App.Namespaces.Helpers.Parser 
     * @method toBoolean
     * @access public
     * @this App.Namespaces.Helpers.Parser
     * @throws {InvalidArgumentException}
     * @param {string|boolean} value
     * @return {boolean} 
     */
    toBoolean(value) {
        try {
            return value == true || (typeof(value) == "string" && value.toLowerCase() == "true");
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'helpers',
                'COMPONENT': 'parser',
                'METHOD': 'toBoolean'
            });
        }
    }
}
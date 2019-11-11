/** 
 * Manage validations.
 *  
 * @class
 */
App.Namespaces.Helpers.Validate = class {
    /**
     * Get text<br/>
     * Validate if the text don´t have any system char<br/>
     * Return validation
     * 
     * @memberof App.Namespaces.Helpers.Validate 
     * @method chars
     * @access public
     * @this App.Namespaces.Helpers.Validate
     * @throws {InvalidArgumentException}
     * @param {string} text
     * @return {boolean} 
     */
    chars(text) {
        try {
            return text.indexOf(",") == -1 && text.indexOf(";") == -1 && text.indexOf("|") == -1 && text.indexOf("\\") == -1 && text.indexOf("'") == -1 && text.indexOf("´") == -1 && text.indexOf("$") == -1 && text.indexOf("&") == -1 && text.indexOf("{") == -1 && text.indexOf("}") == -1;
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'helpers',
                'COMPONENT': 'validate',
                'METHOD': 'chars'
            });
        }
    }
}
/** 
 * Cursor Manage
 * 
 * @class
 */
App.Namespaces.Cursor = class {
    /**
     * Change cursor to wait
     * 
     * @memberof App.Namespaces.Cursor 
     * @method loading
     * @access public
     * @this App.Namespaces.Cursor
     * @throws {InvalidArgumentException}
     */
    loading() {
        try {
            $("body").addClass("cursor_wait");
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'cursor',
                'COMPONENT': 'cursor',
                'METHOD': 'loading'
            });
        }
    }

    /**
     * Change cursor to wait
     * 
     * @memberof App.Namespaces.Cursor 
     * @method loaded
     * @access public
     * @this App.Namespaces.Cursor
     * @throws {InvalidArgumentException}
     */
    loaded() {
        try {
            $("body").removeClass("cursor_wait");
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'cursor',
                'COMPONENT': 'cursor',
                'METHOD': 'loaded'
            });
        }
    }
}
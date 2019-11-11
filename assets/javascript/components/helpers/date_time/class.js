/** 
 * Manage dates.
 *  
 * @class
 */
App.Namespaces.Helpers.Date_Time = class {
    /**
     * Get the current date<br/>
     * Parse the date to string and return it<br/>
     * 
     * @memberof App.Namespaces.Helpers.Date_Time 
     * @method getNow
     * @access public
     * @this App.Namespaces.Helpers.Date_Time
     * @throws {InvalidArgumentException}
     * @return {string}
     */
    getNow() {
        try {
            let date = new Date();

            let year = date.getFullYear();
            let month = ("00" + (date.getMonth() + 1)).slice(-2);
            let day = ("00" + date.getDate()).slice(-2);

            let hour = ("00" + date.getHours()).slice(-2);
            let minute = ("00" + date.getMinutes()).slice(-2);
            let second = ("00" + date.getSeconds()).slice(-2);

            return `${year}/${month}/${day} ${hour}:${minute}:${second}`;
        } catch (exception) {
            App.Error.Exception.catch({
                'ERROR': exception,
                'NAMESPACE': 'helpers',
                'COMPONENT': 'date_time',
                'METHOD': 'getNow'
            });
        }
    }
}
/** 
 * Manage error<br/>
 * Error JS controller by exceptions<br/>
 * Error 404 controller by page 404<br/>
 *
 * @class
 */
App.Namespaces.Error.Exception = class {
    /**
     * Capture exception JS with custom data of the exception<br/>
     * Add date to data<br/>
     * Show msj, exception and custom data<br/>
     * Send data to server
     * 
     * @memberof App.Namespaces.Error.Exception
     * @method catch
     * @access public
     * @this App.Namespaces.Error.Exception
     * @param {json} exception
     * @param {exception} exception.ERROR
     * @param {string} exception.NAMESPACE
     * @param {string} exception.COMPONENT
     * @param {string} exception.METHOD
     */
    catch (exception) {
        try {
            exception.DATE = App.Helpers.Date_Time.getNow();

            App.Error.Console.info(exception);

            App.Messages.Outbox.Main.alerta({
                title: App.Data.Msj.title,
                content: App.Data.Msj.exception
            });

            App.Model.Controller.loaded();

            App.Error.Process.process(exception);
        } catch (exception_p) {
            App.Error.Console.error(exception_p);
        }
    }


    /**
     *
     * @memberof App.Namespaces.Error
     * @method error404
     * @access public
     * @this App.Namespaces.Error
     */
    error404() {
        //App.Metricas.error404({ "err": "Page Not Found", "date": App.Helpers.Date_Time_Now.get() });
    }
}
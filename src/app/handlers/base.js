
const { ipcRenderer } = require("electron");


var BaseHandler = {

    Close: () => {
            ipcRenderer.send("exit");
        }
        
    }
module.exports = BaseHandler

export function Close() {
    ipcRenderer.send("exit");

}
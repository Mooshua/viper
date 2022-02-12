const { ipcRenderer } = require("electron");
const { readable } = require("svelte/store")


export function Launch() {
    ipcRenderer.send("launch");
}

export let UpdateAvailable = readable(false, set => {
    ipcRenderer.on("updateavailable", () => {
        set(true)
    })
})
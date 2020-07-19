import { app, BrowserWindow, ipcMain, IpcMainEvent } from "electron";
import * as path from "path";

function createWindow() {
  const win = new BrowserWindow({
    width: 233,
    height: 320,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  const indexFile = path.join(__dirname, "..", "frontend", "dist", "index.html");
  const winURL =
    process.env.NODE_ENV === "development" ? `http://localhost:8080` : `file://${indexFile}`;
  win.loadURL(winURL);
}
app
  .whenReady()
  .then(createWindow)
  .then(() => {
    ipcMain.on("calculate-result", (event: IpcMainEvent, args) => {
      const { result = "" } = args;
      console.log("result is", result);
    });
  });
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

const { app, BrowserWindow } = require("electron");

const path = require("path");
const loadMainWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: { nodeIntegration: true, contextIsolation: false },
  });
  mainWindow.loadFile(path.join(__dirname, "public/index.html"));
};

app.on("ready", loadMainWindow);
app.on("window-all-closed", () => {
  // if (process.platform !== "darwin") {}
  app.quit();
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    loadMainWindow();
  }
});

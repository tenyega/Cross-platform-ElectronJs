
//Importing electron js in our file 
const { app, BrowserWindow } = require('electron')
const path = require('node:path');


//The provided code is a simple function to create a browser window using Electron, a framework for building cross-platform desktop applications with web technologies.

function createWindow() {
    //This creates a new instance of BrowserWindow, which is a class provided by Electron to create and control browser windows.
    const win = new BrowserWindow({
      //Sets the width of the window to 800 pixels.
    width: 800,
      height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      openai: path.join(__dirname,'openai.js')
      }
  
  })
//This method loads the specified HTML file (index.html) into the window. This file should be located in the root directory of your project.
  win.loadFile('index.html')
 
}

app.whenReady().then(() => {
  createWindow()

//   app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//       createWindow()
//     }
//   })
})

// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// })
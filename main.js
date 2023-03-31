//import * as path from 'path';

const {app, BrowserWindow, ipcMain}=require('electron');
const url=require('url');
const path=require('path');

let mainWindow

const createWindow=()=>{
  mainWindow=new BrowserWindow({
    width:1000,
    height:800,
    webPreferences:{
      nodeIntegration:true,
      contextIsolation:false,
    }
  })
  mainWindow.loadURL(
    url.format({
      pathname:path.join(__dirname,'dist/electron-angular-material/index.html'),
      protocol:"file",
      slashes:true,

    })
  )
  mainWindow.webContents.openDevTools()
}
app.whenReady().then(()=>{
  createWindow()
})
ipcMain.on('provaIpc',()=>{
  console.log('********provaIpc invocata**********');
  mainWindow.webContents.send('rispostaIpc');
})

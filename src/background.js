'use strict'
//var _ = require('lodash')
import { app, protocol, BrowserWindow, ipcMain } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1920 ,
    height: 1080,
    webPreferences: {
    
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION
    },
    show:false
  })
  win.once('ready-to-show',()=>{win.show()})
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    if(firstTime == false){win.loadURL('app://./index.html')}else{win.loadURL('app//./index.html')}
  }
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
// ##################################################################### //
// ##################################################################### //
// ##################################################################### //

//const lodashId = require('lodash-id')
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync("db.json")
const db = low(adapter)
db.defaults({stored:[],products:[]}).write()
var stored = db.get('stored');
ipcMain.on('addToSettings',function(event,value){
  db.read();
  db.get('stored').push(value).write();
  db.read()
  event.reply('settings',db.get('stored').value())

})
ipcMain.on('bringSettings',function(event,value){
  db.read()
  event.reply('bringed',db.get('stored').value())
})
ipcMain.on('bringData',function(event,value){
  db.read()
  event.reply('bringedData',db.get('product').value())
})

function addStored(){
  arguments.forEach(element => {
    stored.push(element).write();
    db.read()
  });
  return true
}

//
//._.mixin(lodashId)

db.read()
function dbId(){
   db.read()
   var count = db.get('users').size()
   db.read()
   return count+1
}
function dbEntry(value){
   db.read()
   var checked = _.omitBy(value,_.isEmpty)
   checked.active = true
   var itemid = dbId()
    db.get('products').push(checked).write()


}
function dbQuerry(value) {
   db.read()
   var checked = _.omitBy(value,"")
   checked['active'] = true
   if(checked == {}){db.get('products').value()}
   else{
     return db.get('products').filter(checked).value()
    }

}

ipcMain.handle('create-id', async (event)=>{return dbId()})


ipcMain.on('querry',function(event,value){
  event.reply('returned1',value)
  var result = dbQuerry(value)
  event.reply('clear-value',result)
})
ipcMain.on('addtodb',function(event,value){
  return dbEntry(value)
})
ipcMain.on('removeItem',function(event,id){

  db.read()
  db.get('users').find({id:id}).assign({active:false}).write()
  db.read()
  var value = db.get('users').find({id:id}).value()
  event.reply('returned3',value)
})


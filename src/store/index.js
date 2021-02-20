import  {ipcRenderer } from 'electron'
import Vue from 'vue'
import Vuex, { Store } from 'vuex'
const _ = require('lodash')
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    returnitems:[],
    settings:[],
    addSettings:[]
  },
  mutations: {
    addToSearch(state,iValue){
      //console.table(iValue)
      //console.log('addToSearch has been completed')
      ipcRenderer.send('querry',iValue)
      ipcRenderer.on('clear-value',(event,arg)=>{
        //console.table(arg)
        //console.log(arg)
        state.returnitems =arg
        //console.log(state.returnitems)
      })
    },
    addToDatabase(state,iValue){
      //console.log(iValue)
      ipcRenderer.send('addtodb',iValue)

      //console.log('additems completed has been completed')
    },
    removeFromDb(state,ID){
 //     console.log(ID)
      ipcRenderer.send('removeItem',ID)
      ipcRenderer.on('returned3',(event,arg)=>{
        var first =  _.find(state.returnitems,{id:ID})
        var second = _.assign(first,{active:false})
        return second
    })
  },
    addToSettings(state,value){
      //console.log(value);
      ipcRenderer.send('addToSettings',value)
      ipcRenderer.on('settings',(event,ans)=>{
        //Vue.set(state,state.settings,ans)
        ipcRenderer.send('bringSettings',"")
        ipcRenderer.on('bringed',(event,ans)=>{
          //console.table(ans)
          state.settings=ans
        })
        state.addSettings=[]
        return "Settings Added"
      })
    },
    returnSettings(state){
      ipcRenderer.send('bringSettings',"")
      ipcRenderer.on('bringed',(event,ans)=>{
        //console.table(ans)
        state.settings=ans
      })
    }
},
  actions: {
  },
  modules: {
  }
  })
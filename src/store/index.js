import { ipcRenderer } from 'electron'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    returnitems:[]
  },
  mutations: {
    addToSearch(state,iValue){
      //console.table(iValue)
      console.log('addToSearch has been completed')
      ipcRenderer.send('querry',iValue)
      ipcRenderer.on('clear-value',(event,arg)=>{
        //console.table(arg)
        //console.log(arg)
        state.returnitems =arg
        //console.log(state.returnitems)
      })
    },
    addToDatabase(state,iValue){
      console.log(iValue)
      ipcRenderer.send('addtodb',iValue)

      console.log('additems completed has been completed')
    },
    removeFromDb(state,ID){
 //     console.log(ID)
      ipcRenderer.send('removeItem',ID)
      ipcRenderer.on('returned3',(event,arg)=>{console.log(arg)})
    }
  },
  actions: {
  },
  modules: {
  }
})

<template>
  <div class='FormAdd'>
    <form @submit.prevent action="">
      <div>
        <div v-for='(element,index) in this.catagories' :key="index">
              <vs-input :placeholder='element.catagoryName' :class='element.catagoryName' :id='element.catagoryName'  :value='element.contentadd' v-model='element.contentadd' v-if="element.value == 2"/>
                <!--<vs-upload v-else-if="element.value ==1" />-->
          </div>
      </div>
      <vs-button v-on:click='addDb' type="filled">Ekle</vs-button>
    </form>
  </div>
</template>

<script>
import store from '@/store/index.js'
//import _ from 'lodash'
export default {
name:'FormAdd',
store:store,
data(){return{name:'',country:''}},
methods:{
  addDb(){
     var myobj = new Object
      var e = this.$el.getElementsByTagName('input')
      e.forEach(element => {
        //console.log(element.id)
       myobj[_.camelCase(element.id)] = element.value
       //myobj.active = true
      });
      console.log("formADd:"+myobj)
      console.log(myobj)
      store.commit('addToDatabase',myobj)
  }
},computed:{
  catagories:function(){
      //store.commit("returnSettings")
      //console.log(this.$store.state.settings)
      return this.$store.state.settings
    }
}

}

</script>

<style scoped>

</style>
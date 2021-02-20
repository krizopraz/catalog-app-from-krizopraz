<template>
  <div class='FormAdd'>
    <form v-on:submit.prevent action="">
      <div>
        <vs-input label-placeholder='Name' v-model="name" type="text" name="name2" id="name2"/>
      </div>
      <br>
      <div>
        <vs-input label-placeholder='Country' v-model="country" type="text" name='country2' id='country2'/><br>
      </div>
      <vs-button v-on:click='addDb' type="filled">Ekle</vs-button>
    </form>
  </div>
</template>

<script>
import store from '@/store/index.js'

export default {
name:'FormAdd',
store:store,
data(){return{name:'',country:''}},
methods:{
  addDb(){
    store.commit('addToDatabase',{name:this.name,country:this.country})
    this.name=''
    this.country=''
  }
}

}

</script>

<style scoped>
  *{
    margin:auto;
  }
</style>
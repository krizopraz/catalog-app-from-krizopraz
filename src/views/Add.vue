<template>
  <div class='add'>
    <form v-on:submit.prevent action="">
      <div>
        <label for="name2">Name</label><br>
        <input v-model="name" type="text" name="name2" id="name2">
      </div>
      <br>
      <div>
        <label  for="country2">Country</label><br>
        <input v-model="country" type="text" name='country2' id='country2'>
      </div>
      <button v-on:click='addDb' type="submit">Ekle</button>
    </form>
  </div>
</template>

<script>
import store from '@/store/index.js'

export default {
store:store,
data(){return{name:'',country:''}},
methods:{
  addDb(){
    
    store.commit('addToDatabase',{name:this.name,country:this.country})
  }
}

}

</script>

<style>

</style>
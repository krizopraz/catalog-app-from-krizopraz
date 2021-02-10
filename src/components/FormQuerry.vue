<template>
  <div class="formquerry">
    <form v-on:submit='itemSender' v-on:submit.prevent="" action="">
      <div>
        <vs-input label-placeholder='Name' class='inputx' v-model="name" type="text" name="name" id="name"/>
      </div>
      <br>
      <div>
<br>
        <vs-input label-placeholder='Country' class v-model="country" type="text" name="country" id="country"/>
      </div>
      <br>
      <vs-button v-on:click='itemSender' color='blue' text-color='white' type="filled">Search</vs-button>
    </form>
  </div>
</template>

<script>
import store from '@/store/index.js'


export default {
  name: 'FormQuerry',
  store:store,
  data(){
    return{name:'',
    country:''}
  },
  methods:{
    itemSender(){
      store.commit('addToSearch',{name:this.name,country:this.country})
      this.name = ''
      this.country = ''
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: auto;
}
</style>

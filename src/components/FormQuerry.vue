<template>
  <div class="formquerry">
    <form v-on:submit='itemSender' v-on:submit.prevent="" action="">
      <div>
        <label for="name">name</label><br>
        <input v-model="name" type="text" name="name" id="name">
      </div>
      <br>
      <div>
        <label for="country">country</label><br>
        <input v-model="country" type="text" name="country" id="country">
      </div>
      <br>
      <button type="submit">Ara</button>
    </form>
  </div>
</template>

<script>
import store from '@/store/index.js'

//
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

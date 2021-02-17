<template>
  <div class="formquerry">
    <form v-on:submit='itemSender' v-on:submit.prevent="" action="">
        <vs-row vs-type='grid' vs-justify='center' >
          <vs-col vs-type='grid' vs-justify='center' vs-align='space-between'>
            <vs-alert title='Warning' color='warning' active='true'>Search option is CASE SENSITIVE! Be careful!</vs-alert>
            <vs-input label-placeholder='Name' class='inputx' v-model="name" type="text" name="name" id="name"/>
            <vs-input label-placeholder='Country' class v-model="country" type="text" name="country" id="country"/>
            <vs-divider/>
            <vs-button icon='search' v-on:click='itemSender' color='blue' text-color='white' type="filled">Search</vs-button>
          </vs-col>
        </vs-row>
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
</style>

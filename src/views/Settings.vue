<template>
  <div @load="table()" id='settingsForm'>
    <form @submit.prevent="" action="">
      <div class="add">
        <vs-input placeholder='Katagori Adı' v-model="inputVal" />
        <vs-select v-model="value">
            <vs-select-item :key='index' :value='item.value' :text='item.text' v-for='(item,index) in options'/>
        </vs-select>
        <vs-button @click.prevent="addcatagory(value)">Özellik Ekle</vs-button>
    </div>
    </form>
    <div>
      <vs-table :data='this.catagories'>
        <template slot='header'>
          <h4>Settings</h4>
        </template>
        <template slot="thead">
          <vs-th>Katagori Adı</vs-th>
          <vs-th>Türü</vs-th>
        </template>
        <template slot-scope="{data}">
          <vs-tr v-for='(item,indextr) in data' v-bind:key="indextr">
            <vs-td>{{item.catagoryName}}</vs-td>
            <vs-td v-if="item.value == 1" >Fotoğraf</vs-td>
            <vs-td v-if="item.value == 2" >Yazı</vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </div>
  </div>
</template>

<script>
import store from '@/store/index.js'
export default {
  name: 'Settings',
  store:store,
  mounted(){this.table()},
  data(){
    return{options:[{text:'Fotoğraf',value:1},{text:'Yazı',value:2},]
    ,
    inputVal:null,
    value:null,
    mycato:this.$store.state.settings
    }
  },
  computed:{
    catagories:function(){
      store.commit("returnSettings")
      return this.$store.state.settings
    }
  },
  methods:{
    addcatagory(){
    console.log(this.inputVal,this.value);
    store.commit("addToSettings",{catagoryName:this.inputVal,value:this.value})
    this.inputVal= null
    this.value = null
    },
    table(){
      store.commit('returnSettings')
    }
  }
}
</script>

<style>

</style>
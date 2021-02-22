<template>
  <div @load="table()" id='settingsForm'>
    <form @submit.prevent="" action="">
      <vs-row vs-align='center' vs-justify='center' vs-type='flex'>
        <vs-col vs-type='flex' vs-align='center' vs-justify='center'>
          <div class="add">
            <vs-input placeholder='Catagory Name' v-model="inputVal" /><br>
            <vs-select v-model="value">
                <vs-select-item :key='index' :value='item.value' :text='item.text' v-for='(item,index) in options'/>
            </vs-select>
            <br><vs-button icon='add_circle' color='blue' @click.prevent="addcatagory(value)">Add Catagory Name</vs-button>
          </div>
        </vs-col>
      </vs-row>
    </form>
    <div>
      <vs-table :data='this.catagories'>
        <template slot='header'>
          <h4>Settings</h4>
        </template>
        <template slot="thead">
          <vs-th>Catagory Name</vs-th>
          <vs-th>Input Type</vs-th>
        </template>
        <template slot-scope="{data}">
          <vs-tr vs-align='center' vs-justify='center' vs-type='flex' v-for='(item,indextr) in data' v-bind:key="indextr">
            <vs-td>{{item.catagoryName}}</vs-td>
            <vs-td v-if="item.value == 1" >Image</vs-td>
            <vs-td v-if="item.value == 2" >Text</vs-td>
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
    return{options:[{text:'Image',value:1},{text:'Text',value:2},]
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
table{
  text-align: left;
}
button{
  display:flex !important;
  justify-self: center  !important;
}
</style>
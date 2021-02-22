<template>
  <div id='formtable' >
     <vs-button @click='showItems'>Test</vs-button>
     <vs-table :data='this.$store.state.returnitems' v-if='this.count>0' >
          <template v-for='element in this.catagories' slot='thead'>
            <vs-th :key="element.catagoryName">{{element.catagoryName}}</vs-th>
          </template>
          <template slot-scope="{data}">
            <vs-tr v-for="item in data"  v-bind:key="item.catagoryName">
                <vs-td v-for="values in $data._.keysIn(item)" :key='values.index'>{{values}}</vs-td>

                <vs-td><vs-button color='danger' type='relief' :disabled='!item.active' v-on:click='removeItem(item.id);' > Delete</vs-button></vs-td>
            </vs-tr>
          </template>
      </vs-table>
  <br><br>
  </div>
</template>

<script>

import store from '@/store/index.js'
import _ from 'lodash'
export default {
    Name:'FormTable',
    store:store,
    data(){
      return{
        datatable:this.$store.state.returnitems,
        itemCount:null,
        show:true,
        _:_

      }
    },
    computed:{
      catagories:function(){
        return this.$store.state.settings
      },
      count:function(){
        this.$store.state.returnitems.forEach(element => {
          this.itemCount++
          //console.log("incremented")
        });
        //console.log('counted:'+this.itemCount)
        return  this.itemCount
      },
      removeDbItem:function(){store.commit('removeFromDb',this.$store.state.returnitems.id);},
      isDisabled:function(){return true}
    },
    methods:{
      showItems:function(){console.log(this.$store.state.returnitems)},
      removeItem:function(id){store.commit('removeFromDb',id);},
      //elDisable:function(){this.item.active = false}

    }
    }
</script>

<style scoped>
</style>
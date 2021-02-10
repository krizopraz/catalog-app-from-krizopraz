<template>
  <div id='formtable' >
     <vs-table :data='this.$store.state.returnitems' v-if='this.count>0' >
          <template slot='thead'>
                <vs-th>ID</vs-th>
                <vs-th>Name</vs-th>
                <vs-th>Country</vs-th>
                <vs-th>Status</vs-th>
                <vs-th>active</vs-th>
          </template>
          <template slot-scope="{data}">
            <vs-tr v-for="item in data" v-bind:key="item.id">
                <vs-td>{{item.id}}</vs-td>
                <vs-td>{{item.name}}</vs-td>
                <vs-td>{{item.country}}</vs-td>
                <vs-td>{{item.active}}</vs-td>  
                <vs-td><vs-button color='danger' type='relief' :disabled='!item.active' v-on:click='removeItem(item.id);' > Delete</vs-button></vs-td>
            </vs-tr>  
          </template>
      </vs-table>
  <br><br>
  </div>
</template>

<script>

import store from '@/store/index.js'

export default {
    Name:'FormTable',
    store:store,
    data(){
      return{
        datatable:this.$store.state.returnitems,
        itemCount:null,
        show:true,

      }
    },
    computed:{
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
      removeItem:function(id){store.commit('removeFromDb',id);},
      //elDisable:function(){this.item.active = false}

    }
    }
</script>

<style scoped>
*{
  text-align: left;
  align-self: center;
}
vs-button{
  color:#2c3e50;
}
</style>
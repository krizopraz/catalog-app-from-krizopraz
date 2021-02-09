<template>
  <div id='formtable' >
     <table v-if='this.count>0' >
          <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Country</th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="item in this.$store.state.returnitems" v-bind:key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.country}}</td>
                <td>{{item.active}}</td>
                <td><button v-on:click='removeItem(item.id);show = false'>Delete</button></td>
                
            </tr>
          </tbody>
      </table>
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
        show:true
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
      removeDbItem:function(){store.commit('removeFromDb',this.$store.state.returnitems.id);}
    },
    methods:{
      removeItem:function(id){store.commit('removeFromDb',id);}

    }
    }
</script>

<style>

</style>
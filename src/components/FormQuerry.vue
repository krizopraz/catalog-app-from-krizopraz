 <template>
    <div class="formquerry">
      <form v-on:submit='itemSender' v-on:submit.prevent="" action="">
            <div v-for='(element,index) in this.catagories' :key="index">
              <vs-input :placeholder='element.catagoryName' :id='element.catagoryName'  :value='element.content' v-model='element.content' v-if="element.value == 2"/>
                <!--<vs-upload v-else-if="element.value ==1" />-->
            </div>
        <vs-button icon='search' v-on:click='itemSender' color='blue' text-color='white' type="filled">Search</vs-button>
      </form>
    </div>
</template>

<script >
import store from '@/store/index.js'
//import _ from 'lodash'

export default {
  name: 'FormQuerry',
  store:store,
  data(){
    return{name:'',
    country:'',
    values:"",
    mvalues:[],
    active:true
    }
  },
  mounted(){
      store.commit('returnSettings')
  },
  computed:
    {myvalues:function(){return this.mvalues.push(values)},
    catagories:function(){
      //store.commit("returnSettings")
      //console.log(this.$store.state.settings)
      return this.$store.state.settings
    }
  },
  methods:{
    itemSender(){
      var myobj = new Object
      var e = this.$el.getElementsByTagName('input')
      e.forEach(element => {
       if(element.value != ""){
         myobj[_.camelCase(element.id)] = element.value
         //console.log('I changed ite')
       }
      });
      console.log(myobj)
      e = null
      store.commit('addToSearch',myobj)
    },
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
</style>

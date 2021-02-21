<template>
  <div class="search">
        <vs-row vs-type='flex' vs-justfiy='center' vs-align='center'>
          <vs-col vs-type='flex' vs-justify='center' vs-align='center' vs-w='6'>
            <form-querry/>
          </vs-col>
          <vs-col vs-type='flex ' vs-justify='center' vs-align='center' vs-w='6'>
            <form-add/>
          </vs-col>
        </vs-row>
        <search-result/>
  </div>
</template>

<script>
import FormAdd from '../components/FormAdd.vue'
import FormQuerry from '../components/FormQuerry.vue'
import SearchResult from '../components/SearchResult.vue'
// @ is an alias to /src


export default {
  name: 'Main',
  components: {
    FormQuerry,
    FormAdd,
    SearchResult,
  }
}
</script>

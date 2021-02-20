<template>
  <div class="search">
        <form-querry/>
        <form-add/>
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

<template>
  <div class="search">
    <img alt="Vue logo" src="../assets/logo.png">
    <form-querry/>
    <form-table/>
  </div>
</template>

<script>
import FormQuerry from '../components/FormQuerry.vue'
import FormTable from '../components/FormTable.vue'
// @ is an alias to /src


export default {
  name: 'Search',
  components: {
    FormQuerry,
    FormTable
  }
}
</script>

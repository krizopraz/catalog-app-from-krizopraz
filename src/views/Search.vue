<template>
  <div class="search">
    <vs-divider/>
    <vs-row>
      <vs-col vs-w='5'>
      <form-querry/>
      </vs-col>
      <vs-col vs-w='1'></vs-col>
      <vs-col vs-w='6'>
      <form-table/>
      </vs-col>
    </vs-row>
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

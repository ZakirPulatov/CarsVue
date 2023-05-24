<template>
  <div class="cars-wrapper">
    <table width="100%" cellspacing="0">
      <thead>
        <TableRow :th="true" :items="tableHead"/>
      </thead>
      <tbody>
        <TableRow v-for="row in carsBody" :items="row"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import TableRow from "@/components/TableRow.vue"
import { mapState, mapActions } from "vuex"

export default {
  name: "CarsPage",
  components: {
    TableRow
  },

  data() {
    return {}
  },

  methods: {
    ...mapActions({
      getCars: "getCars"
    }),
  },

  computed: {
    ...mapState({
      tableHead: state => state.carModules.tableHead,
      carsBody: state => state.carModules.carsBody
    })
  },

  mounted() {
    this.getCars()
  }
}
</script>

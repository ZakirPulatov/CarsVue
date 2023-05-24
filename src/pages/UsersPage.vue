<template>
  <div class="users-wrapper">
    <table width="100%" cellspacing="0">
      <thead>
        <TableRow :th="true" :items="tableHead"/>
      </thead>
      <tbody>
        <TableRow v-for="row in usersBody" :items="row"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import TableRow from "@/components/TableRow.vue"
import { mapState, mapActions } from "vuex"

export default {
  name: "UsersPage",
  components: {
    TableRow
  },

  data() {
    return {}
  },

  methods: {
    ...mapActions({
      getUsers: "getUsers"
    }),
  },

  computed: {
    ...mapState({
      tableHead: state => state.userModules.tableHead,
      usersBody: state => state.userModules.usersBody
    })
  },

  mounted() {
    this.getUsers()
  }
}

</script>

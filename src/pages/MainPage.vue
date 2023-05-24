<template>
  <div class="main-wrapper">

    <div class="top-panel">
      <label>
        Пользователь: 
        <Select v-model="userID" :options="usersSelect" />
      </label>

      <label>
        Бренд: 
        <Select v-model="carBrand" :options="brandsSelect" />
      </label>
    </div>

    <table width="100%" cellspacing="0">
      <thead>
        <TableRow :th="true" :items="tableHead"/>
      </thead>
      <tbody>
        <TableRowWithUser 
          v-for="row in filteredCars"
          :items="row"
          :itemHeaders="userHeaders"
          :arrayHeaders="carHeaders"
        />
      </tbody>
    </table>

  </div>
</template>

<script>
import TableRowWithUser from "@/components/TableRowWdithUser.vue"
import TableRow from "@/components/TableRow.vue"
import { mapState, mapActions, mapGetters } from "vuex"
export default {
  name: "Main",

  components: {
    TableRowWithUser,
    TableRow
  },
  
  data() {
    return {
      userID: "",
      carBrand: ""
    }
  },

  methods: {
    ...mapActions({
      getData: "getData",
      getUsers: "getUsers",
      getCars: "getCars",
    }),
  },

  computed: {
    ...mapState({
      tableHead: state => state.carAndUserModules.tableHead,
      userHeaders: state => state.carAndUserModules.userHeaders,
      carHeaders: state => state.carAndUserModules.carHeaders,

      tableBody: state => state.carAndUserModules.tableBody,
      carsBody: state => state.carModules.carsBody,
      usersBody: state => state.userModules.usersBody,
    }),

    ...mapGetters({
      usersSelect: "usersSelect",
      brandsSelect: "brandsSelect"
    }),

    filteredUsers() {
      if (this.userID) return this.tableBody.filter(item => item.user_id === this.userID)
      return this.tableBody
    },

    filteredCars() {
      if (this.carBrand) return this.commonTable.filter(item => item.cars.find(car => car.brand === this.carBrand))
      return this.commonTable
    },

    commonTable() {
      return this.filteredUsers.map(item => {
        const users = this.usersBody.find(user => user.id === item.user_id)
        const cars = item.cars_id.map(id => {
          return this.carsBody.find(car => car.id === id)
        })
        
        return {users, cars}
      })
    }
  },

  async mounted() {
    await this.getData()
    await this.getUsers()
    await this.getCars()
  }
}
</script>

<style scoped>
  .top-panel {
    display: flex;
    margin-bottom: 20px;
  }
  
  .top-panel label {
    margin-right: 30px;
  }
</style>

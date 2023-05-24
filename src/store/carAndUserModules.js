export const carAndUserModules = {
  state: () => ({
    tableHead: {
      users: "Пользователи",
      cars: "Машины"
    },

    userHeaders: {
      user_name: "Имя",
      dataofbirth: "Дата рождения",
      address: "Адрес"
    },

    carHeaders: {
      brand: "Бренд",
      model: "Модель",
      age: "Год выпуска",
      engine: "Двигатель"
    },

    tableBody: []
  
  }),

  mutations: {
    setDataTable(state, items) {
      state.tableBody = items
    }
  },

  actions: {
    async getData({commit}) {
      const response = await fetch('/src/data/carsAndUsers.json').then(res => res.json())
      commit("setDataTable", response)
    }
  }
}
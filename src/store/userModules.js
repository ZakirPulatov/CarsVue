export const userModules = {
  state: () => ({
    tableHead: {
      id: "Идентификатор",
      name: "Имя",
      surname: "Фамилия",
      dataofbirth: "Дата рождения",
      address: "Адрес"
    },

    usersBody: []
  }),

  mutations: {
    setUserTable(state, items) {
      state.usersBody = items
    }
  },

  actions: {
    async getUsers({commit}) {
      const response = await fetch('/src/data/users.json').then(res => res.json())
      commit("setUserTable", response)
    }
  },

  getters: {
    usersSelect: state => {
      return state.usersBody.map(item => ({
        value: item.id,
        name: item.user_name
      }))
    }
  }
}
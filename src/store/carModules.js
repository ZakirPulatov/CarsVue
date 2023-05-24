export const carModules = {
  state: () => ({
    tableHead: {
      id: "Идентификатор",
      brand: "Бренд",
      model: "Модель",
      type: "Тип",
      age: "Год выпуска",
      engine: "Двигатель"
    },

    carsBody: []
  }),

  mutations: {
    setCarTable(state, items) {
      state.carsBody = items
    }
  },

  actions: {
    async getCars({commit}) {
      const response = await fetch('/src/data/cars.json').then(res => res.json())
      commit("setCarTable", response)
    }
  },

  getters: {
    brandsSelect: state => {
      return state.carsBody.map(item => ({
        value: item.brand,
        name: item.brand
      }))
      .reduce((unique, current) => {
        const found = unique.find(car => car.value === current.value);
        if (!found) {
          unique.push(current);
        }
        return unique;
      }, []);
    }
  }
}
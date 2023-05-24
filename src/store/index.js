import { createStore } from 'vuex'
import { carModules } from './carModules'
import { userModules } from './userModules'
import { carAndUserModules } from './carAndUserModules'

const store = createStore({
  modules: {
    carModules,
    userModules,
    carAndUserModules
  }
})

export default store
import Main from "../pages/MainPage.vue"
import CarsPage from "../pages/CarsPage.vue"
import UsersPage from "../pages/UsersPage.vue"

import { createRouter, createWebHistory } from "vue-router"

export const routes = [
  {
    path: '/',
    component: Main,
    name: 'Главная'
  },

  {
    path: '/cars',
    component: CarsPage,
    name: 'Машины'
  },

  {
    path: '/users',
    component: UsersPage,
    name: 'Пользователи'
  },


  // {
  //   path: '/posts',
  //   component: PostsPage,
  //   name: 'Posts'
  // },

  // {
  //   path: '/about',
  //   component: About,
  //   name: 'About'
  // },

  // {
  //   path: '/posts/:id',
  //   component: PostsPreview
  // }
];

export const router = createRouter({
  routes,
  history: createWebHistory()
});
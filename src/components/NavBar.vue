<template>
  <nav class="navbar">
    <ul class="menu">
      <li v-for="route in routeItems">
        <Button v-if="route.name"
            class="menu__item"
            @click="$router.push(route.path)"
        >
            {{ route.name }}   
        </Button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { routes } from "@/router/router.js"
export default {
  name: 'NavBar',
  data() {
    return {
      routeItems: routes
    }
  }
}
</script>

<style scoped>
.navbar {
  margin-bottom: 30px;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.navbar li {
  margin-right: 10px;
}
.navbar .menu__item {
  padding: 10px 20px;
}

</style>
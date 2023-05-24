<template>
  <main class="main">
    <NavBar/>
    <router-view></router-view>
  </main>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
export default {
  name: "App",
  components: {
    NavBar
  }
}
</script>

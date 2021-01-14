<template>
  <div id="app">
    <main>
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
main {
  flex: 1 0 auto;
}
</style>

<template>
  <div v-if="!$store.state.isAuthReady">
    <!-- TODO: Implement loading -->
  </div>
  <div v-else-if="$store.state.user == null">
    <auth />
  </div>
  <div v-else>
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Auth from './views/Auth.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
    Auth,
  },
}
</script>

<style lang="scss">
@import "@/styles/main.scss";

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
</style>

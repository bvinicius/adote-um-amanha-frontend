<template>
  <v-app>
    <!-- <Toolbar :title="exampleToolbarTitle" /> -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
// import Toolbar from "./components/Toolbar.vue";

export default Vue.extend({
  name: "App",
  // components: {
  //   Toolbar,
  // },
  data: () => ({
    exampleToolbarTitle: "Exemplo de Título",
  }),
});
</script>

<style scoped lang="scss">
@import "./assets/scss/fonts.scss";
.v-application {
  font-family: $body-font-family, sans-serif !important;
}
</style>

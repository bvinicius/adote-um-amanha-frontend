<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data: () => ({}),
});
</script>

<style lang="scss">
@import "./assets/scss/shared.scss";

.v-application {
  font-family: $body-font-family, sans-serif !important;
}
</style>

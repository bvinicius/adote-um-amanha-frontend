<template>
  <v-app>
    <Toolbar :title="$root.toolbarTitle" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Toolbar from "./modules/shared/components/Toolbar.vue";

export default Vue.extend({
  name: "App",
  data: () => ({}),
  components: {
    Toolbar,
  },
});
</script>

<style lang="scss">
@import "./assets/scss/shared.scss";

.v-application {
  font-family: $body-font-family, sans-serif !important;
}
</style>

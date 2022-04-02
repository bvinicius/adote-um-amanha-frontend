<template>
  <v-app>
    <Toolbar :title="$root.toolbarTitle" :visible="$root.isToolbarVisible" />
    <v-main>
      <router-view />
    </v-main>
    <v-snackbar v-model="$root.isSnackbarVisible">{{
      $root.snackbarMessage
    }}</v-snackbar>
    <ConfirmationModal
      v-model="$root.isConfirmationDialogVisible"
      :title="$root.confirmationDialogTitle"
      :message="$root.confirmationDialogMessage"
    />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Toolbar from "./modules/shared/components/Toolbar.vue";
import ConfirmationModal from "./modules/shared/components/ConfirmationModal.vue";

export default Vue.extend({
  name: "App",
  data: () => ({}),
  components: {
    Toolbar,
    ConfirmationModal,
  },
});
</script>

<style lang="scss">
@import "./assets/scss/styles.scss";

.v-application {
  font-family: $body-font-family, sans-serif !important;
}
</style>

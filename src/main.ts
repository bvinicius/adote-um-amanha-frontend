import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  data: () => ({
    toolbarTitle: "",
    isToolbarVisible: false,
    snackbarMessage: "",
    isSnackbarVisible: false,
    confirmationDialogTitle: "",
    confirmationDialogMessage: "",
    isConfirmationDialogVisible: false,
  }),
  methods: {
    showToolbar(title?: string) {
      this.isToolbarVisible = true;
      if (title) {
        this.toolbarTitle = title;
      }
    },
    hideToolbar() {
      this.isToolbarVisible = false;
    },
    showSnackbar(message: string) {
      this.snackbarMessage = message;
      this.isSnackbarVisible = true;
    },
    showConfirmationModal(title: string, message?: string) {
      this.isConfirmationDialogVisible = true;
      this.confirmationDialogTitle = title;
      this.confirmationDialogMessage = message || "";
    },
  },
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

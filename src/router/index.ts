import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "../modules/shared/views/Login.vue";
import Necessity from "../modules/institution/views/Necessity.vue";
import Instituition from "../modules/institution/views/Instituition.vue";
import SplashScreen from "../modules/shared/views/SplashScreen.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: SplashScreen,
  },
  {
    path: "/auth",
    name: "Login",
    component: Login,
  },
  {
    //path: "/necessity/:id",
    path: "/necessity/",
    name: "Institution necessity",
    component: Necessity,
  },

  {
    path: "/casa",
    name: "Instituition instituition",
    component: Instituition,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

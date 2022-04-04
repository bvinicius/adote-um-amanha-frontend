import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "../modules/shared/views/Login.vue";
import Necessity from "../modules/institution/views/Necessity.vue";
import SplashScreen from "../modules/shared/views/SplashScreen.vue";
import EditNecessity from "../modules/institution/views/EditNecessity.vue";
import RegisterNecessity from "../modules/institution/views/RegisterNecessity.vue";

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
    path: "/necessity/:id",
    name: "Institution necessity",
    component: Necessity,
  },
  {
    path: "/necessity/:id/edit",
    name: "",
    component: EditNecessity,
  },
  {
    path: "/necessities/create",
    name: "",
    component: RegisterNecessity,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

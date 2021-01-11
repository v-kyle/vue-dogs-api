import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Breeds from "../views/Breeds.vue";
import Favorites from "../views/Favorites.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/breeds",
    name: "Breeds",
    component: Breeds
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: Favorites
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

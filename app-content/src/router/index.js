import Vue from "vue";
import VueRouter from "vue-router";
import Detail from "../components/Detail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "homepage",
    component: Detail,
  },
  {
    path: "/home/:id",
    name: "detail",
    component: () =>
      import(/* webpackChunkName: "detail" */ "../components/Detail.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

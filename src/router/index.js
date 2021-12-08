import { createRouter, createWebHistory } from "vue-router";
import Task from "../views/Task.vue";
import SignIn from "../views/SignIn.vue";
import store from "../store";

export const routes = [
  {
    path: "/login",
    name: "login",
    component: SignIn,
    notShow:true
  },
  {
    path: "/",
    name: "TASK",
    component: Task,
  },
  {
    path: "/location",
    name: "Location",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Location.vue"),
  },
  { path: "/:pathMatch(.*)*", redirect: "/login" },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

router.beforeEach((to, from, next) => {
  store.dispatch("fetchAccessToken");
  if (to.fullPath === "/" || to.fullPath === "/location") {
    if (!store.state.accessToken) {
      next("/login");
    }
  }
  if (to.fullPath === "/login") {
    if (store.state.accessToken) {
      return next("/");
    }
  }
  next();
});

export default router;

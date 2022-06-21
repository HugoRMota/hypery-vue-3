import { createRouter, createWebHistory } from "vue-router";
import { routes as Movie } from "../modules/movie/movie.module";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../layout/Layout.vue"),
      children: [...Movie],
    },
  ],
});

export default router;

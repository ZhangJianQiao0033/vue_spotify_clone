import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"), // 懒加载
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/SearchView.vue"),
    },
    {
      path: "/library",
      name: "library",
      component: () => import("../views/LibraryView.vue"),
    },
    // 添加通配符路由，匹配所有未定义路径并重定向到 "/"
    {
      path: "/:pathMatch(.*)*", // 匹配任何未定义的路径
      redirect: "/", // 重定向到根路径
    },
  ],
});

export default router;

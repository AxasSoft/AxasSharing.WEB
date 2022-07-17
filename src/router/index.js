import { createRouter, createWebHistory } from "vue-router";

// Default Pages
import Dashboard from "../views/Dashboard.vue";
// Component Pages
import Finished from "../views/FinishedArends.vue";
import Now from "../views/Now.vue";
import Autorization from "../views/Autorization/Autorization.vue";
import Login from "../views/Autorization/Login.vue";
import meRooms from "../views/MeRooms.vue"
import Create from "../views/MeRooms.vue"

const routes = [
  // Routes
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: { title: "Статистика "},
  },

  // Components based Routes
  {
    path: "/component/finished",
    name: "finished",
    component: Finished,
    meta: { title: "История аренд"},
  },
  {
    path: "/component/now",
    name: "Now",
    component: Now,
    meta: { title: "Текущие аренды"},
  },
  {
    path: "/component/create",
    name: "Create",
    component: Create,
    meta: { title: "Создать новый"},
  },
  {
    path: "/component/meRooms",
    name: "meRooms",
    component: meRooms,
    meta: { title: "Мои квартиры"},
  },
  {
    path: "/autorization",
    name: "autorization",
    component: Autorization,
    redirect: { name: 'Login' },
    meta: { title: "Авторизация"},
    children: [
      {
        path: "/autorization/login",
        name: "login",
        component: Login,
        meta: { title: "Войти"},
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  linkExactActiveClass: "exact-active",
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;

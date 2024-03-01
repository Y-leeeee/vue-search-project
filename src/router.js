import { createRouter, createWebHashHistory } from "vue-router";

import ContactView from "./views/ContactView.vue";
import SearchCharacter from "./components/SearchCharacter.vue";
import AboutView from "./views/AboutView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: ContactView,
      path: "/contact",
    },
    {
      component: AboutView,
      path: "/about",
    },
    {
      component: SearchCharacter,
      path: "/",
    },
  ],
});

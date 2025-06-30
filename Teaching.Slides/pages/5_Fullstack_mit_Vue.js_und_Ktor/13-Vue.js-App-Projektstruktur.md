---
transition: slide-left
layout: two-cols-header
---

# <devicon-vuejs/> Vue.js: Projektstruktur

Vue.js-Projekte folgen in der Regel einer bestimmten Verzeichnisstruktur, die die Organisation von Komponenten, Views und anderen Ressourcen erleichtert. Hier ist ein typisches Beispiel für die Verzeichnisstruktur eines Vue.js-Projekts:

::left::

```txt
src/
├── assets/
│   ├── images/
│   └── styles/
├── components/
│   ├── MyComponent.vue
│   └── AnotherComponent.vue
├── views/
│   ├── Home.vue
│   └── About.vue
├── router/
│   └── index.ts
├── App.vue
└── main.ts
```

::right::

```ts {*}{maxHeight:'400px'}
import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
```

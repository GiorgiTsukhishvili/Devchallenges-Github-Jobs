import { JobsView, NotFoundView, SingleJobView } from "@/views";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "jobs", component: JobsView },
    { path: "/job/:id", name: "singleJob", component: SingleJobView },
    { path: "/:pathMatch(.*)*", name: "404", component: NotFoundView },
  ],
});

export default router;

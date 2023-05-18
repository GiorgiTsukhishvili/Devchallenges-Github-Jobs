import { JobsView, SingleJobView } from "@/views";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "jobs", component: JobsView },
    { path: "/job/:id", name: "singleJob", component: SingleJobView },
  ],
});

export default router;

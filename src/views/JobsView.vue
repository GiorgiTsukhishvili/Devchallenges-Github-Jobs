<template>
  <div class="mt-8">
    <JobsSearch @submitSearch="submitJobSearch" />
    <JobsFilters
      @full-time="(e) => (isFullTime = e.target.value)"
      @work-place="(e) => (workPlace = e.target.value)"
      @location="(location: string) => workPlace = location"
      :isFullTime="isFullTime"
      :workPlace="workPlace"
    />
  </div>
</template>

<script setup lang="ts">
import { JobsSearch, JobsFilters } from "@/components";
import { getAllJobs } from "@/services";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import type { JobsTypes } from "@/types";

const { push } = useRouter();

const isFullTime = ref<boolean>(false);
const workPlace = ref<string>("");
const jobs = ref<JobsTypes[]>([]);

const submitJobSearch = (text: string) => {
  push({ name: "jobs", query: { search: text } });
};
onMounted(() => {
  console.log(import.meta.env.VITE_BASE_URL);
  const getJobs = async () => {
    const data = await getAllJobs();
    jobs.value = data.data;
  };

  getJobs();
});
</script>

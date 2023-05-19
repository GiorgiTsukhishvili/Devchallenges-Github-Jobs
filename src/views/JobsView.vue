<template>
  <div class="mt-8">
    <JobsSearch @submitSearch="submitJobSearch" />
    <div class="xl:flex-row gap-8 mt-10 flex-col flex">
      <JobsFilters
        @full-time="(e) => (isFullTime = e.target.checked)"
        @work-place="(e) => (workPlace = e.target.value)"
        @location="(location: string) => workPlace = location"
        :isFullTime="isFullTime"
        :workPlace="workPlace"
      />
      <div class="w-full flex flex-col gap-8" v-if="filteredJobs.length > 0">
        <JobsDescription
          v-for="(job, i) in filteredJobs"
          :key="i"
          :jobDetails="job"
        />
      </div>
      <div v-else class="w-full flex justify-center items-center relative">
        <LoadingAnimation :mainPage="true" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  JobsSearch,
  JobsFilters,
  JobsDescription,
  LoadingAnimation,
} from "@/components";
import { getAllJobs } from "@/services";
import { onMounted, ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import type { JobsTypes } from "@/types";

const { push } = useRouter();
const {
  query: { search },
} = useRoute();

const isFullTime = ref<boolean>(false);
const workPlace = ref<string>("");
const jobs = ref<JobsTypes[]>([]);

const filteredJobs = computed(() => {
  if (isFullTime) {
    return jobs.value
      .filter((el) => el.job_employment_type === "FULLTIME")
      .filter((el) =>
        workPlace.value !== "" ? el.job_country === workPlace.value : true
      );
  } else {
    return jobs.value.filter((el) =>
      workPlace.value !== "" ? el.job_country === workPlace.value : true
    );
  }
});

const submitJobSearch = (text: string) => {
  push({ name: "jobs", query: { search: text } });
};

onMounted(() => {
  const getJobs = async () => {
    const data = search
      ? await getAllJobs(search as string)
      : await getAllJobs();
    jobs.value = data.data.data;
  };

  getJobs();
});
</script>

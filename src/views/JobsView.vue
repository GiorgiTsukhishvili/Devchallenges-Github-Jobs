<template>
  <div class="mt-8">
    <JobsSearch @submitSearch="submitJobSearch" />
    <JobsFilters
      @full-time="(e) => (isFullTime = e.target.value)"
      @work-place="(e) => (workPlace = e.target.value)"
      :isFullTime="isFullTime"
      :workPlace="workPlace"
    />
  </div>
</template>

<script setup lang="ts">
import { JobsSearch, JobsFilters } from "@/components";
import { ref } from "vue";

const isFullTime = ref<boolean>(false);
const workPlace = ref<string>("");

const submitJobSearch = (text: string) => {
  console.log(text);
};
</script>

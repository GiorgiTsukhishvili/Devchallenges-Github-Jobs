<template>
  <RouterLink
    :to="{ name: 'singleJob', params: { id: jobDetails.job_id } }"
    class="bg-white w-full shadow-md h-28 rounded-md flex items-start md:items-center justify-between md:flex-row flex-col"
  >
    <div class="flex md:items-center items-start">
      <img
        :src="jobDetails.employer_logo"
        alt="job company logo"
        class="w-[90px] h-[90px] rounded-md ml-3"
      />
      <div class="ml-4">
        <h1 class="text-xs text-indigo-900 font-bold">
          {{ jobDetails.employer_name }}
        </h1>
        <h1 class="mt-2 text-2xl">{{ jobDetails.job_job_title }}</h1>
        <h1
          class="mt-2 text-xs text-indigo-900 font-bold border border-indigo-900 p-1.5 inline-block rounded text-center pt-1"
          v-if="jobDetails.job_employment_type === 'FULLTIME'"
        >
          Full Time
        </h1>
      </div>
    </div>
    <div class="flex items-end gap-7 h-full mr-3 mb-6">
      <h1 class="flex items-center gap-2 text-slate-300 text-sm font-medium">
        <EarthIcon />
        {{ jobDetails.job_country }}
      </h1>
      <h1 class="flex items-center gap-2 text-slate-300 text-sm font-medium">
        <ClockIcon />
        {{ date }}
      </h1>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { EarthIcon, ClockIcon } from "@/components";
import { useCalculateDate } from "@/hooks";
import type { JobsTypes } from "@/types";
import { computed } from "vue";

const props = defineProps<{ jobDetails: JobsTypes }>();

const date = computed(() => {
  const { calculatedDate } = useCalculateDate(
    props.jobDetails.job_posted_at_datetime_utc
  );
  return calculatedDate();
});
</script>

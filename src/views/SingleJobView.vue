<template>
  <div class="flex w-full mt-8 lg:flex-row flex-col" v-if="jobDetails">
    <div class="w-full max-w-[330px] mr-10">
      <button class="flex items-center gap-4" @click="go(-1)">
        <ArrowLeftIcon />
        <h1 class="text-blue-500 text-sm font-medium">Back to search</h1>
      </button>
      <h1 class="uppercase text-slate-300 font-bold mt-9 mb-4">How to Apply</h1>
      <h2 class="text-sm font-medium max-w-[220px]">
        Please email a copy of your resume and online portfolio to
        <span class="text-blue-500">wes@kasisto.com</span> & CC
        <span class="text-blue-500">eric@kasisto.com</span>
      </h2>
    </div>
    <div class="lg:mt-0 mt-6">
      <div class="flex items-center gap-4">
        <h1 class="font-bold text-2xl text-blue-950">
          {{ jobDetails.job_title }}
        </h1>
        <h1
          class="mt-2 text-xs text-indigo-900 font-bold border border-indigo-900 p-1.5 inline-block rounded text-center pt-1"
          v-if="jobDetails.job_employment_type === 'FULLTIME'"
        >
          Full Time
        </h1>
      </div>
      <h1 class="flex items-center gap-2 text-slate-300 text-sm font-medium">
        <ClockIcon />
        {{ date }}
      </h1>
      <div class="flex md:items-center items-start mt-6">
        <img
          :src="jobDetails.employer_logo"
          alt="job company logo"
          class="w-[42px] h-[42px] rounded-md ml-3"
        />
        <div class="ml-4">
          <h1 class="text-xs text-indigo-900 font-bold">
            {{ jobDetails.employer_name }}
          </h1>

          <h1
            class="flex items-center gap-2 text-slate-300 text-sm font-medium"
          >
            <EarthIcon />
            {{ jobDetails.job_country }}
          </h1>
        </div>
      </div>
      <h1
        style="white-space: pre-line"
        class="max-w-[800px] mt-6 text-blue-950"
      >
        {{ jobDetails.job_description }}
      </h1>
    </div>
  </div>
  <LoadingAnimation v-else :mainPage="false" />
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref, computed } from "vue";
import { getSingleJobs } from "@/services";
import type { JobsTypes } from "@/types";
import {
  ArrowLeftIcon,
  ClockIcon,
  EarthIcon,
  LoadingAnimation,
} from "@/components";
import { useCalculateDate } from "@/hooks";

const {
  params: { id },
} = useRoute();

const { go, push } = useRouter();

const jobDetails = ref<JobsTypes>();

const date = computed(() => {
  const { calculatedDate } = useCalculateDate(
    jobDetails.value?.job_posted_at_datetime_utc
  );
  return calculatedDate();
});

onMounted(() => {
  const getJobDetails = async () => {
    try {
      const data = await getSingleJobs(id as string);
      jobDetails.value = data.data.data[0];
    } catch (err) {
      push({ name: "404" });
    }
  };

  getJobDetails();
});
</script>

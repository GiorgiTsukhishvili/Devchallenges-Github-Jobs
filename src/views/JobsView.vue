<template>
  <div class="mt-8 relative">
    <JobsSearch @submitSearch="submitJobSearch" />
  </div>
</template>

<script setup lang="ts">
import { JobsSearch } from "@/components";

const submitJobSearch = (text: string) => {
  console.log(text);
};
</script>

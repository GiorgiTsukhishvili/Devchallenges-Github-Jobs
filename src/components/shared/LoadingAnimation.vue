<template>
  <div
    class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center"
  >
    <div class="animate-spin duration-500">
      <LoadingIcon :mainPage="mainPage" />
    </div>
    <h1 class="text-2xl font-semibold mt-6 text-center">Loading Please Wait</h1>
  </div>
</template>

<script setup lang="ts">
import { LoadingIcon } from "@/components";

defineProps<{ mainPage: boolean }>();
</script>

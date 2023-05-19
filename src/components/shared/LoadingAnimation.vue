<template>
  <div
    class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center"
  >
    <div
      class="border-dashed border-x-8 border-y-8 border-black rounded-full animate-spin duration-500"
      :class="mainPage ? 'w-20 h-20' : 'w-32 h-32'"
    />
    <h1 class="text-2xl font-semibold mt-6 text-center">Loading Please Wait</h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{ mainPage: boolean }>();
</script>

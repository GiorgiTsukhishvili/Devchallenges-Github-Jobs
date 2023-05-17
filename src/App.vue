<template>
  <div class="md:px-32 md:py-8 p-3 bg-slate-50 min-h-screen">
    <h1 class="text-2xl"><span class="font-bold">Github</span> Jobs</h1>
    <RouterView :key="$route.fullPath" />
  </div>
</template>

<script setup lang="ts"></script>

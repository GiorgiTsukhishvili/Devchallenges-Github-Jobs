<template>
  <div class="mt-10 w-full max-w-[379px]">
    <div>
      <div class="flex items-center gap-3">
        <input
          type="checkbox"
          id="full_time"
          class="w-[18px] h-[18px]"
          :checked="isFullTime"
          @input="(e) => emits('full-time', e)"
        />
        <label for="full_time" class="text-sm font-medium">Full time</label>
      </div>
      <h1 class="uppercase text-slate-300 font-bold text-sm mt-8 mb-3">
        Location
      </h1>
      <div class="w-full rounded-md bg-white h-12 shadow-md"></div>
      <div class="mt-6">
        <div
          v-for="(radioButton, i) in radioButtons"
          :key="i"
          class="flex items-center gap-3 mb-3"
        >
          <input
            type="radio"
            name="place"
            :value="radioButton.value"
            :id="radioButton.name"
            :checked="radioButton.value === workPlace"
            @input="(e) => emits('work-place', e)"
          />
          <label :for="radioButton.name" class="text-sm font-medium">{{
            radioButton.name
          }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { radioButtons } from "@/config";

defineProps<{ isFullTime: boolean; workPlace: string }>();

const emits = defineEmits(["full-time", "work-place"]);
</script>

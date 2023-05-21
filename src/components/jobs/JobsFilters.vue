<template>
  <div class="w-full max-w-[379px]">
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
      <form
        class="w-full rounded-md bg-white h-12 shadow-md flex items-center gap-4 pl-3"
        @submit.prevent="emits('location', place)"
      >
        <EarthIcon />
        <input
          type="text"
          v-model="place"
          placeholder="City, state, zip code or country"
          class="w-full h-full focus:ring-0 focus:outline-none focus:border-none placeholder:text-slate-300 pr-2"
        />
      </form>
      <div class="mt-6">
        <RadioButton
          v-for="(radioButton, i) in radioButtons"
          :key="i"
          :radioButton="radioButton"
          :workPlace="workPlace"
          @workPlace="(e: Event) => emits('work-place', e)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EarthIcon, RadioButton } from "@/components";
import { radioButtons } from "@/config";
import { ref } from "vue";

defineProps<{ isFullTime: boolean; workPlace: string }>();

const emits = defineEmits(["full-time", "work-place", "location"]);

const place = ref<string>("");
</script>

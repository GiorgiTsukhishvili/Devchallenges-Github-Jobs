<template>
  <div class="flex items-center gap-3 mb-3">
    <input
      type="radio"
      name="place"
      :value="radioButton.value"
      :id="radioButton.name"
      :checked="radioButton.value === workPlace"
      @input="(e) => emits('work-place', e)"
    />
    <label :for="radioButton.name" class="text-sm font-medium cursor-pointer">{{
      radioButton.name
    }}</label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  radioButton: {
    name: string;
    value: string;
  };
  workPlace: string;
}>();

const emits = defineEmits(["work-place"]);
</script>

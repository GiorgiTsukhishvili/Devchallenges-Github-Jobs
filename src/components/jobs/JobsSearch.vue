<template>
  <img
    src="/src/assets/icons/backgroundImg.png"
    alt="search-background"
    class="h-36 object-cover rounded-md"
  />
  <div
    class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full px-4 lg:px-[205px]"
  >
    <form
      class="flex items-center bg-white rounded-md h-[55px] pl-4 pr-1"
      @submit.prevent="emits('submitSearch', searchText)"
    >
      <SearchBagIcon />
      <input
        type="text"
        class="w-full pl-2 placeholder:text-slate-300 h-full focus:border-none focus:ring-0 focus:outline-none pr-4"
        placeholder="Title, companies, expertise or benefits"
        v-model="searchText"
      />
      <button class="bg-blue-500 text-white rounded sm:px-7 px-4 py-2">
        Search
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { SearchBagIcon } from "@/components";
import { ref } from "vue";

const searchText = ref<string>("");

const emits = defineEmits(["submitSearch"]);
</script>

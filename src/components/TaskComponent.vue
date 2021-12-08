<template>
  <div class="flex flex-col my-2">
    <label class="inline-flex items-center mt-3">
      <input
        v-bind:disabled="completed"
        type="checkbox"
        class="form-checkbox h-5 w-5 text-gray-600"
        v-bind:checked="completed"
        v-on:input="$emit('toggle-check', id)"
      /><span class="ml-3 text-gray-700 font-semibold">{{ title }}</span>
    </label>
 
    <div v-if="!completed" class="flex justify-center">
<BellIcon class=" ml-8 h-5 w-5 text-yellow-600"></BellIcon>
 <span class="ml-4">{{deadline}}</span>
    </div>
    
  </div>
</template>

<script>
import { BellIcon } from "@heroicons/vue/solid";
export default {
  name: "TaskComponent",
  props: ["completed", "title", "deadline","id"],
  components: { BellIcon },
};
</script>

<style></style>

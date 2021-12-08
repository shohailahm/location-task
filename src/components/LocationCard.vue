<template>
  <div
    class="flex mb-3 cursor-move"
    draggable="true"
    @dragstart="$emit('touchtart', $event)"
    @touchstart="$emit('touchtart', $event)"
  >
    <LocationMarkerIcon class="h-5 w-5 text-yellow-700 text-lg" />
    <div class="flex flex-col ml-5">
      <div class="font-semibold text-lg">{{ address }}</div>
      <div>{{ lat + "" + lang }}</div>
    </div>
  </div>
</template>

<script>
import { LocationMarkerIcon } from "@heroicons/vue/solid";
export default {
  props: ["address", "lat", "lang"],
  name: "LocationCard",
  components: { LocationMarkerIcon },
};
</script>

<style></style>

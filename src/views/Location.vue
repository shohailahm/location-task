<template>
  <LayoutBasic>
    <div class="about">
      <div class="home font-semibold mb-2" @click="show = true">+Check In</div>

      <h1 class="font-bold text-xl my-3">Current Location</h1>
      <LocationCard
        v-if="checkedLocations"
        v-bind="checkedLocations"
        @touchtart="touchStart"
      ></LocationCard>
      <h3 class="font-bold my-3 text-xl">Previous location</h3>
      <LocationCard
        v-for="task of filterFirst"
        :key="task.address"
        v-bind="task"
      ></LocationCard>
    </div>
  </LayoutBasic>
</template>

<script>
import LayoutBasic from "@/components/layouts/basic.vue";
import LocationCard from "../components/LocationCard.vue";

export default {
  name: "Location",
  components: {
    LayoutBasic,
    LocationCard,
  },
  data() {
    return {
      locations: [
        {
          address: "Pustegrand , Stockholm , SE",
          lat: "59.239 'N",
          lang: "60.32 'E",
          checked: true,
        },
        {
          address: "Pustegrand,  Stockholm ,SE",
          lat: "59.239 'N",
          lang: "60.32 'E",
          checked: false,
        },
        { address: "Miami, Florida ,USA", lat: "89.239 'N", lang: "90.32 'E" },
      ],
    };
  },
  computed: {
    filterFirst() {
      return this.locations.slice(1, this.locations.length);
    },
    checkedLocations() {
      return this.locations.find((lo) => lo.checked) || null;
    },
  },
  methods: {
    deleteFirst() {
      this.locations = this.locations.filter((lo) => !lo.checked);
    },
    touchStart(touchEvent) {
      if (!touchEvent.changedTouches) {
        const posXStart = touchEvent.clientX;
       return addEventListener(
          "dragend",
          (touchEvent) => this.touchEnd(touchEvent, posXStart),
          { once: true }
        );
      }
      if (touchEvent.changedTouches.length !== 1) {
        // We only care if one finger is used
        return;
      }
      const posXStart = touchEvent.changedTouches[0].clientX;
      addEventListener(
        "touchend",
        (touchEvent) => this.touchEnd(touchEvent, posXStart),
        { once: true }
      );
    },
    touchEnd(touchEvent, posXStart) {
      if (!touchEvent.changedTouches) {
        const posXEnd = touchEvent.clientX;
        if (posXStart < posXEnd) {
          return this.deleteFirst(); // swipe right
        } else if (posXStart > posXEnd) {
          return this.updateAndConfirm(); // swipe left
        }
      }
      if (touchEvent.changedTouches.length !== 1) {
        // We only care if one finger is used
        return;
      }
      const posXEnd = touchEvent.changedTouches[0].clientX;
      if (posXStart < posXEnd) {
        return this.deleteFirst(); // swipe right
      } else if (posXStart > posXEnd) {
         return this.updateAndConfirm(); // swipe left
      }
    },
    checkin() {
      navigator.geolocation.getCurrentPosition(
        (res) => {
          console.log(res);
        },
        (res) => {
          console.log(res);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    },
  },
};
</script>

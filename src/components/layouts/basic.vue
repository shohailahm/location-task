/* eslint-disable vue/no-use-v-if-with-v-for */
<template>
  <div class="flex">
    <div
      id="nav"
      class="fixed top-0 left-0 h-screen flex flex-col w-56 justify-between"
    >
      <ul>
        <router-link
          v-for="item in items"
          :key="item.id"
          :to="item.path"
          v-slot="{ href, navigate, isActive, isExactActive }"
          custom
        >
          <li
            :class="[
              isActive && 'router-link-active',
              isExactActive && 'router-link-exact-active',
            ]"
          >
            <a :href="href" @click="navigate">{{ item.name }}</a>
          </li></router-link
        >
      </ul>
      <div class="mb-5 font-semibold cursor-pointer" @click="logout">
        <LogoutIcon class="text-black w-6 h-6 mx-4 inline-block" />
        <span>Logout</span>
      </div>
    </div>
    <div class="flex flex-col ml-56 h-full overflow-hidden p-16 items-start">
      <slot />
    </div>
  </div>
</template>

<script>
import { routes } from "../../router";
import { LogoutIcon } from "@heroicons/vue/solid";
import { mapActions } from "vuex";
export default {
  name: "LayoutBasic",
  data() {
    return { items: routes.filter((route) => !route.notShow) };
  },
  components: { LogoutIcon },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style>
#nav {
  padding-top: 30px;
}
#nav ul {
  list-style: none;
  padding-left: 0px;
  display: inline-block;
  width: inherit;
}
#nav li {
  font-weight: bold;
  color: #000000;
  width: 100%;
  margin-bottom: 8px;
  box-sizing: border-box;
}

#nav li a {
  display: block;
}

#nav li.router-link-exact-active {
  padding: 8px;
  background-color: #000000;
  color: #ffffff;
  border-top-right-radius: 30px 50%;
  border-bottom-right-radius: 30px 50%;
}
</style>

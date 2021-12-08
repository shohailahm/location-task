<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <input
            v-model="form.email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-bind:class="{ 'border-red-500': errors.email }"
            id="email"
            type="text"
            placeholder="Email"
            v-on:focus="resetErrors"
          />
          <p class="text-red-500 text-xs italic" v-if="errors.email">
            Please enter an email
          </p>
        </div>
        <div class="mb-6">
          <input
            v-model="form.password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            v-bind:class="{ 'border-red-500': errors.password }"
            id="password"
            type="password"
            placeholder="Password"
            @focus="resetErrors"
          />
          <p class="text-red-500 text-xs italic" v-if="errors.password">
            Please choose a password.
          </p>
        </div>
        <div class="flex items-center justify-center w-full">
          <button
            class="bg-primary hover:bg-gray hover:opacity-80 text-white font-bold focus:outline-none focus:shadow-outline rounded-full py-3 px-6 w-full"
            type="button"
            v-on:click="login"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Location",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      errors: {
        email: false,
        password: false,
      },
    };
  },
  methods: {
    ...mapActions({ callLogin: "doLogin" }),
    login() {
      if (!this.form.email) {
        return (this.errors.email = true);
      }
      if (!this.form.password) {
        return (this.errors.password = true);
      }
      let res = this.callLogin({ ...this.form, device_name: "ubuntu_chrome" });
      console.log("res", res);
    },
    resetErrors() {
      this.errors = {
        email: false,
        password: false,
      };
    },
  },
};
</script>

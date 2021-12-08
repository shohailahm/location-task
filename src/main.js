import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";
import axios from "axios";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

axios.defaults.baseURL = "https://todo-test.digitaltolk.com/api";
axios.defaults.headers = {
  "Content-Type": "application/json",
  "X-XSRF-TOKEN": "Zl49StyUu9721TFoRHfDqGmEVikCKNhJayGUgDvK",
};
createApp(App).use(store).use(router).use(Toast).mount("#app");

import axios from "axios";
import { createStore } from "vuex";
import router from "../router";
import task from "./task";

export default createStore({
  state: {
    isLoggedIn: false,
    user: null,
    accessToken: null,
  },
  mutations: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    login: (state) => {
      state.isLoggedIn = true;
    },
    updateAccessToken: (state, accessToken) => {
      state.accessToken = accessToken;
    },
  },
  actions: {
    async doLogin({ commit }, loginData) {
      try {
        // const response = await axios.post(
        //   "/tokens",
        //   JSON.stringify(loginData),
        //   {
        //     transformRequest: (data, headers) => {
        //       delete headers["X-XSRF-TOKEN"];
        //       return data;
        //     },
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //   }
        // );
        // localStorage.setItem("accessToken", response.data.token);
        // commit("loginStop", null);
        // commit("updateAccessToken", response.data.token);
        router.push("/");
        //return response;
      } catch (error) {
        commit("loginStop", error.response.data.error);
        commit("updateAccessToken", null);
      }
    },
    logout({ commit }) {
      localStorage.removeItem("accessToken");
      commit("logout");
      router.push("/login");
    },
    fetchAccessToken({ commit }) {
      commit("updateAccessToken", localStorage.getItem("accessToken"));
    },
  },
  modules: {
    task,
  },
});

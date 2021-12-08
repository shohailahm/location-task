import axios from "axios";

export default {
  namedspaced: true,
  state: {
    tasks: [],
  },
  mutations: {
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    },
  },
  actions: {
    async getTasks({ commit }) {
      try {
        const response = await axios.get("/tasks");
        commit("SET_TASKS", response.data);
        return response;
      } catch (error) {}
    },
  },
  modules: {},
};

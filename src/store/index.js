import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    todos: [],
  },
  getters: {},
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload;
    },
    storeTodo(state, payload) {
      state.todos.unshift(payload);
    },
  },
  actions: {
    async getTodos(context) {
      try {
        const response = await axios.get("http://localhost:3001");
        context.commit("storeTodos", response.data);
      } catch (error) {
        console.error("Internal Server Error: ", error);
        throw error;
      }
    },
    async addTodo(context, data) {
      if (!data.title.trim()) {
        return false;
      }
      try {
        const response = await axios.post("http://localhost:3001/add-todo", data);
        const { todo } = response.data;
        context.commit("storeTodo", todo);
      } catch (error) {
        console.error("Internal Server Error: ", error);
        throw error;
      }
    },
    async updateTodo(context, { id, data }) {
      try {
        const response = await axios.post("http://localhost:3001/update-todo", { id, data });
        this.dispatch("getTodos");
      } catch (error) {
        console.error("Internal Server Error: ", error);
        throw error;
      }
    },
    deleteTodo(context, id) {
      const data = {
        id,
      };
      return axios.post('http://localhost:3001/delete-todo', data).then(() => {
        this.dispatch("getTodos");
      });
    },
  },
  modules: {},
});

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
        const response = await axios.get('http://localhost:3001', {
          withCredentials: true // Enviar cookies da sessão para o servidor
        });
        context.commit("storeTodos", response.data);
      } catch (error) {
        // TODO: tratar erro
        console.error("Internal Server Error: ", error);
        throw error;
      }
    },
    async addTodo(context, data) {
      try {
        const response = await axios.post("http://localhost:3001/add-todo", data, {
          withCredentials: true // Enviar cookies da sessão para o servidor
        });
        this.dispatch("getTodos");
      } catch (error) {
        // TODO: tratar erro
        console.error("Internal Server Error: ", error);
        throw error;
      }
    },
    async updateTodo(context, data) {
      try {
        const response = await axios.post("http://localhost:3001/update-todo", data, {
          withCredentials: true // Enviar cookies da sessão para o servidor
        });
        this.dispatch("getTodos");
      } catch (error) {
        // TODO: tratar erro
        console.error("Internal Server Error: ", error);
        throw error;
      }
    },
    async deleteTodo(context, id) {
      const data = {
        id,
      };
      try {
        const response = await axios.post("http://localhost:3001/delete-todo", data, {
          withCredentials: true // Enviar cookies da sessão para o servidor
        });
        this.dispatch("getTodos");
      } catch (error) {
        // TODO: tratar erro
        console.error("Internal Server Error: ", error);
        throw error;
      }
    },
  },
  modules: {},
});

<template>
  <div>
      <todo-spinner v-if="loading"></todo-spinner>
      <template v-else>
        <todo-form></todo-form>
        <todo-itens v-if="$store.state.todos.length > 0"></todo-itens>
        <todo-empty v-else></todo-empty>
      </template>
  </div>
</template>

<script>
import TodoSpinner from "../components/TodoSpinner.vue";
import TodoForm from "../components/TodoForm.vue";
import TodoItens from "../components/TodoItens.vue";
import TodoEmpty from "../components/TodoEmpty.vue";
// import axios from "axios";

export default {
  name: "App",
  components: {
    TodoSpinner,
    TodoForm,
    TodoItens,
    TodoEmpty,
  },
  data() {
    return {
      loading: false,
    };
  },
  async created() {
    // // way 1 to get data use await
    // this.loading = true;
    // const data = await axios
    //   .get("http://localhost:3000/todos")
    //   .then((response) => response.data)
    //   .finally(() => (this.loading = false));
    // this.$store.commit("storeTodos", data);
    // // way 2 to get data wait for response in then
    // // axios.get("http://localhost:3000/todos").then((response) => this.$store.commit("storeTodos", response.data));
    this.loading = true;
    this.$store.dispatch("getTodos").then(() => {
      this.loading = false;
    });
  },
};
</script>

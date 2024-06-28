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
    this.loading = true;
    this.$store.dispatch("getTodos").then(() => {
      this.loading = false;
    });
  },
};
</script>

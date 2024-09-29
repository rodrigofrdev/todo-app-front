<template>
  <main>
    <Toast />
    <form class="login-form" @submit.prevent="postLogin">
      <input type="email" placeholder="E-mail" class="input-field" v-model="email" />
      <input type="password" placeholder="Password" class="input-field" v-model="password" />
      <div class="flex flex-col w-full space-y-2">
        <button type="submit" class="submit-button">Login</button>
        <button type="submit" class="submit-button" @click="navigateToSignup()">
          Sign up
        </button>
      </div>
    </form>
  </main>
</template>

<script>
import Toast from "primevue/toast";
import { login } from "../services/authService";
import { showToast } from "../utils/toastUtil"; // util/mixin

export default {
  name: "AppLogin",
  components: {
    Toast,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async postLogin() {
      try {
        if (this.email === "" || this.password === "") {
          showToast(
            this.$toast,
            "warn",
            "Warn",
            "Email and password are required"
          );
          return;
        }
        const result = await login(this.email, this.password);
        showToast(this.$toast, "success", "Sucess", result.message);
        this.$router.push("/todos");
      } catch (error) {
        showToast(this.$toast, "error", "Error", error.message);
      }
    },
    navigateToSignup() {
      this.$router.push("/signup");
    },
  },
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #1a1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.login-form {
  background-color: #2d2d2d;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-field {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #3d3d3d;
  border-radius: 5px;
  background-color: #1a1a1a;
  color: #b3b3b3;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.input-field::placeholder {
  color: #777;
}

.input-field:focus {
  border-color: #4caf50;
  outline: none;
}

.submit-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #388e3c;
}
</style>

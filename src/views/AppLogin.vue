<template>
  <form class="login-form" @submit.prevent="postLogin">
    <input type="text" placeholder="Username" class="input-field" v-model="username"/>
    <input type="password" placeholder="Password" class="input-field" v-model="password"/>
    <button type="submit" class="submit-button">Login</button>
  </form>
</template>

<script>
export default {
  name: "AppLogin",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async postLogin() {
      try {
        const response = await fetch("http://localhost:3001/post-login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
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

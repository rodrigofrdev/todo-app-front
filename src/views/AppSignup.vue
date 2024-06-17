<template>
  <form class="login-form" @submit.prevent="postSignUp">
    <input type="text" placeholder="Name" class="input-field" v-model="name" />
    <input type="email" placeholder="Email" class="input-field" v-model="email" />
    <input type="text" placeholder="Cellphone" class="input-field" v-model="cellphone" />
    <input type="password" placeholder="Password" class="input-field" v-model="password" />
    <div class="flex flex-col w-full space-y-2">
      <button type="submit" class="submit-button">Register</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "AppSignup",
  data() {
    return {
      name: "",
      email: "",
      cellphone: "",
      password: "",
    };
  },
  methods: {
    async postSignUp() {
      try {
        const response = await fetch("http://localhost:3001/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            cellphone: this.cellphone,
            password: this.password,
          }),
        });
        if (response.status === 200) {
          this.$router.push("/");
        }
      } catch (error) {
        // TODO: print error message
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
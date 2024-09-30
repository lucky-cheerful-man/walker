<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        username: '',
        password: '',
        error: ''
      };
    },
    methods: {
      login() {
        try {
          const response = axios.post('/walker/login', {
            name: this.username,
            password: this.password
          });
          // 登录成功后处理
          console.log('Login successful:', response);
          this.$router.push('/home'); 
        } catch (err) {
          this.error = 'Login failed. Please check your credentials.';
          console.log('Login failed:', err);
        }
      }
    }
  };
  </script>
  
  <style>
  .error {
    color: red;
  }
  </style>
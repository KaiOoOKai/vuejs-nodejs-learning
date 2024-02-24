<script>
import GoogleLogin from '../components/GoogleLogin.vue';

export default {
  components: {
    GoogleLogin,
  },
  data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Here you can add login logic, like sending credentials to your backend
        console.log('Logging in...');
      }
    }
};
  
</script>

<template>
    <div>
    
  </div>
    <div class="login-container">
      <div class="login-form">
        <h2 class="text-center mb-4">Login</h2>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" v-model="username" required>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" v-model="password" required>
          </div>
          <button v-on:click="login" type="submit" class="btn btn-primary btn-block">Login</button>
          <GoogleLogin></GoogleLogin>
        </form>
      </div>
    </div>
  </template>

  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .login-form {
    max-width: 400px;
    width: 100%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .btn {
    cursor: pointer;
  }
  </style>
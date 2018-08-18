<template>
  <div>
    <h1>Register</h1>
    <br>
    <input
      type="email"
      name="email"
      placeholder="email"
      v-model="email"
    >
    <br>
    <input
      type="password"
      name="password"
      placeholder="password"
      v-model="password"
    >
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async register() {
      const res = await AuthenticationService.register({
        email: this.email,
        password: this.password,
      });
      console.log(res.data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <form class="form-signin">
    <img class="mb-4" src="/docs/4.2/assets/brand/bootstrap-solid.svg" alt width="72" height="72" />
    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
    <label for="inputEmail" class="sr-only">Email address</label>
    <input
      type="email"
      id="inputEmail"
      class="form-control"
      placeholder="Email address"
      required
      autofocus
      v-model="user.username"
    />
    <label for="inputPassword" class="sr-only">Password</label>
    <input
      type="password"
      id="inputPassword"
      class="form-control"
      placeholder="Password"
      v-model="user.password"
      required
    />
    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me" /> Remember me
      </label>
    </div>
    <button class="btn btn-lg btn-primary btn-block" type="submit" @click="submit">Sign in</button>
    <button class="btn btn-lg btn-primary btn-block" type="submit" @click="logout">Log out</button>
    <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
  </form>
</template>

<script>
import app from "../main";
export default {
  name: "Login",
  props: {
    msg: String
  },
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    submit() {
      app.$store.dispatch("login", this.user);
    },
    logout() {
      app.$store.dispatch("logout");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
form {
  max-width: 300px;
  margin: auto;
}
</style>

<template>
  <form @submit.prevent="onSignUp">
    <div class="contact-name">
      <input type="text" v-model="username" placeholder="Enter your username" />
      <button type="submit">Create An Account</button>
    </div>
  </form>
</template>
<script>
import { userService } from '../services/user.service.js'
export default {
  data() {
    return {
      username: null,
    }
  },
  methods: {
    async onSignUp() {
      await userService.signup(this.username)
      this.navigateToHomePage()
    },
    navigateToHomePage() {
      this.$router.push('/home')
    },
  },
}
</script>
<style lang="scss"></style>

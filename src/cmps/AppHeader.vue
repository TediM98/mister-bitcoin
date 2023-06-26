<template>
  <header class="app-header">
    <nav>
      <div class="left">
        <RouterLink to="/home">Home</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
        <RouterLink to="/contact">Contacts</RouterLink>
        <RouterLink to="/stats">Chart</RouterLink>
      </div>

      <div v-if="user && exchgRate" class="right">
        <div class="quick-stats">1 USD = {{ this.exchgRate }} BTC</div>
        <div>Logged in as: {{ this.user.name }}</div>
        <!-- <div class="avatar">
          <span class="initials">J.C</span>
        </div> -->
      </div>
    </nav>
  </header>
</template>

<script>
import { userService } from '../services/user.service.js'
import { bitcoinService } from '../services/bitcoin.service.js'
export default {
  data() {
    return {
      user: null,
      exchgRate: null,
      // presentedUser: '',
    }
  },
  async created() {
    const loggedInUser = await userService.getUser()
    this.user = loggedInUser
    this.exchgRate = await bitcoinService.getRate()
    // this.presentName()
  },
  mounted() {
    // this.presentName()
  },
  methods: {
    // presentName() {
    //   if (this.user.name.includes(' ')) {
    //     const names = this.user.name.split(' ')
    //     const firstLetter = names[0].charAt(0).toUpperCase()
    //     const lastLetter = names[1].charAt(0).toUpperCase()
    //     this.presentedUser = `${firstLetter}.${lastLetter}`
    //   } else {
    //     const firstLetter = this.user.name.charAt(0).toUpperCase()
    //     this.presentedUser = firstLetter
    //   }
    // },
  },
}
</script>

<style lang="scss"></style>

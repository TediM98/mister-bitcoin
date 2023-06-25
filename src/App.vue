<script>
import AppHeader from '@/cmps/AppHeader.vue'
import AppFooter from '@/cmps/AppFooter.vue'
import UserMsg from '@/cmps/UserMsg.vue'
export default {
  components: {
    AppHeader,
    UserMsg,
    AppFooter,
  },
}
</script>

<template>
  <AppHeader />
  <main class="main-content">
    <UserMsg />
    <RouterView />
  </main>

  <AppFooter />
</template>

<style scoped>
.main-content {
  min-height: calc(90vh - 4em);
  position: relative;
}
</style>

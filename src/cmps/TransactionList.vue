<template>
  <section class="transaction-box">
    <h1>Your latest transactions:</h1>
    <div class="no-transactions" v-if="transactions.length === 0">
      No transactions available.
    </div>
    <ul class="transaction-list" v-else>
      <li v-for="transaction in transactions" :key="transaction.id">
        <span>To: {{ transaction.to }}</span>
        <span>At: {{ formatDate(transaction.at) }}</span>
        <span>Amount: {{ transaction.amount }} BitCoin</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    transactions: {
      type: Array,
      required: true,
    },
  },
  methods: {
    formatDate(timestamp) {
      const date = new Date(timestamp)
      const day = date.getDate().toString().padStart(2, '0')
      const month = (date.getMonth() + 1).toString().padStart(2, '0')
      const year = date.getFullYear()
      return `${day}/${month}/${year}`
    },
  },
}
</script>

<style lang="scss">
.transaction-box {
  overflow-y: auto;
  height: 100px;
  padding-left: 500px;
  h1 {
    font-size: 18px;
    margin-bottom: 0;
  }

  ul {
    padding: 0;
  }

  li {
    font-size: 16px;
  }

  .transaction-list {
    list-style-type: none;
  }

  .balance-desc {
    display: flex;
    justify-content: space-between;
  }
}
</style>

<template>
  <div class="transfer-funds">
    <h2>Transfer Funds</h2>
    <form @submit.prevent="transfer">
      <label for="amount">Amount:</label>
      <input type="number" v-model="amount" required />
      <button type="submit">Transfer</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { userService } from '@/services/user.service'
import { showSuccessMsg, showErrorMsg } from '@/services/eventBus.service.js'

export default {
  name: 'TransferFunds',
  props: {
    contactId: {
      type: String,
      required: true,
    },
    contactName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const amount = ref('')

    const transfer = () => {
      const transferAmount = parseFloat(amount.value)
      if (isNaN(transferAmount) || transferAmount <= 0) {
        showErrorMsg('Please enter a valid transfer amount.')
        return
      }

      userService.transferFunds(
        props.contactId,
        props.contactName,
        transferAmount
      )
      showSuccessMsg('Transaction Completed!')

      console.log(amount.value)
      amount.value = ''
    }

    return {
      amount,
      transfer,
    }
  },
}
</script>

<style scoped>
.transfer-funds {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #00bd7e;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>

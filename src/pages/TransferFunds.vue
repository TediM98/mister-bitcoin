<template>
  <div class="transfer-funds">
    <h2>Transfer Funds</h2>
    <div v-if="user && user.balance">{{ formattedBalance }} BitCoin left</div>
    <form @submit.prevent="transfer">
      <label for="amount">Amount:</label>
      <input type="number" v-model="amount" required />
      <button type="submit">Transfer</button>
    </form>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import { userService } from '@/services/user.service'
import { showSuccessMsg, showErrorMsg } from '@/services/eventBus.service.js'
import { contactService } from '@/services/contact.service.js'

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
    const user = ref(null)
    const amount = ref('')

    const transfer = async () => {
      if (!user.value) {
        showErrorMsg('User data is not available.')
        return
      }

      const transferAmount = parseFloat(amount.value)
      if (transferAmount <= 0 || user.value.balance < transferAmount) {
        showErrorMsg('Please enter a valid transfer amount.')
        return
      }
      await userService.transferFunds(
        props.contactId,
        props.contactName,
        transferAmount
      )
      showSuccessMsg('The transfer succeeded')
      user.value = await userService.getUser()
      amount.value = ''
    }

    onMounted(async () => {
      user.value = await userService.getUser()
    })

    const formattedBalance = computed(() => {
      if (user.value.balance) {
        return `${user.value.balance} BitCoin`
      }
      return ''
    })

    return {
      user,
      amount,
      transfer,
      formattedBalance,
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
  margin-block-end: 10px;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: rgb(248, 173, 93);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: rgb(255, 132, 0);
}
</style>

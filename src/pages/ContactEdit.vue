<template>
  <form @submit.prevent="save" v-if="contact" class="contact-edit">
    <div class="contact-name">
      <label for="name">Name:</label>
      <input v-model="contact.name" type="text" />
    </div>

    <div class="contact-email">
      <label for="email">E-mail:</label>
      <input v-model="contact.email" type="text" />
    </div>

    <div class="contact-phone">
      <label for="phone">Phone:</label>
      <input v-model.number="contact.phone" type="text" />
    </div>

    <button>Save</button>
  </form>
</template>

<script>
import { contactService } from '@/services/contact.service.js'
import { showSuccessMsg, showErrorMsg } from '@/services/eventBus.service.js'

export default {
  data() {
    return {
      contact: contactService.getEmptyContact(),
    }
  },
  computed: {
    contactId() {
      return this.$route.params.id
    },
  },
  watch: {
    contactId() {
      this.loadContact()
    },
  },
  methods: {
    async save() {
      try {
        await contactService.save(this.contact)
        this.$router.push('/contact')
      } catch (err) {
        showErrorMsg('Cannot save contact')
      }
    },
    async loadContact() {
      try {
        const { contactId } = this
        this.contact = await contactService.getById(contactId)
      } catch (err) {
        console.log('err', err)
        showErrorMsg('Cannot load contact')
      }
    },
  },
  async created() {
    if (this.contactId) {
      this.loadContact()
    }
  },
}
</script>
<style lang="scss">
.contact-edit {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;

  input {
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 300px;
    margin-left: 10px;

    &:focus {
      outline: none;
      border-color: rgb(255, 132, 0);
      box-shadow: 0 0 5px rgb(255, 132, 0);
    }
  }

  button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background-color: rgb(248, 173, 93);
    color: white;
    font-weight: bold;
    cursor: pointer;
    margin-left: 45px;
    &:hover {
      background-color: rgb(255, 132, 0);
    }
  }
}
</style>

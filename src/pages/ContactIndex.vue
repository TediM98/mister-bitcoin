<template>
  <div class="contact-index main-layout">
    <h1>Contacts</h1>
    <RouterLink to="/contact/edit"><button>Add Contact</button></RouterLink>
    <ContactFilter @filter="onSetFilterBy" />
    <ContactList
      @remove="removeContact"
      v-if="contacts"
      :contacts="filteredContacts"
    />
  </div>
</template>

<script>
import { contactService } from '../services/contact.service.js'
import {
  eventBus,
  showErrorMsg,
  showSuccessMsg,
} from '../services/eventBus.service.js'
import ContactList from '../cmps/ContactList.vue'
import ContactFilter from '../cmps/ContactFilter.vue'

export default {
  data() {
    return {
      // contacts: null,
      filterBy: {},
    }
  },
  async created() {
    // this.contacts = await contactService.query()
    this.$store.dispatch({ type: 'loadContacts' })
  },
  components: { ContactList, ContactFilter },

  methods: {
    // async removeContact(contactId) {
    //   const msg = {
    //     txt: ' Contact ${contactId} removed...',
    //     type: 'success',
    //   }
    //   await contactService.remove(contactId)
    //   const idx = this.contacts.findIndex(
    //     (contact) => contact._id === contactId
    //   )
    //   this.contacts.splice(idx, 1)
    //   eventBus.emit('user-msg', msg)
    // },
    async removeContact(contactId) {
      try {
        this.$store.dispatch({ type: 'removeContact', contactId })
        showSuccessMsg('Contact has been removed')
      } catch (err) {
        showErrorMsg('Could not remove contact')
      }
    },
    onSetFilterBy(filterBy) {
      this.filterBy = filterBy
    },
  },
  computed: {
    filteredContacts() {
      const regex = new RegExp(this.filterBy.txt, 'i')
      return this.contacts.filter((contact) => regex.test(contact.name))
    },
    contacts() {
      return this.$store.getters.contacts
    },
  },
}
</script>

<style lang="scss" scoped></style>

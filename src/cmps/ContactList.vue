<template>
  <section class="contact-list">
    <ul class="clean-list">
      <li v-for="contact in contacts" :key="contact._id">
        <ContactPreview :contact="contact" />
        <section class="contact-actions">
          <button
            class="clean-btn action-item"
            @click.stop="remove(contact._id)"
          >
            <v-icon name="md-deleteoutline" />
          </button>
          <RouterLink class="action-item" :to="`/contact/${contact._id}`">
            <v-icon name="la-info-circle-solid" />
          </RouterLink>

          <RouterLink class="action-item" :to="`/contact/edit/${contact._id}`">
            <v-icon name="md-modeedit-outlined" />
          </RouterLink>
        </section>
      </li>
    </ul>
  </section>
</template>

<script>
import ContactPreview from '@/cmps/ContactPreview.vue'

export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  components: {
    ContactPreview,
  },
  methods: {
    remove(contactId) {
      this.$emit('remove', contactId)
    },
    // navigateToContact(id) {
    //   this.$router.push(`/contact/${id}`)
    // },
  },
}
</script>

<style lang="scss" scoped></style>

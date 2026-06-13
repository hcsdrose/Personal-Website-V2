<template>
  <v-container class="py-10" style="background:#fff;color:#000;">
    <h1 style="color:#000;">Contact</h1>
    <v-form>
      <v-text-field label="Name" required color="primary"></v-text-field>
      <v-text-field label="Email" required color="primary"></v-text-field>
      <v-textarea label="Message" required color="primary"></v-textarea>
      <v-btn color="primary" class="mt-4">Send</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
// Add any logic if needed
</script>

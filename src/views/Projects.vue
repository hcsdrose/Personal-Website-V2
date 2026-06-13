<template>
  <v-container class="py-10" style="background:#fff;color:#000;">
    <h1 style="color:#000;">Projects</h1>
    <v-row>
      <v-col cols="12" md="6" v-for="n in 2" :key="n">
        <v-card class="mb-4" style="background:#fff;color:#000;">
          <v-img src="https://placehold.co/600x300" height="200px" />
          <v-card-title style="color:#000;">Project {{ n }}</v-card-title>
          <v-card-text style="color:#000;">
            Description of project {{ n }}. Replace with real project details.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Add any logic if needed
</script>

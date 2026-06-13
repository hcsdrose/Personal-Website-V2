<template>
  <div style="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;">
    <v-empty-state>
      <template v-slot:headline>
        <span style="font-size:5rem;font-weight:800;line-height:1;" :style="{ color: isDark ? '#fff' : '#000' }">404</span>
      </template>
      <template v-slot:title>
        <span class="page-title" style="margin-bottom:0.5rem;" :style="{ color: isDark ? '#fff' : '#000' }">Page not found</span>
      </template>
      <template v-slot:text>
        <span style="font-size:0.9rem;" :style="{ color: isDark ? '#ccc' : '#555' }">The page you were looking for does not exist.</span>
      </template>
      <template v-slot:actions>
        <v-btn variant="outlined" :color="isDark ? 'white' : 'black'" :to="'/'">Go home</v-btn>
      </template>
    </v-empty-state>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isDark = ref(false);
let observer;

onMounted(() => {
  document.documentElement.style.overflow = 'hidden';
  isDark.value = document.body.classList.contains('dark-mode');
  observer = new MutationObserver(() => {
    isDark.value = document.body.classList.contains('dark-mode');
  });
  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
});

onBeforeUnmount(() => {
  document.documentElement.style.overflow = '';
  observer?.disconnect();
});
</script>

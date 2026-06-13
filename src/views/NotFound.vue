<template>
  <div style="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;">
    <v-empty-state>
      <template v-slot:headline>
        <span class="nf-headline">404</span>
      </template>
      <template v-slot:title>
        <span class="page-title nf-title">Page not found</span>
      </template>
      <template v-slot:text>
        <span class="nf-text">The page you were looking for does not exist.</span>
      </template>
      <template v-slot:actions>
        <router-link to="/" class="nf-btn">Go home</router-link>
      </template>
    </v-empty-state>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import { usePageMeta } from '../composables/usePageMeta';

usePageMeta({ title: '404 – Page Not Found | Christopher Rose' });

onMounted(() => {
  let el = document.querySelector('meta[name="robots"]');
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', 'robots');
    document.head.appendChild(el);
  }
  el.setAttribute('content', 'noindex, nofollow');
});

onMounted(() => {
  document.documentElement.style.overflow = 'hidden';
});

onBeforeUnmount(() => {
  document.documentElement.style.overflow = '';
});
</script>

<style scoped>
.nf-headline {
  display: block;
  font-size: 8rem;
  font-weight: 800;
  line-height: 1;
  background: linear-gradient(120deg, #aa3bff 0%, #ff3bac 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nf-title {
  display: block;
  margin-bottom: 0.5rem;
}

.nf-text {
  font-size: 0.9rem;
  color: #555;
}

.nf-btn {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.45rem 1.5rem;
  border-radius: 100px;
  background: linear-gradient(120deg, #aa3bff, #ff3bac);
  color: #fff !important;
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
}
</style>

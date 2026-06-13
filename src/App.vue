<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isBlankLayout = computed(() => route.meta.layout === 'blank');

const isDark = ref(false);

// Load theme preference from localStorage
onMounted(() => {
  const saved = localStorage.getItem('theme-dark');
  if (saved === 'true') {
    isDark.value = true;
    document.body.classList.add('dark-mode');
  }
});

function toggleTheme() {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme-dark', 'true');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme-dark', 'false');
  }
}
</script>

<template>
  <div class="site-wrapper">
    <header v-if="!isBlankLayout" class="site-header">
      <router-link to="/" class="site-title-link">
        <div class="site-title">Christopher Rose</div>
        <div class="site-subtitle">Educator & Executive</div>
      </router-link>
      <div class="site-header-divider"></div>
      <nav class="site-nav">
        <router-link to="/" class="site-nav-link">Home</router-link>
        <router-link to="/about" class="site-nav-link">About</router-link>
      </nav>
    </header>
    <main class="site-main">
      <router-view />
    </main>
    <footer v-if="!isBlankLayout" class="site-footer">
      <a href="https://github.com/hcsdrose" target="_blank" rel="noopener" class="site-footer-link">GitHub</a>
      <a href="https://www.linkedin.com/in/christopherrosein/" target="_blank" rel="noopener" class="site-footer-link">LinkedIn</a>
    </footer>
    <v-btn
      v-if="!isBlankLayout"
      icon
      size="large"
      color="black"
      style="position:fixed;bottom:32px;right:32px;z-index:1000;"
      @click="toggleTheme"
      :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      class="v-btn--fab"
    >
      <v-icon size="32" color="white" v-if="!isDark">mdi-weather-night</v-icon>
      <v-icon size="32" color="white" v-else>mdi-white-balance-sunny</v-icon>
    </v-btn>
  </div>
</template>

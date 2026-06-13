<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const transitioning = ref(false);

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
  document.body.classList.add('theme-transitioning');
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme-dark', 'true');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme-dark', 'false');
  }
  setTimeout(() => document.body.classList.remove('theme-transitioning'), 350);
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
    <div class="transition-bar" :class="{ active: transitioning }"></div>
    <main class="site-main">
      <router-view v-slot="{ Component }">
        <Transition
          name="page"
          mode="out-in"
          @before-leave="transitioning = true"
          @after-enter="transitioning = false"
        >
          <component :is="Component" :key="$route.path" />
        </Transition>
      </router-view>
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
      <span class="fab-icon-wrap">
        <Transition name="theme-icon">
          <v-icon size="28" color="white" :key="String(isDark)">
            {{ isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}
          </v-icon>
        </Transition>
      </span>
    </v-btn>
  </div>
</template>

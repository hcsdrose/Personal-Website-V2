<template>
  <div class="page-content home-hero">
<h1 class="page-hero-title">
      Experienced Educator Turned<br>
      <span class="home-accent-word">Tech Executive</span><br>
      with 15+ Years in Software Development
    </h1>
    <div class="home-chips">
      <span class="chip chip--filled">15+ Years</span>
      <span class="chip chip--accent">CPO &amp; Co-Founder</span>
      <span class="chip chip--outlined">K12 EdTech</span>
    </div>
    <p class="page-body home-bio">
      Currently the Chief Product Officer at
      <a href="https://www.abre.com" target="_blank" class="home-link">Abre</a>,
      I blend a passion for education with deep expertise in software development,
      driving innovative solutions that empower K12 schools and enhance learning outcomes.
    </p>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import { usePageMeta } from '../composables/usePageMeta';

const updateOverflow = () => {
  document.documentElement.style.overflowY = '';
  // visualViewport accounts for mobile browser chrome (address bar showing/hiding)
  const vh = window.visualViewport ? window.visualViewport.height : window.innerHeight;
  const bodyPaddingV = parseInt(getComputedStyle(document.body).paddingTop) +
                       parseInt(getComputedStyle(document.body).paddingBottom);
  document.documentElement.style.overflowY =
    document.documentElement.scrollHeight > vh + bodyPaddingV ? '' : 'hidden';
};

onMounted(() => {
  updateOverflow();
  // Re-check after fonts/layout settle — avoids locking scroll on underestimated scrollHeight
  setTimeout(updateOverflow, 150);
  window.addEventListener('resize', updateOverflow);
  window.visualViewport?.addEventListener('resize', updateOverflow);
});

onBeforeUnmount(() => {
  document.documentElement.style.overflowY = '';
  window.removeEventListener('resize', updateOverflow);
  window.visualViewport?.removeEventListener('resize', updateOverflow);
});

usePageMeta({
  title: 'Christopher Rose | Educator & Tech Executive',
  description: 'Christopher Rose, Chief Product Officer and Co-Founder at Abre. Experienced educator turned tech executive with 15+ years in software development, dedicated to transforming K12 education.',
  canonical: 'https://christopherrose.com/',
});
</script>

<style scoped>
.home-accent-word {
  background: linear-gradient(120deg, #aa3bff 0%, #ff3bac 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.home-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 1.75rem 0 2rem;
}

.chip {
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.4px;
  padding: 0.35rem 1rem;
  border-radius: 100px;
}

.chip--filled {
  background: #000;
  color: #fff;
}

.chip--accent {
  background: linear-gradient(120deg, #aa3bff, #ff3bac);
  color: #fff;
}

.chip--outlined {
  box-shadow: inset 0 0 0 2px #000;
  color: #000;
  background: transparent;
}

.home-bio {
  box-shadow: inset 3px 0 0 0 #aa3bff;
  padding-left: 1.25rem;
}

.home-link {
  color: #aa3bff !important;
  text-decoration: none;
  font-weight: 600;
  position: relative;
}

.home-link::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(120deg, #aa3bff, #ff3bac);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}

.home-link:hover::after {
  transform: scaleX(1);
}
</style>

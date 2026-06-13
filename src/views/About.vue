<template>
  <div class="page-content">
    <h1 class="page-title">About <span class="about-accent">Me</span></h1>
<p class="page-body about-bio">
      A former Math Education Teacher turned Chief Product Officer at <a href="https://www.abre.com" target="_blank" class="about-link">Abre</a>, Chris is dedicated to revolutionizing K12 educational technology. With experience teaching Algebra and Pre-Calculus, he understands the challenges educators face and is passionate about creating solutions that enhance efficiency and improve outcomes. As a district web developer and e-learning coordinator, Chris wrote the first line of code for what would become Abre, a platform that grew to serve all staff, students, and families in the district. Recognized for his technical expertise and empathetic approach, Chris excels in building strong, collaborative relationships with colleagues and clients. As a loving husband and father to a 9-year-old daughter and a 6-year-old son, he treasures the time spent with his family, making memories and enjoying life's simple pleasures.
    </p>

    <h2 class="section-heading">Experience <span class="about-accent">&amp; Education</span></h2>
    <v-timeline :side="isMobile ? 'end' : undefined" :density="isMobile ? 'compact' : 'default'">
      <v-timeline-item
        v-for="(item, index) in timelineItems"
        :key="item.id"
        :size="isMobile ? 'small' : 'large'"
      >
        <template v-if="!isMobile" v-slot:icon>
          <v-avatar :image="item.image || 'https://i.pravatar.cc/64'"></v-avatar>
        </template>
        <template v-if="!isMobile" v-slot:opposite>
          <span class="tl-dates">{{ item.dates }}</span>
        </template>
        <div class="tl-item" :class="{ 'tl-item--left': !isMobile && index % 2 !== 0 }">
          <div class="tl-org">{{ item.title }}</div>
          <div class="tl-role">{{ item.role }}</div>
          <div v-if="isMobile" class="tl-dates" style="margin-top:0.2rem;">{{ item.dates }}</div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { usePageMeta } from '../composables/usePageMeta';

usePageMeta({
  title: 'About | Christopher Rose',
  description: "Christopher Rose's journey from high school math teacher to Chief Product Officer at Abre — full experience and education history.",
  canonical: 'https://christopherrose.com/about',
});
import abreLogo from '../assets/abre.png';
import hamiltonLogo from '../assets/hamilton_city_school_district.png';
import hamiltonHighLogo from '../assets/hamilton_high.png';
import unkLogo from '../assets/university_nebraska_kearney.png';
import miamiLogo from '../assets/miami_university.png';

const isMobile = ref(false);
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 600;
};
onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile);
});

const timelineItems = ref([
  { id: 1,  title: 'Abre',                          role: 'Chief Product Officer, Co-Founder, Board',          dates: 'May 2024 - Present',  image: abreLogo },
  { id: 2,  title: 'Abre',                          role: 'SVP of Product & Technology, Co-Founder, Board',    dates: 'Dec 2022 - May 2024', image: abreLogo },
  { id: 3,  title: 'Abre',                          role: 'VP Product, Co-Founder, Board',                     dates: 'Aug 2017 - Dec 2022', image: abreLogo },
  { id: 4,  title: 'Hamilton City School District', role: 'Assistant Director of Technology',                   dates: 'Aug 2017 - Oct 2017', image: hamiltonLogo },
  { id: 5,  title: 'Hamilton City School District', role: 'Web Developer & eLearning Coordinator',              dates: 'Jun 2015 - Jul 2017', image: hamiltonLogo },
  { id: 6,  title: 'University of Nebraska at Kearney', role: "Master's in Science Educational Technology",    dates: '2014 - 2016',         image: unkLogo },
  { id: 7,  title: 'Hamilton High School',          role: 'High School Mathematics Teacher',                    dates: 'Aug 2011 - Jun 2015', image: hamiltonHighLogo },
  { id: 8,  title: 'Hamilton Freshman School',      role: 'Freshman Mathematics Teacher',                       dates: 'Aug 2010 - Aug 2011', image: hamiltonHighLogo },
  { id: 9,  title: 'Miami University',              role: "Bachelor's in Mathematics Teacher Education",        dates: '2004 - 2008',         image: miamiLogo },
]);
</script>

<style scoped>
.about-accent {
  background: linear-gradient(120deg, #aa3bff 0%, #ff3bac 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-bio {
  box-shadow: inset 3px 0 0 0 #aa3bff;
  padding-left: 1.25rem;
}

.about-link {
  color: #aa3bff !important;
  text-decoration: none;
  font-weight: 600;
  position: relative;
}

.about-link::after {
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

.about-link:hover::after {
  transform: scaleX(1);
}

.tl-item {
  padding: 0.25rem 0 1.5rem;
  text-align: left;
}
.tl-item--left {
  text-align: right;
}

.tl-dates {
  font-family: 'Rubik', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #999;
}

.tl-org {
  font-family: 'Rubik', sans-serif;
  font-weight: 800;
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #000;
  line-height: 1.2;
  margin-top: 0.2rem;
}

.tl-role {
  font-family: 'Rubik', sans-serif;
  font-size: clamp(0.85rem, 1.5vw, 1rem);
  color: #555;
  margin-top: 0.25rem;
}
</style>

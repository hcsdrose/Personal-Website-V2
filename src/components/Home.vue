<template>
  <div class="homepage-content">
    <h1>Experienced Educator Turned Tech Executive with 15+ Years in Software Development</h1>
    <p>Currently the Chief Product Officer at <a href="https://abre.com/" target="_blank" rel="noopener" class="homepage-link">Abre</a>, I blend a passion for education with deep expertise in software development, driving innovative solutions that empower K12 schools and enhance learning outcomes.</p>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
h1 {
  font-size: 3.5em;
  line-height: 1.2em;
}

.homepage-content {
  padding: 2rem 0;
  font-family: 'Rubik', Arial, Helvetica, sans-serif;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.homepage-content p {
  font-size: 1.5em;
}

.homepage-link {
  color: #000;
  text-decoration: underline;
}
.homepage-link:hover {
  color: #555;
}

h2 {
  color: #666;
  margin-top: -0.3rem;
}
h2 {
  color: #666;
  margin-top: 0;
}
h2 {
  color: #666;
}
</style>

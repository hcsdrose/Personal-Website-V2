<template>
  <div class="about-content">
    <h1>About Me</h1>
    <p>
      A former Math Education Teacher turned Chief Product Officer at Abre, Chris is dedicated to revolutionizing K12 educational technology. With experience teaching Algebra and Pre-Calculus, he understands the challenges educators face and is passionate about creating solutions that enhance efficiency and improve outcomes. As a district web developer and e-learning coordinator, Chris wrote the first line of code for what would become Abre, a platform that grew to serve all staff, students, and families in the district. Recognized for his technical expertise and empathetic approach, Chris excels in building strong, collaborative relationships with colleagues and clients. As a loving husband and father to a 9-year-old daughter and a 6-year-old son, he treasures the time spent with his family, making memories and enjoying life's simple pleasures.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style scoped>
.about-content {
  padding: 2rem 0;
  font-family: 'Rubik', Arial, Helvetica, sans-serif;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.about-content h1 {
  font-size: 3.5em;
  line-height: 1.2em;
}

.about-content p {
  font-size: 1.5em;
}
</style>

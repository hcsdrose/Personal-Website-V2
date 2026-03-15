<template>
  <div class="about-content">
    <h1>About Me</h1>
    <p>
      A former Math Education Teacher turned Chief Product Officer at Abre, Chris is dedicated to revolutionizing K12 educational technology. With experience teaching Algebra and Pre-Calculus, he understands the challenges educators face and is passionate about creating solutions that enhance efficiency and improve outcomes. As a district web developer and e-learning coordinator, Chris wrote the first line of code for what would become Abre, a platform that grew to serve all staff, students, and families in the district. Recognized for his technical expertise and empathetic approach, Chris excels in building strong, collaborative relationships with colleagues and clients. As a loving husband and father to a 9-year-old daughter and a 6-year-old son, he treasures the time spent with his family, making memories and enjoying life's simple pleasures.
    </p>

    <p class="post_title">Experience</p>
    <div class="company-info">
      <img src="/media/logos/abre.png" alt="Abre" class="company-logo">
      <div class="timeline">
        <div class="timeline-item">
          <h3>Chief Product Officer, Co-Founder, Board</h3>
          <p>Abre</p>
          <p>May 2024 - Present</p>
        </div>
        <div class="timeline-item">
          <h3>SVP of Product & Technology, Co-Founder, Board</h3>
          <p>Abre</p>
          <p>Dec 2022 - May 2024</p>
        </div>
        <div class="timeline-item">
          <h3>VP Product, Co-Founder, Board</h3>
          <p>Abre</p>
          <p>Aug 2017 - Dec 2022</p>
        </div>
      </div>
    </div>
    <div class="company-info">
      <img src="/media/logos/hamilton_city_school_district.png" alt="Hamilton City School District" class="company-logo">
      <div class="timeline">
        <div class="timeline-item">
          <h3>Assistant Director of Technology</h3>
          <p>Hamilton City School District</p>
          <p>Aug 2017 - Oct 2017</p>
        </div>
        <div class="timeline-item">
          <h3>Web Developer & eLearning Coordinator</h3>
          <p>Hamilton City School District</p>
          <p>Jun 2015 - Jul 2017</p>
        </div>
      </div>
    </div>
    <div class="company-info">
      <img src="/media/logos/hamilton_high.png" alt="Hamilton High School" class="company-logo">
      <div class="timeline">
        <div class="timeline-item">
          <h3>High School Mathematics Teacher</h3>
          <p>Hamilton High School</p>
          <p>Aug 2011 - Jun 2015</p>
        </div>
        <div class="timeline-item">
          <h3>Freshman Mathematics Teacher</h3>
          <p>Hamilton Freshman School</p>
          <p>Aug 2010 - Aug 2011</p>
        </div>
      </div>
    </div>

    <p class="post_title">Education</p>
    <div class="company-info">
      <img src="/media/logos/university_nebraska_kearney.png" alt="University of Nebraska at Kearney" class="company-logo">
      <div class="timeline">
        <div class="timeline-item">
          <h3>Master's in Science Educational Technology</h3>
          <p>University of Nebraska Kearny</p>
          <p>2014 - 2016</p>
        </div>
      </div>
    </div>
    <div class="company-info">
      <img src="/media/logos/miami_university.png" alt="Miami University" class="company-logo">
      <div class="timeline">
        <div class="timeline-item">
          <h3>Bachelor's in Mathematics Teacher Education</h3>
          <p>Miami University</p>
          <p>2004 - 2008</p>
        </div>
      </div>
    </div>
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
.post_title {
  font-size: 2em;
  font-weight: 600;
  margin-top: 2.5rem;
  margin-bottom: 1.2rem;
  color: #222;
  letter-spacing: 1px;
}
.company-info {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.2rem;
  width: 100%;
  max-width: 700px;
}
.company-logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-right: 20px;
  background: #fff;
}
.timeline {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
.timeline-item {
  margin-bottom: 0.3rem;
}
.timeline-item h3 {
  font-size: 1.1em;
  font-weight: 600;
  margin: 0 0 0.2em 0;
  color: #111;
}
.timeline-item p {
  margin: 0;
  font-size: 1em;
  color: #444;
}
@media (max-width: 600px) {
  .about-content h1 {
    font-size: 2em;
  }
  .about-content p {
    font-size: 1em;
  }
  .company-info {
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }
  .company-logo {
    margin-bottom: 0.7rem;
    margin-right: 0;
  }
  .timeline-item {
    padding: 0.7rem 0.7rem;
  }
}
</style>

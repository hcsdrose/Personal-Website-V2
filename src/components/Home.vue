
<template>
  <div class="homepage-plain">
    <h1>Christopher Rose</h1>
    <h2>Educator & Executive</h2>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.homepage-plain {
  background: #fff;
  color: #000;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Rubik', Arial, Helvetica, sans-serif;
}
h1, h2 {
  color: #000;
  margin: 0;
  font-family: 'Rubik', Arial, Helvetica, sans-serif;
}
h1 {
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}
h2 {
  font-size: 1.5rem;
  font-weight: 500;
  color: #666;
  letter-spacing: -1px;
}
</style>

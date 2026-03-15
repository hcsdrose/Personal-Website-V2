<template>
  <div id="app" class="app-flex">
    <nav class="navbar">
      <div class="nav-left">
        <div class="site-link" @click="goHome">
          <span class="site-title">Christopher Rose</span>
          <span class="site-subtitle">Educator & Executive</span>
        </div>
      </div>
      <div class="nav-right">
        <router-link to="/" exact-active-class="active">Home</router-link>
        <router-link to="/about" exact-active-class="active">About</router-link>
      </div>
    </nav>
    <div class="main-content">
      <router-view />
    </div>
    <footer class="footer-bar">
      <div class="footer-left">
        <a href="https://github.com/hcsdrose" target="_blank" rel="noopener" class="footer-link">GitHub</a>
        <a href="https://www.linkedin.com/in/christopherrose/" target="_blank" rel="noopener" class="footer-link">LinkedIn</a>
        <a href="https://x.com/hcsdrose" target="_blank" rel="noopener" class="footer-link">X</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goHome() {
      this.$router.push('/');
    }
  }
};
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background: #000;
  border-bottom: 1px solid #222;
  font-family: 'Rubik', Arial, Helvetica, sans-serif;
  width: 100%;
  box-sizing: border-box;
}

/* Footer styles */
.footer-bar {
  display: flex;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background: #fff;
  border-top: 1px solid #ccc;
  font-family: 'Rubik', Arial, Helvetica, sans-serif;
  width: 100%;
  box-sizing: border-box;
  margin-top: 3rem;
}
.footer-left {
  display: flex;
  gap: 1.5rem;
}
.footer-link {
  color: #000;
  text-decoration: none;
  font-size: 1.1em;
  font-family: 'Rubik', Arial, Helvetica, sans-serif;
  font-weight: 500;
  transition: color 0.2s;
}
.footer-link:hover {
  color: #555;
}
.nav-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.site-link {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  user-select: none;
}
.site-title, .site-subtitle {
  display: block;
  width: 100%;
}
.site-title {
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
  line-height: 1.1;
  margin-bottom: 0;
}
.site-subtitle {
  font-size: 1em;
  color: #ccc;
  line-height: 1.1;
  margin-top: 0;
}
.nav-right {
  display: flex;
  gap: 1.5rem;
}
.nav-right a {
  color: #fff;
  text-decoration: none;
  font-size: 1.1em;
  font-family: 'Rubik', Arial, Helvetica, sans-serif;
  font-weight: 500;
  transition: color 0.2s;
}
.nav-right a.active {
  color: #fff;
  border-bottom: 2px solid #fff;
}
.nav-right a:hover {
  color: #fff;
}
/* App flex layout for full height */
#app.app-flex {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Rubik', Arial, Helvetica, sans-serif;
  color: #000;
  background: #fff;
  margin-top: 0;
}
.main-content {
  flex: 1 0 auto;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
}
</style>

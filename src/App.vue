<template>
  <div id="app" class="app-flex">
    <nav class="navbar">
      <div class="nav-left">
        <div class="site-link" @click="goHome">
          <span class="site-title">Christopher Rose</span>
          <span class="site-subtitle">Educator & Executive</span>
        </div>
      </div>
      <div class="nav-right desktop-nav">
        <router-link to="/" exact-active-class="active">Home</router-link>
        <router-link to="/about" exact-active-class="active">About</router-link>
      </div>
      <div class="mobile-menu-icon" @click="showMobileMenu = true">
        <svg width="32" height="32" viewBox="0 0 24 24"><path fill="#fff" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z"/></svg>
      </div>
      <div v-if="showMobileMenu" class="mobile-menu-overlay">
        <div class="mobile-menu-content">
          <button class="close-btn" @click="showMobileMenu = false">&times;</button>
          <router-link to="/" @click.native="closeMobileMenu">Home</router-link>
          <router-link to="/about" @click.native="closeMobileMenu">About</router-link>
        </div>
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
  data() {
    return {
      showMobileMenu: false
    };
  },
  methods: {
    goHome() {
      this.$router.push('/');
    },
    closeMobileMenu() {
      this.showMobileMenu = false;
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
/* Desktop nav */
.nav-right.desktop-nav {
  display: flex;
  gap: 1.5rem;
}
.nav-right.desktop-nav a {
  color: #fff;
  text-decoration: none;
  font-size: 1.1em;
  font-family: 'Rubik', Arial, Helvetica, sans-serif;
  font-weight: 500;
  transition: color 0.2s;
}
.nav-right.desktop-nav a.active {
  color: #fff;
  border-bottom: 2px solid #fff;
}
.nav-right.desktop-nav a:hover {
  color: #fff;
}

/* Mobile menu icon */
.mobile-menu-icon {
  display: none;
  cursor: pointer;
  margin-left: 1rem;
}

/* Mobile menu overlay */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.95);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mobile-menu-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}
.mobile-menu-content .close-btn {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: #fff;
  font-size: 2.5rem;
  cursor: pointer;
}
.mobile-menu-content a {
  color: #fff;
  font-size: 2.2em;
  text-decoration: none;
  font-family: 'Rubik', Arial, Helvetica, sans-serif;
  font-weight: 600;
  transition: color 0.2s;
}
.mobile-menu-content a.active {
  border-bottom: 2px solid #fff;
}
.mobile-menu-content a:hover {
  color: #ccc;
}

@media (max-width: 800px) {
  .nav-right.desktop-nav {
    display: none;
  }
  .mobile-menu-icon {
    display: block;
  }
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

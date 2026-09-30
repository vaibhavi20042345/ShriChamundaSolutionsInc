<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const scrolled = ref(false)

const handleScroll = () => { scrolled.value = window.scrollY > 50 }
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const scrollTo = (id: string) => {
  menuOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <nav :class="['navbar', { scrolled }]">
    <div class="nav-inner">
      <div class="brand" @click="scrollTo('home')">
        <img src="/logo.png" alt="Shri Chamunda Solutions Inc." />
      </div>
      <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
      <ul :class="['nav-links', { open: menuOpen }]">
        <li @click="scrollTo('home')">Home</li>
        <li @click="scrollTo('about')">About</li>
        <li @click="scrollTo('services')">Our Services</li>
        <li @click="scrollTo('contact')">Contact Us</li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.97);
  border-bottom: 3px solid #c8860a;
  transition: box-shadow 0.3s;
}
.navbar.scrolled { box-shadow: 0 2px 16px rgba(0,0,0,0.15); }
.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.brand img { height: 52px; cursor: pointer; }
.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0; padding: 0;
}
.nav-links li {
  color: #3b2a1a;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: color 0.2s;
}
.nav-links li:hover { color: #c8860a; }
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.hamburger span {
  display: block;
  width: 26px; height: 2px;
  background: #3b2a1a;
  border-radius: 2px;
}
@media (max-width: 768px) {
  .hamburger { display: flex; }
  .nav-links {
    display: none;
    position: absolute;
    top: 70px; left: 0; right: 0;
    background: rgba(255,255,255,0.98);
    flex-direction: column;
    padding: 1rem 1.5rem 1.5rem;
    gap: 1.2rem;
    border-bottom: 2px solid #c8860a;
  }
  .nav-links.open { display: flex; }
}
</style>

<script setup lang="ts">
const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
</script>

<template>
  <section id="home" class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <img src="/logo.png" alt="Shri Chamunda Solutions Inc." class="hero-logo" />
      <h1>Expert Carpentry.<br><span>Built to Last.</span></h1>
      <p>Creating Better Solutions, Building Stronger Futures.</p>
      <div class="hero-btns">
        <button class="btn-primary" @click="scrollTo('services')">Our Services</button>
        <button class="btn-outline" @click="scrollTo('contact')">Get a Quote</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  background:
    linear-gradient(rgba(20, 10, 2, 0.45), rgba(20, 10, 2, 0.45)),
    url('https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1600&q=80') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 40%, rgba(20,8,2,0.5) 100%);
}
.hero-content {
  position: relative;
  text-align: center;
  padding: 2rem 1.5rem;
  max-width: 800px;
}
.hero-logo {
  height: 130px;
  margin-bottom: 1.5rem;
  background: rgba(255,255,255,0.92);
  border-radius: 12px;
  padding: 10px 18px;
}
h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.4rem);
  color: #fff;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 1rem;
}
h1 span { color: #c8860a; }
p {
  font-family: 'Open Sans', sans-serif;
  color: #e8d8c0;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.7;
}
.hero-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
.btn-primary {
  background: #c8860a;
  color: #fff;
  border: none;
  padding: 0.9rem 2.2rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}
.btn-primary:hover { background: #a86e08; transform: translateY(-2px); }
.btn-outline {
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
  padding: 0.9rem 2.2rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-outline:hover { background: #fff; color: #3b2a1a; transform: translateY(-2px); }
</style>

<template>
  <section id="about" class="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-img">
          <img src="https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=700&q=80" alt="Carpentry work" />
        </div>
        <div class="about-text">
          <div class="section-label">Who We Are</div>
          <h2>Shri Chamunda Solutions Inc.</h2>
          <p>
            We are a Canadian carpentry company delivering reliable, high-quality residential carpentry,
            repair, installation, and finishing services. With a commitment to craftsmanship and precision,
            we turn your ideas into beautifully built results.
          </p>
          <p>
            From doors and window frames to flooring, trim, and custom woodwork — every project is handled
            with care, skill, and attention to detail. We plan thoroughly, source quality materials, and
            deliver work that is built to last.
          </p>
          <div class="about-stats">
            <div class="stat">
              <strong>📍</strong>
              <span>Proudly serving Canada</span>
            </div>
            <div class="stat">
              <strong>📅</strong>
              <span>Founded 2024</span>
            </div>
            <div class="stat">
              <strong>📞</strong>
              <a href="tel:7059754762">(705) 975-4762</a>
            </div>
          </div>
        </div>
      </div>
      <div class="values">
        <div class="value" v-for="v in values" :key="v.label">
          <span>{{ v.icon }}</span>
          <strong>{{ v.label }}</strong>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const values = [
  { icon: '✅', label: 'Quality' },
  { icon: '🤝', label: 'Integrity' },
  { icon: '💡', label: 'Innovation' },
  { icon: '🔨', label: 'Craftsmanship' },
]
</script>

<style scoped>
.about {
  padding: 6rem 1.5rem;
  background: #fdf8f2;
}
.container { max-width: 1100px; margin: 0 auto; }
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 3rem;
}
.about-img img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(60,30,5,0.18);
  object-fit: cover;
  height: 420px;
}
.section-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #c8860a;
  margin-bottom: 0.5rem;
}
h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  color: #3b2a1a;
  font-weight: 700;
  margin-bottom: 1.2rem;
}
p {
  font-family: 'Open Sans', sans-serif;
  color: #5a4030;
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 1rem;
}
.about-stats {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 1.5rem;
}
.stat {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-family: 'Open Sans', sans-serif;
  color: #5a4030;
  font-size: 0.95rem;
}
.stat a {
  color: #c8860a;
  text-decoration: none;
  font-weight: 600;
}
.values {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 2rem;
  border-top: 1px solid #e8d8c0;
}
.value {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #3b2a1a;
  color: #c8860a;
  padding: 0.65rem 1.5rem;
  border-radius: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
}
@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; gap: 2rem; }
  .about-img img { height: 260px; }
}
</style>

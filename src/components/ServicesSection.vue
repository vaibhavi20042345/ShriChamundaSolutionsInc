<template>
  <section id="services" class="services">
    <div class="container">
      <img src="/logo.png" alt="Shri Chamunda Solutions Inc." class="services-logo" />
      <div class="section-label">What We Do</div>
      <h2>Handyman & Woodwork Services</h2>
      <div class="badges">
        <span>✅ Quality Work</span>
        <span>🤝 Reliable</span>
        <span>💰 Affordable</span>
        <span>🏠 Your Home. Our Priority.</span>
      </div>

      <!-- Our Services -->
      <div class="block-title">Our Services</div>
      <div class="services-grid">
        <div class="service-card" v-for="s in services" :key="s.label">
          <span class="check" v-html="s.icon"></span>
          <p>{{ s.label }}</p>
        </div>
      </div>

      <!-- Custom Furniture -->
      <div class="custom-section">
        <div class="custom-left">
          <div class="block-title">Custom Wooden Furniture</div>
          <p class="custom-desc">Have an idea? We can build custom wooden beds, coffee tables, shelves and more according to your space and requirements.</p>
          <div class="custom-tags">
            <span v-for="t in customTags" :key="t">{{ t }}</span>
          </div>
          <div class="custom-items">
            <div v-for="item in customItems" :key="item.label" class="custom-item">
              <span>{{ item.icon }}</span>
              <strong>{{ item.label }}</strong>
            </div>
          </div>
        </div>
        <div class="custom-right">
          <div class="idea-box">
            <div class="idea-top">Your Idea</div>
            <div class="idea-arrow">→</div>
            <div class="idea-bottom">We Build It!</div>
          </div>
        </div>
      </div>

      <!-- Bottom tagline -->
      <div class="tagline-bar">
        <span>🏠 Residential Services</span>
        <span>⏰ On-Time</span>
        <span>💪 Committed & Dependable</span>
        <span class="highlight">Small Repairs. Big Difference.</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  { icon: '🚪', label: 'Door Replacement & Installation' },
  { icon: '🍳', label: 'Kitchen Cabinet Maintenance & Repairs' },
  { icon: '🪜', label: 'Drawer Channel Replacement' },
  { icon: '🚪', label: 'Closet Door Replacement' },
  { icon: '🔐', label: 'Door Lock Installation' },
  { icon: '<img src="/fence.png" class="icon-img" />', label: 'Fence Installation' },
  { icon: '🪑', label: 'Furniture Assembly' },
  { icon: '🗄️', label: 'Garage & Closet Shelving' },
  { icon: '🪵', label: 'General Woodwork & Repairs' },
  { icon: '🔨', label: 'Any Other Work Related to Wood' },
]

const customTags = ['Custom Designs', 'Strong & Durable', 'High Quality Finish']

const customItems = [
  { icon: '🛏️', label: 'Custom Beds' },
  { icon: '☕', label: 'Coffee Tables' },
  { icon: '🍳', label: 'Kitchen Cabinets' },
  { icon: '🚪', label: 'Closet Shelves' },
  { icon: '<img src="/fence.png" class="icon-img" />', label: 'Fence Installation' },
]
</script>

<style scoped>
.services {
  padding: 6rem 1.5rem;
  background: #3b2a1a;
}
.container { max-width: 1100px; margin: 0 auto; }

.services-logo {
  height: 70px;
  margin-bottom: 1.5rem;
  display: block;
  background: rgba(255,255,255,0.92);
  border-radius: 10px;
  padding: 8px 16px;
}
.section-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #c8860a;
  margin-bottom: 0.4rem;
}
h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  color: #fff;
  font-weight: 700;
  margin-bottom: 1.2rem;
}
.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-bottom: 2.5rem;
}
.badges span {
  background: rgba(200,134,10,0.15);
  border: 1px solid rgba(200,134,10,0.4);
  color: #e8c87a;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.4rem 1rem;
  border-radius: 50px;
}
.block-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #c8860a;
  margin-bottom: 1.2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(200,134,10,0.3);
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
  margin-bottom: 3rem;
}
.service-card {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(200,134,10,0.2);
  border-radius: 8px;
  padding: 1rem 1.2rem;
  transition: transform 0.2s, border-color 0.2s, background 0.2s;
}
.service-card:hover {
  transform: translateY(-3px);
  border-color: #c8860a;
  background: rgba(200,134,10,0.1);
}
.check { font-size: 1.8rem; flex-shrink: 0; }
.icon-img { width: 1.8rem; height: 1.8rem; object-fit: contain; filter: invert(1); }
.service-card p {
  font-family: 'Open Sans', sans-serif;
  color: #e8d8c0;
  font-size: 0.95rem;
  margin: 0;
  line-height: 1.4;
}

/* Custom Furniture */
.custom-section {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2.5rem;
  align-items: center;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(200,134,10,0.25);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2.5rem;
}
.custom-desc {
  font-family: 'Open Sans', sans-serif;
  color: #c8b090;
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1.2rem;
}
.custom-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
}
.custom-tags span {
  background: #c8860a;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.3rem 0.9rem;
  border-radius: 50px;
}
.custom-items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}
.custom-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255,255,255,0.07);
  border-radius: 6px;
  padding: 0.5rem 0.9rem;
}
.custom-item strong {
  font-family: 'Montserrat', sans-serif;
  color: #e8d8c0;
  font-size: 0.85rem;
}
.idea-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: #c8860a;
  border-radius: 12px;
  padding: 1.5rem 2rem;
  text-align: center;
  min-width: 140px;
}
.idea-top, .idea-bottom {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #fff;
  font-size: 1rem;
}
.idea-arrow {
  font-size: 1.8rem;
  color: #fff;
  font-weight: 700;
}

/* Tagline bar */
.tagline-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255,0.05);
  border-radius: 8px;
  padding: 1.2rem 1.5rem;
  border: 1px solid rgba(200,134,10,0.2);
}
.tagline-bar span {
  font-family: 'Montserrat', sans-serif;
  color: #c8b090;
  font-size: 0.9rem;
  font-weight: 600;
}
.tagline-bar .highlight {
  color: #c8860a;
  font-size: 1rem;
  font-weight: 700;
}

@media (max-width: 768px) {
  .custom-section { grid-template-columns: 1fr; }
  .idea-box { flex-direction: row; min-width: unset; padding: 1rem 1.5rem; }
  .idea-arrow { transform: rotate(90deg); }
}
</style>

<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-label">Get In Touch</div>
      <h2>Contact Us</h2>
      <div class="contact-grid">
        <div class="contact-info">
          <p class="tagline">
            Ready to start your carpentry project? Reach out for a free consultation or quote — we'd love to help.
          </p>
          <div class="info-item">
            <span>📞</span>
            <div>
              <strong>Phone</strong>
              <a href="tel:7055426023">(705) 542-6023</a>
            </div>
          </div>
          <div class="info-item">
            <span>📍</span>
            <div>
              <strong>Location</strong>
              <p>Proudly serving Canada 🍁</p>
            </div>
          </div>
          <div class="info-item">
            <span>🏢</span>
            <div>
              <strong>Industry</strong>
              <p>Carpentry & Business Services</p>
            </div>
          </div>
          <div class="info-item">
            <span>💼</span>
            <div>
              <strong>LinkedIn</strong>
              <a href="https://www.linkedin.com/company/shri-chamunda-solutions-inc/" target="_blank" rel="noopener">Shri Chamunda Solutions Inc.</a>
            </div>
          </div>
        </div>
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <input type="text" placeholder="Your Name" v-model="form.name" required />
          </div>
          <div class="form-group">
            <input type="email" placeholder="Your Email" v-model="form.email" required />
          </div>
          <div class="form-group">
            <input type="text" placeholder="Subject" v-model="form.subject" />
          </div>
          <div class="form-group">
            <textarea placeholder="Describe your project..." v-model="form.message" rows="5" required></textarea>
          </div>
          <button type="submit" class="btn-submit">Send Message</button>
          <p v-if="sent" class="success-msg">✅ Thank you! We'll get back to you soon.</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({ name: '', email: '', subject: '', message: '' })
const sent = ref(false)

const handleSubmit = () => {
  sent.value = true
  form.value = { name: '', email: '', subject: '', message: '' }
  setTimeout(() => { sent.value = false }, 4000)
}
</script>

<style scoped>
.contact {
  padding: 6rem 1.5rem;
  background: #fdf8f2;
}
.container { max-width: 1100px; margin: 0 auto; }
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
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  color: #3b2a1a;
  font-weight: 700;
  margin-bottom: 2.5rem;
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 3rem;
}
.tagline {
  font-family: 'Open Sans', sans-serif;
  color: #5a4030;
  line-height: 1.7;
  margin-bottom: 2rem;
}
.info-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}
.info-item strong {
  font-family: 'Montserrat', sans-serif;
  color: #3b2a1a;
  font-size: 0.9rem;
  display: block;
}
.info-item a, .info-item p {
  font-family: 'Open Sans', sans-serif;
  color: #5a4030;
  font-size: 0.95rem;
  text-decoration: none;
  margin: 0;
}
.info-item a:hover { color: #c8860a; }
.contact-form { display: flex; flex-direction: column; gap: 1rem; }
.form-group input, .form-group textarea {
  width: 100%;
  padding: 0.85rem 1rem;
  border: 1px solid #d8c8b0;
  border-radius: 4px;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.95rem;
  color: #3b2a1a;
  background: #fff;
  transition: border-color 0.2s;
  box-sizing: border-box;
}
.form-group input:focus, .form-group textarea:focus {
  outline: none;
  border-color: #c8860a;
}
.btn-submit {
  background: #c8860a;
  color: #fff;
  border: none;
  padding: 0.9rem 2rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  align-self: flex-start;
}
.btn-submit:hover { background: #a86e08; transform: translateY(-2px); }
.success-msg {
  font-family: 'Open Sans', sans-serif;
  color: #2e7d32;
  font-size: 0.95rem;
  margin: 0;
}
@media (max-width: 768px) {
  .contact-grid { grid-template-columns: 1fr; }
}
</style>

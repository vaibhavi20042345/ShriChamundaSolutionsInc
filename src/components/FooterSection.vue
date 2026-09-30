<template>
  <footer class="footer">
    <div class="footer-inner">
      <img src="/logo.png" alt="Shri Chamunda Solutions Inc." class="footer-logo" />
      <p>Expert Carpentry. Built to Last.</p>
      <p class="copy">© {{ new Date().getFullYear() }} Shri Chamunda Solutions Inc. All rights reserved. | Proudly serving Canada 🍁</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #1e0f05;
  padding: 2.5rem 1.5rem;
  text-align: center;
}
.footer-logo {
  height: 60px;
  margin-bottom: 0.8rem;
  background: rgba(255,255,255,0.92);
  border-radius: 10px;
  padding: 7px 16px;
}
p {
  font-family: 'Open Sans', sans-serif;
  color: #c8b090;
  font-size: 0.95rem;
  margin: 0.3rem 0;
}
.copy { font-size: 0.82rem; color: #7a5a3a; margin-top: 0.8rem; }
</style>

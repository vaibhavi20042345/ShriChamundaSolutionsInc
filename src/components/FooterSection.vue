<template>
  <footer class="footer">
    <div class="footer-inner">
      <img src="/logo.png" alt="Shri Chamunda Solutions Inc." class="footer-logo" />
      <p>Expert Carpentry. Built to Last.</p>
      <p>Creating Better Solutions, Building Stronger Futures.</p>
      <div class="social">
        <a href="mailto:scsolutionsinc@outlook.com">✉️ scsolutionsinc@outlook.com</a>
        <a href="https://www.linkedin.com/company/shri-chamunda-solutions-inc/" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#c8860a"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          LinkedIn
        </a>
      </div>
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
.social {
  margin: 0.8rem 0;
}
.social a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #c8860a;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  border: 1px solid rgba(200,134,10,0.4);
  padding: 0.4rem 1rem;
  border-radius: 50px;
  transition: background 0.2s;
}
.social a:hover { background: rgba(200,134,10,0.15); }
p {
  font-family: 'Open Sans', sans-serif;
  color: #c8b090;
  font-size: 0.95rem;
  margin: 0.3rem 0;
}
.copy { font-size: 0.82rem; color: #7a5a3a; margin-top: 0.8rem; }
</style>

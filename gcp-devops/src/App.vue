<template>
  <div class="container">
    <header class="header">
      <h1>🚀 Google Cloud DevOps</h1>
      <p>Full Stack Infrastructure & CI/CD with K3s</p>
    </header>

    <main class="main">
      <section class="architecture">
        <h2>Architecture Overview</h2>
        <div class="grid">
          <div class="card">
            <div class="icon">🏗️</div>
            <h3>GCP Infrastructure</h3>
            <p>Google Cloud Platform with Compute Engine instances and networking</p>
          </div>

          <div class="card">
            <div class="icon">🐳</div>
            <h3>Docker</h3>
            <p>Multi-stage containerization for optimized Vue.js applications</p>
          </div>

          <div class="card">
            <div class="icon">☸️</div>
            <h3>K3s Kubernetes</h3>
            <p>Lightweight Kubernetes distribution for production deployments</p>
          </div>

          <div class="card">
            <div class="icon">🔄</div>
            <h3>CI/CD Pipeline</h3>
            <p>GitHub Actions with self-hosted runners for automated deployments</p>
          </div>

          <div class="card">
            <div class="icon">🎯</div>
            <h3>Terraform IaC</h3>
            <p>Infrastructure as Code for repeatable and version-controlled setup</p>
          </div>

          <div class="card">
            <div class="icon">⚙️</div>
            <h3>Ansible Automation</h3>
            <p>Configuration management for infrastructure provisioning</p>
          </div>
        </div>
      </section>

      <section class="stack">
        <h2>Tech Stack</h2>
        <ul>
          <li><strong>Frontend:</strong> Vue.js 3 + Vite</li>
          <li><strong>Server:</strong> Nginx with Gzip compression</li>
          <li><strong>Container:</strong> Docker with multi-stage builds</li>
          <li><strong>Orchestration:</strong> K3s Kubernetes</li>
          <li><strong>IaC:</strong> Terraform for GCP</li>
          <li><strong>Config:</strong> Ansible playbooks</li>
          <li><strong>CI/CD:</strong> GitHub Actions + GHCR</li>
          <li><strong>Registry:</strong> GitHub Container Registry</li>
        </ul>
      </section>

      <section class="features">
        <h2>Features</h2>
        <ul>
          <li>✅ Multi-stage Docker build for optimized images</li>
          <li>✅ Kubernetes deployment with health checks</li>
          <li>✅ Traefik Ingress controller for routing</li>
          <li>✅ Automated GitHub Actions CI/CD pipeline</li>
          <li>✅ Self-hosted runner for custom deployments</li>
          <li>✅ Kubernetes Dashboard for monitoring</li>
          <li>✅ Infrastructure as Code with Terraform</li>
          <li>✅ Ansible-based provisioning and configuration</li>
        </ul>
      </section>

      <section class="cta">
        <h2>Get Started</h2>
        <p>Visit the GitHub repository to see the complete project setup and documentation.</p>
        <a href="https://github.com/joe-nontakorn/gcp-devops" target="_blank" class="button">
          View on GitHub →
        </a>
      </section>
    </main>

    <footer class="footer">
      <p>Created with ❤️ for DevOps Learning on Google Cloud</p>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  color: #333;
}

.header {
  text-align: center;
  padding: 60px 20px;
  background: white;
  border-radius: 10px;
  margin-bottom: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.header h1 {
  font-size: 3em;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header p {
  font-size: 1.2em;
  color: #666;
}

.main {
  background: white;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

section {
  margin-bottom: 50px;
}

h2 {
  font-size: 2em;
  margin-bottom: 30px;
  color: #333;
  border-bottom: 3px solid #667eea;
  padding-bottom: 10px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.card {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

.icon {
  font-size: 3em;
  margin-bottom: 10px;
}

.card h3 {
  font-size: 1.3em;
  margin-bottom: 10px;
  color: #333;
}

.card p {
  color: #666;
  line-height: 1.6;
}

.stack, .features {
  background: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
}

.stack ul, .features ul {
  list-style: none;
  padding: 0;
}

.stack li, .features li {
  padding: 12px 0;
  color: #555;
  line-height: 1.8;
  font-size: 1.1em;
  border-bottom: 1px solid #eee;
}

.stack li:last-child, .features li:last-child {
  border-bottom: none;
}

.cta {
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px;
  border-radius: 8px;
}

.cta h2 {
  color: white;
  border-bottom-color: rgba(255, 255, 255, 0.3);
}

.cta p {
  font-size: 1.2em;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.9);
}

.button {
  display: inline-block;
  background: white;
  color: #667eea;
  padding: 12px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-size: 1.1em;
}

.button:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.footer {
  text-align: center;
  padding: 20px;
  color: white;
  font-size: 1em;
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 2em;
  }

  .main {
    padding: 20px;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  h2 {
    font-size: 1.5em;
  }
}
</style>

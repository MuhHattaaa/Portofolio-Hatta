/* ===== CSS RESET & VARIABLES ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #00d4ff;
  --secondary-color: #7b2ff7;
  --accent-color: #ff006e;
  --bg-dark: #0a0a0f;
  --bg-darker: #050508;
  --bg-card: #13131a;
  --text-primary: #ffffff;
  --text-secondary: #a0a0b0;
  --gradient-1: linear-gradient(135deg, #00d4ff 0%, #7b2ff7 100%);
  --gradient-2: linear-gradient(135deg, #ff006e 0%, #ff4d00 100%);
  --gradient-3: linear-gradient(135deg, #00d4ff 0%, #00ff88 100%);
  --shadow-sm: 0 2px 10px rgba(0, 212, 255, 0.1);
  --shadow-md: 0 4px 20px rgba(123, 47, 247, 0.2);
  --shadow-lg: 0 10px 40px rgba(0, 212, 255, 0.3);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--bg-dark);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* ===== NAVBAR ===== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(10, 10, 15, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: var(--transition);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.navbar.scrolled {
  background: rgba(5, 5, 8, 0.95);
  box-shadow: var(--shadow-md);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo .logo-text {
  font-size: 1.8rem;
  font-weight: 700;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2.5rem;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  transition: var(--transition);
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-1);
  transition: var(--transition);
}

.nav-link:hover,
.nav-link.active {
  color: var(--primary-color);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: var(--text-primary);
  transition: var(--transition);
  border-radius: 2px;
}

/* ===== HERO SECTION ===== */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding-top: 80px;
}

.parallax-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(123, 47, 247, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(255, 0, 110, 0.1) 0%, transparent 50%);
  animation: parallaxFloat 20s ease-in-out infinite;
}

@keyframes parallaxFloat {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.05);
  }
}

.hero-content {
  text-align: center;
  z-index: 1;
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.text-gradient {
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.typing-text {
  display: inline-block;
  border-right: 3px solid var(--primary-color);
  animation: typing 3.5s steps(15) infinite, blink 0.75s step-end infinite;
}

@keyframes typing {
  0%,
  100% {
    width: 0;
  }
  50% {
    width: 100%;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  background: var(--gradient-1);
  color: var(--text-primary);
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: var(--transition);
  box-shadow: var(--shadow-lg);
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transition: var(--transition);
}

.cta-button:hover::before {
  left: 100%;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 50px rgba(0, 212, 255, 0.4);
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.scroll-indicator span {
  display: block;
  width: 2px;
  height: 40px;
  background: var(--gradient-1);
  animation: scrollDown 2s infinite;
}

@keyframes scrollDown {
  0%,
  100% {
    opacity: 0;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(10px);
  }
}

/* ===== SECTION COMMON STYLES ===== */
section {
  padding: 100px 0;
  position: relative;
}

.section-title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  text-align: center;
  color: var(--text-secondary);
  font-size: 1.2rem;
  margin-bottom: 3rem;
}

/* ===== ABOUT SECTION ===== */
.about-section {
  background: var(--bg-darker);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: center;
  margin-top: 3rem;
}

.about-image {
  position: relative;
}

.image-wrapper {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
  transition: var(--transition);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gradient-1);
  opacity: 0;
  transition: var(--transition);
}

.image-wrapper:hover img {
  transform: scale(1.05);
}

.image-wrapper:hover .image-overlay {
  opacity: 0.3;
}

.about-text h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
}

.about-text p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

.stat-item {
  text-align: center;
  padding: 1.5rem;
  background: var(--bg-card);
  border-radius: 15px;
  transition: var(--transition);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-color);
}

.stat-number {
  display: block;
  font-size: 3rem;
  font-weight: 700;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  display: block;
  color: var(--text-secondary);
  margin-top: 0.5rem;
}

/* ===== SKILLS SECTION ===== */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.skill-card {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 20px;
  transition: var(--transition);
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
}

.skill-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--gradient-1);
  transform: scaleX(0);
  transition: var(--transition);
}

.skill-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-color);
}

.skill-card:hover::before {
  transform: scaleX(1);
}

.skill-icon {
  width: 64px;
  height: 64px;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
}

.skill-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.skill-card p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.skill-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: var(--gradient-1);
  border-radius: 10px;
  transition: width 1s ease-out;
}

/* ===== EXPERIENCE SECTION ===== */
.experience-section {
  background: var(--bg-dark);
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.experience-card {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: var(--transition);
  text-align: center;
}

.experience-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-color);
}

.experience-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  color: var(--primary-color);
}

.experience-year {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

/* ===== PROJECTS SECTION ===== */
.projects-section {
  background: var(--bg-darker);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
}

.project-card {
  background: var(--bg-card);
  border-radius: 20px;
  overflow: hidden;
  transition: var(--transition);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-color);
}

.project-image {
  position: relative;
  overflow: hidden;
  height: 250px;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 212, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition);
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-link {
  padding: 1rem 2rem;
  background: var(--text-primary);
  color: var(--bg-dark);
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: var(--transition);
}

.project-link:hover {
  transform: scale(1.1);
  box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
}

.project-content {
  padding: 2rem;
}

.project-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.project-content p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.project-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  padding: 0.4rem 1rem;
  background: rgba(0, 212, 255, 0.1);
  color: var(--primary-color);
  border-radius: 20px;
  font-size: 0.85rem;
  border: 1px solid rgba(0, 212, 255, 0.3);
}

/* ===== WEBSITES SECTION ===== */
.websites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
}

.website-card {
  background: var(--bg-card);
  padding: 3rem;
  border-radius: 20px;
  transition: var(--transition);
  border: 1px solid rgba(255, 255, 255, 0.05);
  text-align: center;
}

.website-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
  border-color: var(--secondary-color);
}

.website-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1.5rem;
  color: var(--secondary-color);
}

.website-card h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.website-card p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.8;
}

.website-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: var(--gradient-2);
  color: var(--text-primary);
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: var(--transition);
}

.website-link:hover {
  transform: translateX(5px);
  box-shadow: var(--shadow-md);
}

/* ===== CONTACT SECTION ===== */
.contact-section {
  background: var(--bg-darker);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;
}

.contact-info h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.contact-info p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.8;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: var(--bg-card);
  color: var(--text-primary);
  text-decoration: none;
  border-radius: 15px;
  transition: var(--transition);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.social-link:hover {
  transform: translateX(10px);
  border-color: var(--primary-color);
  box-shadow: var(--shadow-md);
}

.social-link svg {
  flex-shrink: 0;
}

.social-link.email:hover {
  background: linear-gradient(135deg, #ea4335 0%, #d33d29 100%);
}

.social-link.instagram:hover {
  background: linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
}

.social-link.github:hover {
  background: linear-gradient(135deg, #6e5494 0%, #4a3f66 100%);
}

.social-link.tiktok:hover {
  background: linear-gradient(135deg, #00f2ea 0%, #ff0050 100%);
}

.contact-form-wrapper {
  background: var(--bg-card);
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  position: relative;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  background: var(--bg-dark);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: var(--text-primary);
  font-size: 1rem;
  transition: var(--transition);
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
}

.form-group label {
  position: absolute;
  left: 1rem;
  top: 1rem;
  color: var(--text-secondary);
  transition: var(--transition);
  pointer-events: none;
}

.form-group input:focus + label,
.form-group input:not(:placeholder-shown) + label,
.form-group textarea:focus + label,
.form-group textarea:not(:placeholder-shown) + label {
  top: -0.5rem;
  left: 0.5rem;
  font-size: 0.85rem;
  color: var(--primary-color);
  background: var(--bg-card);
  padding: 0 0.5rem;
}

.submit-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--gradient-1);
  color: var(--text-primary);
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: var(--shadow-md);
}

.submit-button:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}
/* ===== CONTACT SECTION - LOKASI & TELEPON ===== */
.social-link.phone:hover {
    background: linear-gradient(135deg, #34a853 0%, #2e8b47 100%);
}

.location-map {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.location-map h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.location-map h4::before {
    content: "📍";
    font-size: 1.2rem;
}

.map-wrapper {
    position: relative;
    width: 100%;
    height: 300px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: var(--shadow-md);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: var(--transition);
}

.map-wrapper:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-color);
}

.map-wrapper iframe {
    width: 100%;
    height: 100%;
    border: none;
    filter: brightness(0.9) contrast(1.1);
}

/* Responsive untuk peta */
@media (max-width: 768px) {
    .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .location-map {
        margin-top: 1.5rem;
        padding-top: 1.5rem;
    }
    
    .map-wrapper {
        height: 250px;
    }
}

@media (max-width: 480px) {
    .map-wrapper {
        height: 200px;
    }
}
/* ===== PROJECT MODAL ===== */
.modal {
  display: none;
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal.active {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: var(--bg-card);
  border-radius: 20px;
  overflow: hidden;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 212, 255, 0.3);
  border: 1px solid rgba(0, 212, 255, 0.2);
  animation: slideUp 0.3s ease-out;
  position: relative;
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-close {
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary-color);
  cursor: pointer;
  transition: var(--transition);
  z-index: 10;
}

.modal-close:hover {
  color: var(--accent-color);
}

.modal-header {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.modal-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-body {
  padding: 2.5rem;
}

.modal-body h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.modal-body p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.modal-tags {
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
}

.modal-tags .tag {
  padding: 0.6rem 1.2rem;
  background: rgba(0, 212, 255, 0.15);
  color: var(--primary-color);
  border-radius: 25px;
  font-size: 0.95rem;
  border: 1px solid rgba(0, 212, 255, 0.4);
}

.project-detail-btn {
  background: var(--text-primary);
  color: var(--bg-dark);
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  font-size: 0.95rem;
}

.project-detail-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.3);
}

/* ===== FOOTER ===== */
.footer {
  background: var(--bg-darker);
  padding: 2rem 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-content p {
  color: var(--text-secondary);
}

.heart {
  color: #ff006e;
  animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    left: -100%;
    top: 80px;
    flex-direction: column;
    background: rgba(5, 5, 8, 0.98);
    width: 100%;
    text-align: center;
    transition: var(--transition);
    padding: 2rem 0;
    gap: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .nav-menu.active {
    left: 0;
  }

  .hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(8px, 8px);
  }

  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(8px, -8px);
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .about-content,
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-stats {
    grid-template-columns: 1fr;
  }

  .skills-grid,
  .projects-grid,
  .websites-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 1rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .cta-button {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }

  .contact-form-wrapper {
    padding: 1.5rem;
  }
}

/* ===== ANIMATIONS ON SCROLL ===== */
[data-aos] {
  opacity: 0;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

[data-aos].aos-animate {
  opacity: 1;
}

[data-aos="fade-up"] {
  transform: translateY(30px);
}

[data-aos="fade-up"].aos-animate {
  transform: translateY(0);
}

[data-aos="fade-right"] {
  transform: translateX(-30px);
}

[data-aos="fade-right"].aos-animate {
  transform: translateX(0);
}

[data-aos="fade-left"] {
  transform: translateX(30px);
}

[data-aos="fade-left"].aos-animate {
  transform: translateX(0);
}

[data-aos="zoom-in"] {
  transform: scale(0.9);
}

[data-aos="zoom-in"].aos-animate {
  transform: scale(1);
}

[data-aos="flip-left"] {
  transform: perspective(1000px) rotateY(-10deg);
}

[data-aos="flip-left"].aos-animate {
  transform: perspective(1000px) rotateY(0);
}
/* ===== CONTACT SECTION - NEW LAYOUT ===== */
.contact-content-new {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 3rem;
    margin-top: 3rem;
}

@media (max-width: 992px) {
    .contact-content-new {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}

/* Kontak Info & Media Sosial */
.contact-info-new {
    display: flex;
    flex-direction: column;
}

.contact-card {
    background: var(--bg-card);
    padding: 2.5rem;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: var(--shadow-md);
}

.contact-card h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
}

.contact-description {
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.7;
}

/* Media Sosial Baru */
.social-links-new {
    margin-bottom: 2.5rem;
}

.social-links-new h4 {
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.social-links-new h4::before {
    content: "👥";
    font-size: 1rem;
}

.social-link-new {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.2rem;
    background: rgba(255, 255, 255, 0.03);
    color: var(--text-primary);
    text-decoration: none;
    border-radius: 12px;
    transition: var(--transition);
    border: 1px solid rgba(255, 255, 255, 0.05);
    margin-bottom: 0.8rem;
}

.social-link-new:hover {
    transform: translateX(5px);
    border-color: var(--primary-color);
    box-shadow: var(--shadow-sm);
}

.social-link-new svg {
    flex-shrink: 0;
    opacity: 0.9;
}

/* Hover Colors untuk Sosial Media */
.social-link-new.email:hover {
    background: linear-gradient(135deg, #ea4335 0%, #d33d29 100%);
}

.social-link-new.phone:hover {
    background: linear-gradient(135deg, #34a853 0%, #2e8b47 100%);
}

.social-link-new.instagram:hover {
    background: linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
}

.social-link-new.github:hover {
    background: linear-gradient(135deg, #6e5494 0%, #4a3f66 100%);
}

.social-link-new.tiktok:hover {
    background: linear-gradient(135deg, #00f2ea 0%, #ff0050 100%);
}

/* Lokasi Baru */
.location-map-new {
    margin-top: 1rem;
}

.location-map-new h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.map-container {
    position: relative;
    width: 100%;
    height: 300px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: var(--shadow-md);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: var(--transition);
}

.map-container:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-color);
}

.map-container iframe {
    width: 100%;
    height: 100%;
    border: none;
    filter: brightness(0.9) contrast(1.1);
}

/* Form & Tabel Container */
.form-table-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.visitor-form-card, .visitor-table-card {
    background: var(--bg-card);
    padding: 2rem;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: var(--shadow-md);
}

.visitor-form-card h3, .visitor-table-card h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--primary-color);
}

.visitor-form-card p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
}

/* Form Baru */
.visitor-form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}

.form-group-new {
    position: relative;
}

.form-group-new input,
.form-group-new textarea,
.form-group-new select {
    width: 100%;
    padding: 1rem;
    background: var(--bg-dark);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    color: var(--text-primary);
    font-size: 1rem;
    transition: var(--transition);
    font-family: inherit;
}

.form-group-new input:focus,
.form-group-new textarea:focus,
.form-group-new select:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
}

.form-group-new label {
    position: absolute;
    left: 1rem;
    top: 1rem;
    color: var(--text-secondary);
    transition: var(--transition);
    pointer-events: none;
    background: var(--bg-dark);
    padding: 0 0.3rem;
}

.form-group-new input:focus + label,
.form-group-new input:not(:placeholder-shown) + label,
.form-group-new textarea:focus + label,
.form-group-new textarea:not(:placeholder-shown) + label {
    top: -0.6rem;
    left: 0.7rem;
    font-size: 0.8rem;
    color: var(--primary-color);
}

.form-group-new select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2300d4ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1rem;
}

.form-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
}

.submit-button-new, .clear-button {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 10px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
}

.submit-button-new {
    background: var(--gradient-1);
    color: var(--text-primary);
    box-shadow: var(--shadow-sm);
}

.submit-button-new:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.clear-button {
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-secondary);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.clear-button:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-primary);
    border-color: var(--accent-color);
}

/* Tabel Pengunjung */
.table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.table-actions {
    display: flex;
    gap: 0.5rem;
}

.action-button {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: var(--transition);
}

.action-button:hover {
    background: rgba(0, 212, 255, 0.1);
    border-color: var(--primary-color);
    transform: rotate(15deg);
}

.action-button.export:hover {
    background: rgba(0, 255, 136, 0.1);
    border-color: #00ff88;
}

.table-wrapper {
    overflow-x: auto;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

#visitorTable {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
}

#visitorTable thead {
    background: rgba(0, 212, 255, 0.1);
}

#visitorTable th {
    padding: 1rem;
    text-align: left;
    color: var(--primary-color);
    font-weight: 600;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 2px solid rgba(0, 212, 255, 0.3);
}

#visitorTable td {
    padding: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    color: var(--text-secondary);
}

#visitorTable tbody tr {
    transition: var(--transition);
}

#visitorTable tbody tr:hover {
    background: rgba(255, 255, 255, 0.03);
}

#visitorTable .empty-row td {
    text-align: center;
    padding: 3rem 1rem;
    color: var(--text-secondary);
}

.empty-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.empty-message svg {
    color: var(--primary-color);
    opacity: 0.5;
}

.sub-message {
    font-size: 0.9rem;
    opacity: 0.7;
}

/* Status Badges */
.status-badge {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.status-badge.new {
    background: rgba(0, 212, 255, 0.15);
    color: var(--primary-color);
    border: 1px solid rgba(0, 212, 255, 0.3);
}

.status-badge.follow-up {
    background: rgba(255, 193, 7, 0.15);
    color: #ffc107;
    border: 1px solid rgba(255, 193, 7, 0.3);
}

.status-badge.accepted {
    background: rgba(0, 255, 136, 0.15);
    color: #00ff88;
    border: 1px solid rgba(0, 255, 136, 0.3);
}

.status-badge.rejected {
    background: rgba(255, 0, 110, 0.15);
    color: var(--accent-color);
    border: 1px solid rgba(255, 0, 110, 0.3);
}

/* Action Buttons */
.action-buttons {
    display: flex;
    gap: 0.5rem;
}

.edit-btn, .delete-btn {
    padding: 0.4rem 0.8rem;
    border: none;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 0.3rem;
}

.edit-btn {
    background: rgba(0, 212, 255, 0.15);
    color: var(--primary-color);
    border: 1px solid rgba(0, 212, 255, 0.3);
}

.edit-btn:hover {
    background: rgba(0, 212, 255, 0.3);
    transform: translateY(-1px);
}

.delete-btn {
    background: rgba(255, 0, 110, 0.15);
    color: var(--accent-color);
    border: 1px solid rgba(255, 0, 110, 0.3);
}

.delete-btn:hover {
    background: rgba(255, 0, 110, 0.3);
    transform: translateY(-1px);
}

/* Table Footer */
.table-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.table-info {
    color: var(--text-secondary);
    font-size: 0.9rem;
}

.table-info span {
    color: var(--primary-color);
    font-weight: 700;
}

.table-controls {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-secondary);
    font-size: 0.9rem;
}

.page-button {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: var(--transition);
}

.page-button:hover:not(:disabled) {
    background: rgba(0, 212, 255, 0.1);
    border-color: var(--primary-color);
}

.page-button:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

/* Responsive */
@media (max-width: 768px) {
    .contact-card, .visitor-form-card, .visitor-table-card {
        padding: 1.5rem;
    }
    
    .contact-content-new {
        gap: 1.5rem;
    }
    
    .form-buttons {
        flex-direction: column;
    }
    
    .social-link-new {
        padding: 0.8rem 1rem;
    }
    
    .map-container {
        height: 250px;
    }
    
    .table-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }
    
    .table-actions {
        align-self: flex-end;
    }
    
    .table-footer {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }
    
    .table-controls {
        align-self: flex-end;
    }
}

@media (max-width: 480px) {
    .action-buttons {
        flex-direction: column;
    }
    
    .edit-btn, .delete-btn {
        width: 100%;
        justify-content: center;
    }
}

/* ===== RESTRUCTURED CONTACT LAYOUT ===== */
.restructured-contact-layout {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 2.5rem;
    margin-top: 2rem;
}

@media (max-width: 1024px) {
    .restructured-contact-layout {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}

/* ===== LEFT COLUMN - Kontak & Lokasi ===== */
.left-column {
    display: flex;
    flex-direction: column;
}

.contact-location-card {
    background: var(--bg-card);
    border-radius: 20px;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: var(--shadow-md);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100%;
}

.card-header h3 {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
    color: var(--primary-color);
}

.card-description {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 0.95rem;
}

/* Media Sosial Grid */
.media-social-section h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.media-social-section h4::before {
    content: "👥";
    font-size: 1rem;
}

.social-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.social-item {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    transition: var(--transition);
    text-decoration: none;
    color: var(--text-primary);
}

.social-item:hover {
    transform: translateY(-2px);
    border-color: var(--primary-color);
    box-shadow: var(--shadow-sm);
}

.social-item svg {
    flex-shrink: 0;
    color: var(--primary-color);
}

.social-info {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    overflow: hidden;
}

.social-label {
    font-size: 0.8rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.social-value {
    font-size: 0.9rem;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Hover colors untuk social items */
.social-item.email:hover {
    background: linear-gradient(135deg, rgba(234, 67, 53, 0.1) 0%, rgba(211, 61, 41, 0.1) 100%);
    border-color: #ea4335;
}

.social-item.phone:hover {
    background: linear-gradient(135deg, rgba(52, 168, 83, 0.1) 0%, rgba(46, 139, 71, 0.1) 100%);
    border-color: #34a853;
}

.social-item.instagram:hover {
    background: linear-gradient(135deg, rgba(240, 148, 51, 0.1) 0%, rgba(230, 104, 60, 0.1) 25%, rgba(220, 39, 67, 0.1) 50%, rgba(204, 35, 102, 0.1) 75%, rgba(188, 24, 136, 0.1) 100%);
    border-color: #dc2743;
}

.social-item.github:hover {
    background: linear-gradient(135deg, rgba(110, 84, 148, 0.1) 0%, rgba(74, 63, 102, 0.1) 100%);
    border-color: #6e5494;
}

/* Lokasi di samping Media Sosial */
.location-side-section {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.location-side-section h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.compact-map {
    width: 100%;
    height: 200px;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.compact-map iframe {
    width: 100%;
    height: 100%;
    border: none;
    filter: brightness(0.9) contrast(1.1);
}

.location-info {
    text-align: center;
}

.location-info strong {
    color: var(--text-primary);
    font-size: 1rem;
}

.location-detail {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-top: 0.3rem;
}

/* ===== RIGHT COLUMN - Form dan Tabel Side-by-Side ===== */
.right-column {
    display: flex;
    flex-direction: column;
}

.form-table-side {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    height: 100%;
}

@media (max-width: 1200px) {
    .form-table-side {
        grid-template-columns: 1fr;
    }
}

/* Form Input Section */
.form-input-section {
    background: var(--bg-card);
    border-radius: 20px;
    padding: 1.8rem;
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: var(--shadow-md);
}

.form-header h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--primary-color);
}

.form-description {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    line-height: 1.5;
}

.visitor-form-compact {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form-group-compact {
    position: relative;
}

.form-group-compact input,
.form-group-compact textarea,
.form-group-compact select {
    width: 100%;
    padding: 0.8rem;
    background: var(--bg-dark);
    border: 1.5px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: var(--text-primary);
    font-size: 0.9rem;
    transition: var(--transition);
    font-family: inherit;
}

.form-group-compact input:focus,
.form-group-compact textarea:focus,
.form-group-compact select:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(0, 212, 255, 0.1);
}

.form-group-compact label {
    position: absolute;
    left: 0.8rem;
    top: 0.8rem;
    color: var(--text-secondary);
    transition: var(--transition);
    pointer-events: none;
    background: var(--bg-dark);
    padding: 0 0.3rem;
    font-size: 0.85rem;
}

.form-group-compact input:focus + label,
.form-group-compact input:not(:placeholder-shown) + label,
.form-group-compact textarea:focus + label,
.form-group-compact textarea:not(:placeholder-shown) + label {
    top: -0.6rem;
    left: 0.5rem;
    font-size: 0.75rem;
    color: var(--primary-color);
}

.form-group-compact select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2300d4ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.8rem center;
    background-size: 1rem;
}

.form-actions-compact {
    display: flex;
    gap: 0.8rem;
    margin-top: 0.5rem;
}

.submit-button-compact,
.clear-button-compact {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
}

.submit-button-compact {
    background: var(--gradient-1);
    color: var(--text-primary);
    box-shadow: var(--shadow-sm);
}

.submit-button-compact:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.clear-button-compact {
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-secondary);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.clear-button-compact:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-primary);
    border-color: var(--accent-color);
}

/* Table Display Section */
.table-display-section {
    background: var(--bg-card);
    border-radius: 20px;
    padding: 1.8rem;
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: var(--shadow-md);
    display: flex;
    flex-direction: column;
}

.table-header-compact {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2rem;
}

.table-header-compact h3 {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin: 0;
}

.table-tools {
    display: flex;
    gap: 0.5rem;
}

.tool-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: var(--transition);
}

.tool-btn:hover {
    background: rgba(0, 212, 255, 0.1);
    border-color: var(--primary-color);
    transform: rotate(15deg);
}

.table-container-compact {
    flex: 1;
    overflow-x: auto;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

#visitorTableCompact {
    width: 100%;
    border-collapse: collapse;
    min-width: 500px;
}

#visitorTableCompact thead {
    background: rgba(0, 212, 255, 0.08);
}

#visitorTableCompact th {
    padding: 0.8rem;
    text-align: left;
    color: var(--primary-color);
    font-weight: 600;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 2px solid rgba(0, 212, 255, 0.2);
}

#visitorTableCompact td {
    padding: 0.8rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    color: var(--text-secondary);
    font-size: 0.85rem;
}

#visitorTableCompact tbody tr:hover {
    background: rgba(255, 255, 255, 0.03);
}

#visitorTableCompact .empty-message-row td {
    text-align: center;
    padding: 2rem 1rem;
    color: var(--text-secondary);
}

.empty-table-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
}

.empty-table-message svg {
    color: var(--primary-color);
    opacity: 0.5;
}

.sub-text {
    font-size: 0.85rem;
    opacity: 0.7;
}

/* Status badges untuk tabel */
.status-badge-compact {
    display: inline-block;
    padding: 0.2rem 0.6rem;
    border-radius: 15px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.status-badge-compact.new {
    background: rgba(0, 212, 255, 0.15);
    color: var(--primary-color);
}

.status-badge-compact.follow-up {
    background: rgba(255, 193, 7, 0.15);
    color: #ffc107;
}

.status-badge-compact.accepted {
    background: rgba(0, 255, 136, 0.15);
    color: #00ff88;
}

.status-badge-compact.rejected {
    background: rgba(255, 0, 110, 0.15);
    color: var(--accent-color);
}

.action-col {
    width: 100px;
}

/* Table actions */
.table-actions-compact {
    display: flex;
    gap: 0.3rem;
}

.action-btn-compact {
    padding: 0.3rem 0.6rem;
    border: none;
    border-radius: 5px;
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 0.2rem;
}

.action-btn-compact.edit {
    background: rgba(0, 212, 255, 0.15);
    color: var(--primary-color);
    border: 1px solid rgba(0, 212, 255, 0.3);
}

.action-btn-compact.edit:hover {
    background: rgba(0, 212, 255, 0.3);
}

.action-btn-compact.delete {
    background: rgba(255, 0, 110, 0.15);
    color: var(--accent-color);
    border: 1px solid rgba(255, 0, 110, 0.3);
}

.action-btn-compact.delete:hover {
    background: rgba(255, 0, 110, 0.3);
}

/* Table Footer */
.table-footer-compact {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.2rem;
    padding-top: 1.2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.table-stats {
    color: var(--text-secondary);
    font-size: 0.85rem;
}

.table-stats span {
    color: var(--primary-color);
    font-weight: 700;
}

.table-pagination {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-secondary);
    font-size: 0.85rem;
}

.page-nav {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: var(--transition);
}

.page-nav:hover:not(:disabled) {
    background: rgba(0, 212, 255, 0.1);
    border-color: var(--primary-color);
}

.page-nav:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

.page-info {
    margin: 0 0.5rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .restructured-contact-layout {
        gap: 1.5rem;
    }
    
    .contact-location-card,
    .form-input-section,
    .table-display-section {
        padding: 1.5rem;
    }
    
    .social-grid {
        grid-template-columns: 1fr;
    }
    
    .compact-map {
        height: 180px;
    }
    
    .form-actions-compact {
        flex-direction: column;
    }
    
    .table-header-compact {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }
    
    .table-tools {
        align-self: flex-end;
    }
    
    .table-footer-compact {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }
    
    .table-pagination {
        align-self: flex-end;
    }
}

@media (max-width: 480px) {
    .contact-location-card,
    .form-input-section,
    .table-display-section {
        padding: 1.2rem;
    }
    
    .social-item {
        padding: 0.8rem;
    }
    
    .compact-map {
        height: 150px;
    }
    
    .table-actions-compact {
        flex-direction: column;
    }
}

/* ===== PROJECT VIDEO STYLES ===== */
.project-video-container {
  margin: 2rem 0;
  display: none; /* Awalnya disembunyikan, akan ditampilkan jika ada video */
}

.video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  background: var(--bg-darker);
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

/* Responsive video */
@media (max-width: 768px) {
  .video-wrapper {
    padding-bottom: 75%; /* 4:3 untuk mobile */
  }
}

/* Tambahkan di style.css */
.project-detail-content {
  line-height: 1.8;
  font-size: 1.1rem;
}

.project-detail-content p {
  margin-bottom: 1.2rem;
  color: var(--text-primary);
}

.project-detail-content strong {
  color: var(--primary-color);
  font-weight: 600;
}

.project-detail-content ul {
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
}

.project-detail-content li {
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 0.5rem;
}

.project-detail-content li:before {
  content: "•";
  color: var(--primary-color);
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

/* Responsive untuk modal content */
.modal-body {
  padding: 2.5rem;
  max-height: 70vh;
  overflow-y: auto;
}

.modal-body h2 {
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  border-bottom: 2px solid rgba(0, 212, 255, 0.2);
  padding-bottom: 0.5rem;
}

/* Scrollbar styling untuk modal */
.modal-body::-webkit-scrollbar {
  width: 8px;
}

.modal-body::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

.modal-body::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 4px;
}

.modal-body::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-color);
}

/* Responsive untuk mobile */
@media (max-width: 768px) {
  .modal-body {
    padding: 1.5rem;
    max-height: 60vh;
  }
  
  .modal-body h2 {
    font-size: 1.8rem;
  }
  
  .project-detail-content {
    font-size: 1rem;
  }
}

/* ===== CONTACT COMPACT LAYOUT ===== */
.contact-content-compact {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    margin-top: 3rem;
}

@media (max-width: 768px) {
    .contact-content-compact {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}

/* Kolom Media Sosial */
.media-social-column {
    display: flex;
    flex-direction: column;
}

.contact-card-compact {
    background: var(--bg-card);
    padding: 2.5rem;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: var(--shadow-md);
    height: 100%;
}

.contact-card-compact h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
}

.contact-description {
    color: var(--text-secondary);
    margin-bottom: 2.5rem;
    line-height: 1.7;
    font-size: 1rem;
}

/* Grid Media Sosial */
.social-grid-compact {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.social-item-compact {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 1.2rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    transition: var(--transition);
    text-decoration: none;
    color: var(--text-primary);
}

.social-item-compact:hover {
    transform: translateX(5px);
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--primary-color);
}

.social-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 212, 255, 0.1);
    border-radius: 10px;
    flex-shrink: 0;
}

.social-info {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    overflow: hidden;
}

.social-label {
    font-size: 0.85rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
}

.social-value {
    font-size: 1rem;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* Warna khusus untuk setiap media sosial */
.social-item-compact.email:hover .social-icon {
    background: rgba(234, 67, 53, 0.2);
    color: #ea4335;
}

.social-item-compact.phone:hover .social-icon {
    background: rgba(52, 168, 83, 0.2);
    color: #34a853;
}

.social-item-compact.instagram:hover .social-icon {
    background: rgba(225, 48, 108, 0.2);
    color: #e1306c;
}

.social-item-compact.github:hover .social-icon {
    background: rgba(24, 23, 23, 0.2);
    color: #181717;
}

.social-item-compact.tiktok:hover .social-icon {
    background: rgba(0, 0, 0, 0.2);
    color: #000000;
}

/* Kolom Lokasi */
.location-column {
    display: flex;
    flex-direction: column;
}

.location-card-compact {
    background: var(--bg-card);
    padding: 2.5rem;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: var(--shadow-md);
    height: 100%;
}

.location-card-compact h3 {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
    color: var(--primary-color);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.location-description {
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.6;
    font-size: 1rem;
}

/* Map */
.map-wrapper-compact {
    position: relative;
    width: 100%;
    height: 300px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: var(--shadow-md);
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 2rem;
    transition: var(--transition);
}

.map-wrapper-compact:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-color);
}

.map-wrapper-compact iframe {
    width: 100%;
    height: 100%;
    border: none;
    filter: brightness(0.9) contrast(1.1);
}

/* Detail Lokasi */
.location-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.detail-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.8rem 1rem;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 10px;
    color: var(--text-secondary);
    transition: var(--transition);
}

.detail-item:hover {
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-primary);
}

.detail-item svg {
    color: var(--primary-color);
    opacity: 0.8;
}

/* Responsive */
@media (max-width: 992px) {
    .contact-content-compact {
        gap: 2rem;
    }
    
    .contact-card-compact,
    .location-card-compact {
        padding: 2rem;
    }
    
    .map-wrapper-compact {
        height: 250px;
    }
}

@media (max-width: 768px) {
    .contact-content-compact {
        grid-template-columns: 1fr;
    }
    
    .contact-card-compact,
    .location-card-compact {
        padding: 1.5rem;
    }
    
    .social-item-compact {
        padding: 1rem;
        gap: 1rem;
    }
    
    .social-icon {
        width: 40px;
        height: 40px;
    }
    
    .map-wrapper-compact {
        height: 200px;
    }
    
    .location-card-compact h3,
    .contact-card-compact h3 {
        font-size: 1.5rem;
    }
}

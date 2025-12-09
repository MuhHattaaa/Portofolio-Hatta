// ===== PROJECT DETAIL MODAL =====
// Di bagian projectData (sekitar line 3-30), tambahkan videoId:
const projectData = {
  1: {
    title: "Alat Pengukur Jarak dengan Sensor Ultrasonik",
    description: `
      <div class="project-detail-content">
        <p><strong>Deskripsi Proyek:</strong> Alat Pengukur Jarak ini merupakan inovasi teknologi berbasis Arduino yang menggunakan sensor ultrasonik HC-SR04 untuk mengukur jarak dengan akurasi tinggi. Sistem ini dirancang khusus untuk aplikasi praktis dalam kehidupan sehari-hari dan industri.</p>
        
        <p><strong>Fitur Utama:</strong></p>
        <ul>
          <li>Menggunakan sensor ultrasonik HC-SR04 dengan jangkauan 2cm - 4m</li>
          <li>Akurasi pengukuran mencapai ±0.3cm</li>
          <li>Display LCD 16x2 untuk menampilkan hasil real-time</li>
          <li>Indikator LED untuk jarak berbahaya (kurang dari 20cm)</li>
          <li>Buzzer sebagai alarm peringatan jarak terlalu dekat</li>
          <li>Konsumsi daya rendah dengan power supply 5V DC</li>
        </ul>
        
        <p><strong>Teknologi yang Digunakan:</strong></p>
        <ul>
          <li><strong>Hardware:</strong> Arduino Uno, Sensor HC-SR04, LCD I2C, Buzzer, LED, Resistor</li>
          <li><strong>Software:</strong> Arduino IDE, Bahasa pemrograman C++</li>
          <li><strong>Prinsip Kerja:</strong> Mengukur waktu tempuh gelombang ultrasonik dari transmitter ke receiver</li>
        </ul>
        
        <p><strong>Aplikasi Praktis:</strong></p>
        <ul>
          <li>Parkir mundur kendaraan</li>
          <li>Pengukuran level cairan dalam tangki</li>
          <li>Deteksi objek pada sistem keamanan</li>
          <li>Alat bantu untuk tunanetra</li>
          <li>Pengukuran dalam robotika</li>
        </ul>
        
        <p><strong>Keunggulan:</strong></p>
        <ul>
          <li>Biaya produksi rendah (Rp 150.000 - Rp 200.000)</li>
          <li>Mudah dioperasikan tanpa pelatihan khusus</li>
          <li>Portabel dengan dimensi compact 10x8x5 cm</li>
          <li>Tahan terhadap kondisi lingkungan (suhu 0-70°C)</li>
          <li>Response time cepat (≤ 50ms)</li>
        </ul>
      </div>
    `,
    image: "images/pkk1.jpeg",
    tags: ["Arduino", "C++", "HC-SR04", "LCD Display", "Embedded Systems", "Electronics"],
    videoId: "qhOIErhSq5A" // Tambahkan jika ada video
  },
  2: {
    title: "Robot Avoider dengan Navigasi Otonom",
    description: `
      <div class="project-detail-content">
        <p><strong>Deskripsi Proyek:</strong> Robot Avoider ini adalah robot pintar yang mampu bergerak secara mandiri sambil menghindari rintangan. Menggunakan sistem sensor multi-arah, robot ini dapat menjelajahi lingkungan tanpa tabrakan, menjadikannya solusi ideal untuk berbagai aplikasi otomasi.</p>
        
        <p><strong>Fitur Utama:</strong></p>
        <ul>
          <li>3 sensor ultrasonik untuk deteksi 180° (kiri, tengah, kanan)</li>
          <li>Algoritma decision-making untuk navigasi optimal</li>
          <li>Motor DC dengan gearbox untuk daya dan kontrol presisi</li>
          <li>Battery management system dengan indikator low-battery</li>
          <li>Mode operasi: Autonomous, Manual, dan Follow-line</li>
          <li>Kecepatan maksimal 0.5 m/s dengan akselerasi smooth</li>
        </ul>
        
        <p><strong>Teknologi yang Digunakan:</strong></p>
        <ul>
          <li><strong>Mikrokontroler:</strong> Arduino Mega 2560</li>
          <li><strong>Sensors:</strong> 3x HC-SR04 Ultrasonic, L298N Motor Driver</li>
          <li><strong>Power:</strong> Li-Po 12V 2000mAh dengan charging circuit</li>
          <li><strong>Chassis:</strong> Acrylic custom design dengan mounting points</li>
          <li><strong>Software:</strong> Custom library untuk obstacle avoidance</li>
        </ul>
        
        <p><strong>Algoritma Navigasi:</strong></p>
        <ul>
          <li><strong>Wall Following:</strong> Mengikuti dinding dengan jarak konstan</li>
          <li><strong>Random Exploration:</strong> Menjelajahi area secara acak</li>
          <li><strong>Path Planning:</strong> Mencari rute terpendek tanpa hambatan</li>
          <li><strong>Emergency Stop:</strong> Berhenti instan ketika deteksi objek < 10cm</li>
        </ul>
        
        <p><strong>Aplikasi Potensial:</strong></p>
        <ul>
          <li>Pembersihan ruangan otomatis (seperti vacuum robot)</li>
          <li>Surveillance dan patroli keamanan</li>
          <li>Delivery system dalam lingkungan terkontrol</li>
          <li>Edukasi STEM untuk pembelajaran robotika</li>
          <li>Platform untuk penelitian AI dan machine learning</li>
        </ul>
        
        <p><strong>Spesifikasi Teknis:</strong></p>
        <ul>
          <li>Dimensi: 20cm x 20cm x 15cm</li>
          <li>Berat: 1.2 kg (termasuk battery)</li>
          <li>Operating time: 2-3 jam continuous</li>
          <li>Jarak deteksi: 2cm - 150cm</li>
          <li>Communication: Bluetooth HC-05 (opsional untuk remote control)</li>
        </ul>
      </div>
    `,
    image: "images/pkk2.jpeg",
    tags: ["Robotika", "Arduino Mega", "HC-SR04", "L298N", "Autonomous Navigation", "IoT"],
    videoId: "mklQnvWb3No"
  },
  3: {
    title: "Smart Home System dengan Kontrol Mobile",
    description: `
      <div class="project-detail-content">
        <p><strong>Deskripsi Proyek:</strong> Sistem Smart Home ini mengintegrasikan teknologi Internet of Things (IoT) untuk mengontrol perangkat rumah secara remote melalui smartphone. Sistem ini tidak hanya mengontrol lampu tetapi juga dapat dimodifikasi untuk berbagai perangkat elektronik lainnya.</p>
        
        <p><strong>Fitur Utama:</strong></p>
        <ul>
          <li>Kontrol lampu via aplikasi mobile (Android/iOS)</li>
          <li>Scheduling otomatis berdasarkan waktu/jadwal</li>
          <li>Voice control integration dengan Google Assistant</li>
          <li>Energy monitoring untuk tracking konsumsi daya</li>
          <li>Scene modes: Movie, Party, Sleep, Reading</li>
          <li>Security features dengan notifikasi intrusion alert</li>
        </ul>
        
        <p><strong>Arsitektur Sistem:</strong></p>
        <ul>
          <li><strong>Controller:</strong> NodeMCU ESP8266 dengan WiFi built-in</li>
          <li><strong>Cloud Platform:</strong> Blynk IoT Cloud untuk management</li>
          <li><strong>Interface:</strong> Custom mobile app dengan dashboard intuitive</li>
          <li><strong>Actuators:</strong> Relay modules 5V untuk kontrol perangkat AC</li>
          <li><strong>Sensors:</strong> PIR motion, DHT11 temperature/humidity</li>
          <li><strong>Power Supply:</strong> Switching 5V/10A dengan circuit protection</li>
        </ul>
        
        <p><strong>Komponen Software:</strong></p>
        <ul>
          <li><strong>Firmware:</strong> Arduino-based dengan OTA update capability</li>
          <li><strong>Mobile App:</strong> React Native dengan UI/UX responsif</li>
          <li><strong>Backend:</strong> Firebase untuk data sync dan user management</li>
          <li><strong>API:</strong> REST API untuk integrasi third-party services</li>
          <li><strong>Database:</strong> Cloud-based untuk logging dan analytics</li>
        </ul>
        
        <p><strong>Integrasi dan Skalabilitas:</strong></p>
        <ul>
          <li>Support untuk 8+ devices dalam satu jaringan</li>
          <li>Compatible dengan protokol MQTT untuk enterprise applications</li>
          <li>Multi-user access dengan role-based permissions</li>
          <li>Geofencing untuk trigger berbasis lokasi</li>
          <li>IFTTT integration untuk automation workflows</li>
          <li>Backup manual control dengan physical switches</li>
        </ul>
        
        <p><strong>Manfaat Implementasi:</strong></p>
        <ul>
          <li>Energy saving hingga 30% dengan smart scheduling</li>
          <li>Enhanced security dengan remote monitoring</li>
          <li>Convenience melalui centralized control</li>
          <li>Scalability untuk home expansion</li>
          <li>Data analytics untuk optimizing usage patterns</li>
          <li>Accessibility untuk elderly atau disabled users</li>
        </ul>
        
        <p><strong>Rencana Pengembangan:</strong></p>
        <ul>
          <li>Integrasi dengan solar panel system</li>
          <li>AI-based prediction untuk automated adjustments</li>
          <li>Biometric access control</li>
          <li>Water leak detection system</li>
          <li>Smart gardening automation</li>
          <li>Integration dengan smart appliances</li>
        </ul>
      </div>
    `,
    image: "images/pkkcover.jpeg",
    tags: ["IoT", "ESP8266", "Blynk", "Firebase", "Mobile App", "Home Automation", "Cloud"],
    videoId: "UwcKeQ2RMpo"
  }
};

const modal = document.getElementById("projectModal");
// Cari kode modal (sekitar line 40-60) dan ubah menjadi:
const modalClose = document.querySelector(".modal-close");

// Open modal when clicking detail button
document.querySelectorAll(".project-detail-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const projectId = btn.closest(".project-card").getAttribute("data-project-id");
    const data = projectData[projectId];
    
    if (data) {
      document.getElementById("modalProjectTitle").textContent = data.title;
      document.getElementById("modalProjectDescription").innerHTML = data.description;
      document.getElementById("modalProjectImage").src = data.image;
      
      const tagsContainer = document.getElementById("modalProjectTags");
      tagsContainer.innerHTML = data.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
      
      // TAMBAHKAN: Atur video YouTube jika ada
      const videoContainer = document.getElementById("modalProjectVideo");
      if (data.videoId && data.videoId !== "VIDEO_ID_HERE_1" && data.videoId !== "VIDEO_ID_HERE_2" && data.videoId !== "VIDEO_ID_HERE_3") {
        videoContainer.innerHTML = `
          <div class="video-wrapper">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/${data.videoId}" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
        `;
        videoContainer.style.display = "block";
      } else {
        videoContainer.innerHTML = "";
        videoContainer.style.display = "none";
      }
      
      modal.classList.add("active");
    }
  });
});
// Close modal when clicking X
modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
});

// Close modal when clicking outside
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

// Close modal with ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    modal.classList.remove("active");
  }
});

// ===== NAVBAR FUNCTIONALITY =====
const navbar = document.getElementById("navbar")
const navMenu = document.getElementById("navMenu")
const hamburger = document.getElementById("hamburger")
const navLinks = document.querySelectorAll(".nav-link")

// Hamburger menu toggle
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  hamburger.classList.toggle("active")
})

// Close menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    hamburger.classList.remove("active")
  })
})

// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll("section")

function setActiveLink() {
  const scrollPosition = window.scrollY + 100

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active")
        }
      })
    }
  })
}

window.addEventListener("scroll", setActiveLink)

// ===== PARALLAX EFFECT =====
const parallaxBg = document.querySelector(".parallax-bg")

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  if (parallaxBg) {
    parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})

// ===== ANIMATED COUNTER FOR STATS =====
function animateCounter(element, target) {
  let current = 0
  const increment = target / 100
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      element.textContent = target
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(current)
    }
  }, 20)
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("aos-animate")

      // Animate stats counter
      if (entry.target.classList.contains("stat-number")) {
        const target = Number.parseInt(entry.target.getAttribute("data-count"))
        animateCounter(entry.target, target)
      }

      // Animate skill bars
      if (entry.target.classList.contains("skill-card")) {
        const progressBar = entry.target.querySelector(".skill-progress")
        if (progressBar) {
          const width = progressBar.style.width
          progressBar.style.width = "0"
          setTimeout(() => {
            progressBar.style.width = width
          }, 100)
        }
      }
    }
  })
}, observerOptions)

// Observe all animated elements
document.querySelectorAll("[data-aos]").forEach((element) => {
  observer.observe(element)
})

// Observe stat numbers
document.querySelectorAll(".stat-number").forEach((element) => {
  observer.observe(element)
})

// Observe skill cards
document.querySelectorAll(".skill-card").forEach((element) => {
  observer.observe(element)
})

// ===== TYPING EFFECT =====
const typingText = document.querySelector(".typing-text")
const textArray = ["Muhammad Hatta", "Web Developer", "Designer Kreatif", "Math Enthusiast"]
let textArrayIndex = 0
let charIndex = 0
let isDeleting = false

function typeEffect() {
  const currentText = textArray[textArrayIndex]

  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex - 1)
    charIndex--
  } else {
    typingText.textContent = currentText.substring(0, charIndex + 1)
    charIndex++
  }

  let typeSpeed = isDeleting ? 50 : 100

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    textArrayIndex = (textArrayIndex + 1) % textArray.length
    typeSpeed = 500
  }

  setTimeout(typeEffect, typeSpeed)
}

// Start typing effect
if (typingText) {
  setTimeout(typeEffect, 1000)
}

// ===== SMOOTH SCROLL ENHANCEMENT =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// ===== CONTACT FORM SUBMISSION =====
const contactForm = document.getElementById("contactForm")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    // Simple validation
    if (name && email && message) {
      // Show success message
      alert(`Terima kasih ${name}! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda.`)

      // Reset form
      contactForm.reset()
    } else {
      alert("Mohon lengkapi semua field!")
    }
  })
}

// ===== CURSOR TRAIL EFFECT (OPTIONAL) =====
document.addEventListener("mousemove", (e) => {
  // Create cursor trail element
  const trail = document.createElement("div")
  trail.className = "cursor-trail"
  trail.style.left = e.pageX + "px"
  trail.style.top = e.pageY + "px"

  document.body.appendChild(trail)

  // Remove after animation
  setTimeout(() => {
    trail.remove()
  }, 1000)
})

// Add cursor trail styles dynamically
const style = document.createElement("style")
style.textContent = `
    .cursor-trail {
        position: absolute;
        width: 10px;
        height: 10px;
        background: radial-gradient(circle, rgba(0, 212, 255, 0.5) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        animation: trailFade 1s ease-out forwards;
        z-index: 9999;
    }
    
    @keyframes trailFade {
        to {
            opacity: 0;
            transform: scale(2);
        }
    }
`
document.head.appendChild(style)

// ===== PARALLAX EFFECT FOR SECTIONS =====
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset

  // Parallax for hero section
  const heroSection = document.querySelector(".hero-section")
  if (heroSection) {
    heroSection.style.transform = `translateY(${scrolled * 0.3}px)`
  }

  // Parallax for project images
  document.querySelectorAll(".project-image img").forEach((img) => {
    const rect = img.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const offset = (window.innerHeight - rect.top) * 0.1
      img.style.transform = `translateY(${offset}px)`
    }
  })
})

// ===== LOADING ANIMATION =====
window.addEventListener("load", () => {
  document.body.style.opacity = "0"
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease-in"
    document.body.style.opacity = "1"
  }, 100)
})

// ===== VISITOR TABLE MANAGEMENT =====
let visitors = JSON.parse(localStorage.getItem('portfolioVisitors')) || [];
let currentPage = 1;
const itemsPerPage = 5;

// Inisialisasi tabel pengunjung
function initVisitorTable() {
    const form = document.getElementById('visitorForm');
    const clearBtn = document.getElementById('clearForm');
    const refreshBtn = document.getElementById('refreshTable');
    const exportBtn = document.getElementById('exportTable');
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');

    if (form) {
        form.addEventListener('submit', handleVisitorSubmit);
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', clearForm);
    }

    if (refreshBtn) {
        refreshBtn.addEventListener('click', refreshTable);
    }

    if (exportBtn) {
        exportBtn.addEventListener('click', exportToCSV);
    }

    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', () => changePage(currentPage - 1));
    }

    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', () => changePage(currentPage + 1));
    }

    // Load data dari localStorage
    loadVisitors();
    renderTable();
    updatePagination();
}

// Handle form submission
function handleVisitorSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('visitorName').value.trim();
    const email = document.getElementById('visitorEmail').value.trim();
    const phone = document.getElementById('visitorPhone').value.trim();
    const message = document.getElementById('visitorMessage').value.trim();
    const status = document.getElementById('visitorStatus').value;
    
    if (!name || !email || !message) {
        showNotification('Harap isi semua field yang wajib diisi!', 'error');
        return;
    }
    
    const visitor = {
        id: Date.now(),
        name,
        email,
        phone: phone || 'Tidak diisi',
        message,
        status,
        date: new Date().toLocaleString('id-ID'),
        timestamp: Date.now()
    };
    
    visitors.unshift(visitor); // Tambah di awal array
    saveVisitors();
    renderTable();
    updatePagination();
    showNotification(`Data ${name} berhasil ditambahkan!`, 'success');
    e.target.reset();
}

// Clear form
function clearForm() {
    document.getElementById('visitorForm').reset();
    showNotification('Form telah dibersihkan', 'info');
}

// Refresh table
function refreshTable() {
    loadVisitors();
    renderTable();
    updatePagination();
    showNotification('Tabel diperbarui', 'info');
}

// Export to CSV
function exportToCSV() {
    if (visitors.length === 0) {
        showNotification('Tidak ada data untuk diexport', 'error');
        return;
    }
    
    const headers = ['No', 'Nama', 'Email', 'Telepon', 'Pesan', 'Status', 'Tanggal'];
    const csvRows = [headers.join(',')];
    
    visitors.forEach((visitor, index) => {
        const row = [
            index + 1,
            `"${visitor.name}"`,
            `"${visitor.email}"`,
            `"${visitor.phone}"`,
            `"${visitor.message.replace(/"/g, '""')}"`,
            visitor.status,
            `"${visitor.date}"`
        ];
        csvRows.push(row.join(','));
    });
    
    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    
    a.href = url;
    a.download = `pengunjung-portfolio_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    showNotification('Data berhasil diexport ke CSV', 'success');
}

// Render table
function renderTable() {
    const tbody = document.getElementById('visitorTableBody');
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageVisitors = visitors.slice(startIndex, endIndex);
    
    if (visitors.length === 0) {
        tbody.innerHTML = `
            <tr class="empty-row">
                <td colspan="6" class="empty-message">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <p>Belum ada data pengunjung</p>
                    <p class="sub-message">Mulai dengan menambahkan data pengunjung baru</p>
                </td>
            </tr>
        `;
        return;
    }
    
    let html = '';
    
    pageVisitors.forEach((visitor, index) => {
        const globalIndex = startIndex + index + 1;
        const statusClass = getStatusClass(visitor.status);
        
        html += `
            <tr data-id="${visitor.id}">
                <td>${globalIndex}</td>
                <td>
                    <div class="visitor-name">${visitor.name}</div>
                    <div class="visitor-date">${visitor.date}</div>
                </td>
                <td>${visitor.email}</td>
                <td>${visitor.phone}</td>
                <td><span class="status-badge ${statusClass}">${visitor.status}</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="edit-btn" onclick="editVisitor(${visitor.id})">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                            Edit
                        </button>
                        <button class="delete-btn" onclick="deleteVisitor(${visitor.id})">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                            Hapus
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });
    
    tbody.innerHTML = html;
    document.getElementById('visitorCount').textContent = visitors.length;
}

// Get status class
function getStatusClass(status) {
    const statusMap = {
        'Baru': 'new',
        'Follow-up': 'follow-up',
        'Diterima': 'accepted',
        'Ditolak': 'rejected'
    };
    return statusMap[status] || 'new';
}

// Edit visitor
function editVisitor(id) {
    const visitor = visitors.find(v => v.id === id);
    if (!visitor) return;
    
    document.getElementById('visitorName').value = visitor.name;
    document.getElementById('visitorEmail').value = visitor.email;
    document.getElementById('visitorPhone').value = visitor.phone;
    document.getElementById('visitorMessage').value = visitor.message;
    document.getElementById('visitorStatus').value = visitor.status;
    
    // Ubah tombol submit untuk edit
    const form = document.getElementById('visitorForm');
    const submitBtn = form.querySelector('.submit-button-new');
    
    submitBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
            <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
        </svg>
        Update Data
    `;
    
    // Simpan ID visitor yang sedang diedit
    form.dataset.editingId = id;
    
    // Ubah event listener
    form.removeEventListener('submit', handleVisitorSubmit);
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('visitorName').value.trim();
        const email = document.getElementById('visitorEmail').value.trim();
        const phone = document.getElementById('visitorPhone').value.trim();
        const message = document.getElementById('visitorMessage').value.trim();
        const status = document.getElementById('visitorStatus').value;
        
        if (!name || !email || !message) {
            showNotification('Harap isi semua field yang wajib diisi!', 'error');
            return;
        }
        
        const index = visitors.findIndex(v => v.id === id);
        if (index !== -1) {
            visitors[index] = {
                ...visitors[index],
                name,
                email,
                phone: phone || 'Tidak diisi',
                message,
                status
            };
            
            saveVisitors();
            renderTable();
            showNotification(`Data ${name} berhasil diperbarui!`, 'success');
            
            // Reset form
            form.reset();
            delete form.dataset.editingId;
            
            // Kembalikan tombol ke semula
            submitBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 5v14M5 12h14"></path>
                </svg>
                Tambah Pengunjung
            `;
            
            // Kembalikan event listener
            form.removeEventListener('submit', arguments.callee);
            form.addEventListener('submit', handleVisitorSubmit);
        }
    });
    
    showNotification(`Mengedit data: ${visitor.name}`, 'info');
}

// Delete visitor
function deleteVisitor(id) {
    if (!confirm('Apakah Anda yakin ingin menghapus data ini?')) {
        return;
    }
    
    const visitor = visitors.find(v => v.id === id);
    if (!visitor) return;
    
    visitors = visitors.filter(v => v.id !== id);
    saveVisitors();
    
    // Jika halaman terakhir hanya memiliki 1 item, kembali ke halaman sebelumnya
    const totalPages = Math.ceil(visitors.length / itemsPerPage);
    if (currentPage > totalPages) {
        currentPage = Math.max(1, totalPages);
    }
    
    renderTable();
    updatePagination();
    showNotification(`Data ${visitor.name} berhasil dihapus`, 'success');
}

// Change page
function changePage(page) {
    const totalPages = Math.ceil(visitors.length / itemsPerPage);
    
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderTable();
    updatePagination();
}

// Update pagination
function updatePagination() {
    const totalPages = Math.ceil(visitors.length / itemsPerPage);
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    const currentPageSpan = document.getElementById('currentPage');
    const totalPagesSpan = document.getElementById('totalPages');
    
    currentPageSpan.textContent = currentPage;
    totalPagesSpan.textContent = totalPages;
    
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
}

// Save visitors to localStorage
function saveVisitors() {
    localStorage.setItem('portfolioVisitors', JSON.stringify(visitors));
}

// Load visitors from localStorage
function loadVisitors() {
    const stored = localStorage.getItem('portfolioVisitors');
    visitors = stored ? JSON.parse(stored) : [];
}

// Show notification
function showNotification(message, type = 'info') {
    // Buat elemen notifikasi
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${type === 'success' ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>' : 
                  type === 'error' ? '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>' :
                  '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>'}
            </svg>
            <span>${message}</span>
        </div>
    `;
    
    // Tambahkan ke body
    document.body.appendChild(notification);
    
    // Animasi masuk
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Hapus setelah 3 detik
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add notification styles
function addNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            background: var(--bg-card);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: var(--shadow-lg);
            z-index: 9999;
            transform: translateX(120%);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            min-width: 300px;
            max-width: 400px;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification.success {
            border-left: 4px solid #00ff88;
        }
        
        .notification.error {
            border-left: 4px solid #ff006e;
        }
        
        .notification.info {
            border-left: 4px solid #00d4ff;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            color: var(--text-primary);
        }
        
        .notification-content svg {
            flex-shrink: 0;
        }
        
        .notification.success svg {
            color: #00ff88;
        }
        
        .notification.error svg {
            color: #ff006e;
        }
        
        .notification.info svg {
            color: #00d4ff;
        }
    `;
    document.head.appendChild(style);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi tabel pengunjung
    initVisitorTable();
    
    // Tambahkan styles notifikasi
    addNotificationStyles();
    
    // Tambahkan beberapa data dummy untuk contoh (opsional)
    if (visitors.length === 0) {
        const dummyVisitors = [
            {
                id: 1,
                name: 'Budi Santoso',
                email: 'budi.santoso@example.com',
                phone: '+62 812-3456-7891',
                message: 'Sangat tertarik dengan project Robot Avoider Anda!',
                status: 'Baru',
                date: new Date().toLocaleString('id-ID'),
                timestamp: Date.now()
            },
            {
                id: 2,
                name: 'Sari Dewi',
                email: 'sari.dewi@example.com',
                phone: '+62 823-4567-8902',
                message: 'Portfolio website Anda sangat inspiratif!',
                status: 'Follow-up',
                date: new Date(Date.now() - 86400000).toLocaleString('id-ID'),
                timestamp: Date.now() - 86400000
            }
        ];
        
        visitors = dummyVisitors;
        saveVisitors();
        renderTable();
        updatePagination();
    }
});

// ===== VISITOR TABLE FOR COMPACT LAYOUT =====
function initCompactVisitorTable() {
    const form = document.getElementById('visitorForm');
    const clearBtn = document.getElementById('clearForm');
    const refreshBtn = document.getElementById('refreshTable');
    const exportBtn = document.getElementById('exportTable');
    const prevBtn = document.getElementById('prevPageCompact');
    const nextBtn = document.getElementById('nextPageCompact');

    if (form) {
        form.addEventListener('submit', handleCompactVisitorSubmit);
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            form.reset();
            showNotification('Form telah direset', 'info');
        });
    }

    if (refreshBtn) {
        refreshBtn.addEventListener('click', refreshCompactTable);
    }

    if (exportBtn) {
        exportBtn.addEventListener('click', exportCompactToCSV);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => changeCompactPage(currentPage - 1));
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => changeCompactPage(currentPage + 1));
    }

    renderCompactTable();
    updateCompactPagination();
}

function handleCompactVisitorSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('visitorName').value.trim();
    const email = document.getElementById('visitorEmail').value.trim();
    const phone = document.getElementById('visitorPhone').value.trim();
    const message = document.getElementById('visitorMessage').value.trim();
    const status = document.getElementById('visitorStatus').value;
    
    if (!name || !email || !message) {
        showNotification('Harap isi semua field yang wajib diisi!', 'error');
        return;
    }
    
    const visitor = {
        id: Date.now(),
        name,
        email,
        phone: phone || 'Tidak diisi',
        message,
        status,
        date: new Date().toLocaleString('id-ID'),
        timestamp: Date.now()
    };
    
    visitors.unshift(visitor);
    saveVisitors();
    renderCompactTable();
    updateCompactPagination();
    showNotification(`Data ${name} berhasil ditambahkan!`, 'success');
    e.target.reset();
}

function renderCompactTable() {
    const tbody = document.getElementById('visitorTableBodyCompact');
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageVisitors = visitors.slice(startIndex, endIndex);
    
    if (visitors.length === 0) {
        tbody.innerHTML = `
            <tr class="empty-message-row">
                <td colspan="5" class="empty-table-message">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <p>Belum ada data pengunjung</p>
                    <p class="sub-text">Tambahkan data pengunjung baru</p>
                </td>
            </tr>
        `;
        return;
    }
    
    let html = '';
    
    pageVisitors.forEach((visitor, index) => {
        const globalIndex = startIndex + index + 1;
        const statusClass = getStatusClass(visitor.status) + '-compact';
        
        html += `
            <tr data-id="${visitor.id}">
                <td>${globalIndex}</td>
                <td>
                    <div class="visitor-name">${visitor.name}</div>
                    <div class="visitor-date-small">${visitor.date.split(',')[0]}</div>
                </td>
                <td>${visitor.email}</td>
                <td><span class="status-badge-compact ${statusClass}">${visitor.status}</span></td>
                <td>
                    <div class="table-actions-compact">
                        <button class="action-btn-compact edit" onclick="editCompactVisitor(${visitor.id})" title="Edit">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                        </button>
                        <button class="action-btn-compact delete" onclick="deleteCompactVisitor(${visitor.id})" title="Hapus">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });
    
    tbody.innerHTML = html;
    document.getElementById('visitorCountCompact').textContent = visitors.length;
}

function editCompactVisitor(id) {
    const visitor = visitors.find(v => v.id === id);
    if (!visitor) return;
    
    // Isi form dengan data visitor
    document.getElementById('visitorName').value = visitor.name;
    document.getElementById('visitorEmail').value = visitor.email;
    document.getElementById('visitorPhone').value = visitor.phone === 'Tidak diisi' ? '' : visitor.phone;
    document.getElementById('visitorMessage').value = visitor.message;
    document.getElementById('visitorStatus').value = visitor.status;
    
    // Ubah form untuk mode edit
    const form = document.getElementById('visitorForm');
    const submitBtn = form.querySelector('.submit-button-compact');
    
    submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
            <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
        </svg>
        Update Data
    `;
    
    // Simpan ID visitor yang diedit
    form.dataset.editingId = id;
    
    // Ubah event listener
    form.removeEventListener('submit', handleCompactVisitorSubmit);
    form.addEventListener('submit', function handleEdit(e) {
        e.preventDefault();
        
        const name = document.getElementById('visitorName').value.trim();
        const email = document.getElementById('visitorEmail').value.trim();
        const phone = document.getElementById('visitorPhone').value.trim();
        const message = document.getElementById('visitorMessage').value.trim();
        const status = document.getElementById('visitorStatus').value;
        
        const index = visitors.findIndex(v => v.id === id);
        if (index !== -1) {
            visitors[index] = {
                ...visitors[index],
                name,
                email,
                phone: phone || 'Tidak diisi',
                message,
                status,
                date: new Date().toLocaleString('id-ID')
            };
            
            saveVisitors();
            renderCompactTable();
            updateCompactPagination();
            showNotification(`Data ${name} berhasil diperbarui!`, 'success');
            
            // Reset form
            form.reset();
            delete form.dataset.editingId;
            
            // Kembalikan tombol
            submitBtn.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 5v14M5 12h14"></path>
                </svg>
                Tambah Data
            `;
            
            // Kembalikan event listener
            form.removeEventListener('submit', handleEdit);
            form.addEventListener('submit', handleCompactVisitorSubmit);
        }
    });
    
    showNotification(`Mengedit data: ${visitor.name}`, 'info');
}

function deleteCompactVisitor(id) {
    if (!confirm('Apakah Anda yakin ingin menghapus data ini?')) {
        return;
    }
    
    const visitor = visitors.find(v => v.id === id);
    if (!visitor) return;
    
    visitors = visitors.filter(v => v.id !== id);
    saveVisitors();
    
    // Adjust page jika perlu
    const totalPages = Math.ceil(visitors.length / itemsPerPage);
    if (currentPage > totalPages) {
        currentPage = Math.max(1, totalPages);
    }
    
    renderCompactTable();
    updateCompactPagination();
    showNotification(`Data ${visitor.name} berhasil dihapus`, 'success');
}

function refreshCompactTable() {
    loadVisitors();
    renderCompactTable();
    updateCompactPagination();
    showNotification('Tabel diperbarui', 'info');
}

function exportCompactToCSV() {
    if (visitors.length === 0) {
        showNotification('Tidak ada data untuk diexport', 'error');
        return;
    }
    
    const headers = ['No', 'Nama', 'Email', 'Telepon', 'Pesan', 'Status', 'Tanggal'];
    const csvRows = [headers.join(',')];
    
    visitors.forEach((visitor, index) => {
        const row = [
            index + 1,
            `"${visitor.name}"`,
            `"${visitor.email}"`,
            `"${visitor.phone}"`,
            `"${visitor.message.replace(/"/g, '""')}"`,
            visitor.status,
            `"${visitor.date}"`
        ];
        csvRows.push(row.join(','));
    });
    
    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    
    a.href = url;
    a.download = `data-pengunjung_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    showNotification('Data berhasil diexport ke CSV', 'success');
}

function changeCompactPage(page) {
    const totalPages = Math.ceil(visitors.length / itemsPerPage);
    
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderCompactTable();
    updateCompactPagination();
}

function updateCompactPagination() {
    const totalPages = Math.ceil(visitors.length / itemsPerPage);
    const prevBtn = document.getElementById('prevPageCompact');
    const nextBtn = document.getElementById('nextPageCompact');
    const currentPageSpan = document.getElementById('currentPageCompact');
    const totalPagesSpan = document.getElementById('totalPagesCompact');
    
    if (currentPageSpan) currentPageSpan.textContent = currentPage;
    if (totalPagesSpan) totalPagesSpan.textContent = totalPages;
    
    if (prevBtn) prevBtn.disabled = currentPage === 1;
    if (nextBtn) nextBtn.disabled = currentPage === totalPages || totalPages === 0;
}

// Initialize compact table when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the compact visitor table
    initCompactVisitorTable();
    
    // Load initial data jika kosong
    if (visitors.length === 0) {
        const dummyVisitors = [
            {
                id: 1,
                name: 'Budi Santoso',
                email: 'budi.santoso@example.com',
                phone: '+62 812-3456-7891',
                message: 'Sangat tertarik dengan project Robot Avoider Anda!',
                status: 'Baru',
                date: new Date().toLocaleString('id-ID'),
                timestamp: Date.now()
            },
            {
                id: 2,
                name: 'Sari Dewi',
                email: 'sari.dewi@example.com',
                phone: '+62 823-4567-8902',
                message: 'Portfolio website Anda sangat inspiratif!',
                status: 'Follow-up',
                date: new Date(Date.now() - 86400000).toLocaleString('id-ID'),
                timestamp: Date.now() - 86400000
            }
        ];
        
        visitors = dummyVisitors;
        saveVisitors();
        renderCompactTable();
        updateCompactPagination();
    }
});

console.log("Portfolio website loaded successfully! ✨")

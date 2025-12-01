// Project descriptions database (disimpan di localStorage)
const projectDescriptions = {
  'proj-a': 'Robot Avoider adalah proyek pertama saya yang menggabungkan Arduino dengan sensor ultrasonik. Alat ini mampu mendeteksi hambatan dan secara otomatis mengubah arah gerakannya. Teknologi...',
  'proj-b': 'SmartHome Device adalah sistem otomasi rumah pintar yang mengintegrasikan berbagai sensor dan aktuator. Sistem ini dapat dikontrol melalui aplikasi mobile dan website. Fitur-fitur menc...',
  'proj-c': 'Alat Pengukur Jarak adalah perangkat yang menggunakan teknologi ultrasonic untuk mengukur jarak dengan akurasi tinggi. Hasil pengukuran ditampilkan pada layar LCD dan dapat direkam dal...',
};

// Load descriptions from localStorage
function loadProjectDescriptions() {
  const saved = localStorage.getItem('projectDescriptions');
  if (saved) {
    try {
      Object.assign(projectDescriptions, JSON.parse(saved));
    } catch (e) {
      console.error('Error loading descriptions:', e);
    }
  }
}

// Save descriptions to localStorage
function saveProjectDescriptions() {
  localStorage.setItem('projectDescriptions', JSON.stringify(projectDescriptions));
}

// Project modal handler
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = modal.querySelector('.modal-close');
  const modalOverlay = modal.querySelector('.modal-overlay');
  const editBtn = document.getElementById('edit-description-btn');
  const saveBtn = document.getElementById('save-description-btn');
  const cancelBtn = document.getElementById('cancel-edit-btn');
  const descriptionContainer = modal.querySelector('.modal-description-container');
  const editContainer = modal.querySelector('.modal-edit-container');
  const descriptionInput = document.getElementById('description-input');
  const descriptionText = modal.querySelector('#modal-description');
  let currentProjectId = null;

  // Open modal
  document.querySelectorAll('.card-project .btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      currentProjectId = btn.dataset.project;
      const card = btn.closest('.card-project');
      const title = card.querySelector('h3').textContent;
      const desc = projectDescriptions[currentProjectId] || '';

      document.getElementById('modal-title').textContent = title;
      descriptionText.textContent = desc;
      descriptionInput.value = desc;
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal
  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
    descriptionContainer.style.display = 'block';
    editContainer.style.display = 'none';
    currentProjectId = null;
  }

  closeBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      closeModal();
    }
  });

  // Edit mode
  editBtn.addEventListener('click', () => {
    descriptionContainer.style.display = 'none';
    editContainer.style.display = 'block';
    descriptionInput.focus();
  });

  cancelBtn.addEventListener('click', () => {
    descriptionContainer.style.display = 'block';
    editContainer.style.display = 'none';
    descriptionInput.value = projectDescriptions[currentProjectId] || '';
  });

  // Save description
  saveBtn.addEventListener('click', () => {
    const newDescription = descriptionInput.value.trim();
    if (newDescription) {
      projectDescriptions[currentProjectId] = newDescription;
      saveProjectDescriptions();
      descriptionText.textContent = newDescription;
      descriptionContainer.style.display = 'block';
      editContainer.style.display = 'none';
    }
  });

  // Save on Enter (when focused on textarea)
  descriptionInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      saveBtn.click();
    }
  });
}

// Initialize project descriptions and modal
loadProjectDescriptions();
initProjectModal();

// ------- Navbar functionality and smooth scroll after DOM loaded -------
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navItems = document.querySelectorAll('.nav-menu-item');

  // Navbar toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Smooth scroll on click + close menu mobile
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      const targetId = item.getAttribute('href');
      if (targetId && targetId[0] === '#') {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      // Tutup nav mobile
      if (window.innerWidth <= 900 && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    });
  });
});
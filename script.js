// Fungsi untuk toggle mode gelap
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}

// Fungsi untuk mengatur visibilitas elemen berdasarkan ukuran layar
function checkScreenSize() {
  const screenWidth = window.innerWidth;
  const someElement = document.getElementById('someElement');

  if (screenWidth < 768) {
    someElement.style.display = 'none'; 
  } else {
    someElement.style.display = 'block'; 
  }
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    //  Kode untuk jam digital
    const options = {
        timeZone: 'Asia/Makassar', 
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };
    const formattedTime = now.toLocaleString('id-ID', options); 
    document.getElementById('digital-clock').textContent = formattedTime;
}

setInterval(updateClock, 1000);
updateClock();

// Event listeners untuk ukuran layar
window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);

// Untuk navigasi titik tiga
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    menuToggle.setAttribute('aria-expanded', sidebar.classList.contains('show'));
});

// Untuk pop-up tooltips
const links = document.querySelectorAll('.link');
links.forEach(link => {
  link.addEventListener('mouseover', () => {
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = link.dataset.tooltip;
    document.body.appendChild(tooltip);

    const rect = link.getBoundingClientRect();
    tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
    tooltip.style.top = `${rect.bottom + 10}px`;
  });

  link.addEventListener('mouseout', () => {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
      document.body.removeChild(tooltip);
    }
  });
});

// Menambahkan efek parallax pada bagian "About Me"
window.addEventListener('scroll', function() {
  const aboutMeSection = document.querySelector('.about-me'); 
  const scrollPosition = window.pageYOffset;
  const parallaxValue = scrollPosition / 2; 
  aboutMeSection.style.backgroundPosition = 'center ' + parallaxValue + 'px';
});
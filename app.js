const VILLA_ADDRESS =
  'Jl. Raya Puncak KM. 83, Leuwimalang, Cisarua, Tugu Utara, Kecamatan Cisarua, Kabupaten Bogor, Jawa Barat 16750';

const FACILITIES = [
  { name: 'Bangunan', detail: '3 lantai', icon: 'building' },
  { name: 'Kamar tidur', detail: '12 kamar', icon: 'bed' },
  { name: 'Kamar mandi', detail: '14 kamar mandi', icon: 'bath' },
  { name: 'Area', detail: 'Area private', icon: 'shield' },
  { name: 'Hiburan', detail: 'TV dan karaoke', icon: 'tv' },
  { name: 'Internet', detail: 'Free Wi-Fi', icon: 'wifi' },
  { name: 'Rekreasi', detail: 'Biliar', icon: 'billiard' },
  { name: 'Kolam renang', detail: 'Kolam renang private', icon: 'pool' },
  { name: 'Ruang tamu', detail: '3 ruang tamu nyaman', icon: 'sofa' },
  { name: 'Ruang keluarga', detail: 'Tersedia', icon: 'users' },
  { name: 'Dapur', detail: '3 dapur beserta peralatannya', icon: 'kitchen' },
  { name: 'Peralatan makan', detail: 'Peralatan makan lengkap', icon: 'utensils' },
  { name: 'BBQ', detail: 'Peralatan BBQ', icon: 'flame' },
  { name: 'Area parkir', detail: 'Kapasitas hingga 10 mobil', icon: 'car' },
];

const GALLERY_FILES = [
  'WhatsApp Image 2026-11-15 at 22.28.48.jpeg',
  'WhatsApp Image 2026-11-15 at 22.28.49.jpeg',
  'WhatsApp Image 2026-11-15 at 22.28.50.jpeg',
  'WhatsApp Image 2026-11-15 at 22.28.53.jpeg',
  'WhatsApp Image 2026-11-15 at 22.28.54 (1).jpeg',
  'WhatsApp Image 2026-11-15 at 22.28.54 (2).jpeg',
  'WhatsApp Image 2026-11-15 at 22.28.54.jpeg',
  'WhatsApp Image 2026-11-15 at 22.28.55 (1).jpeg',
  'WhatsApp Image 2026-11-15 at 22.28.55 (2).jpeg',
  'WhatsApp Image 2026-11-15 at 22.28.55 (3).jpeg',
  'WhatsApp Image 2026-11-15 at 22.28.55.jpeg',
  'WhatsApp Image 2026-11-15 at 22.28.56 (1).jpeg',
  'WhatsApp Image 2026-11-15 at 22.28.56 (2).jpeg',
  'WhatsApp Image 2026-11-15 at 22.28.56 (3).jpeg',
  'WhatsApp Image 2026-11-15 at 22.28.56.jpeg',
  'WhatsApp Image 2026-11-15 at 22.28.57 (1).jpeg',
  'WhatsApp Image 2026-11-15 at 22.28.57 (2).jpeg',
  'WhatsApp Image 2026-11-15 at 22.28.57 (3).jpeg',
  'WhatsApp Image 2026-11-15 at 22.28.57.jpeg',
  'WhatsApp Image 2026-11-15 at 22.28.58 (1).jpeg',
  'WhatsApp Image 2026-11-15 at 22.28.58 (2).jpeg',
  'WhatsApp Image 2026-11-15 at 22.28.58 (3).jpeg',
  'WhatsApp Image 2026-11-15 at 22.28.58.jpeg',
  'WhatsApp Image 2026-11-15 at 22.28.59 (1).jpeg',
  'WhatsApp Image 2026-11-15 at 22.28.59 (2).jpeg',
  'WhatsApp Image 2026-11-15 at 22.28.59.jpeg',
  'WhatsApp Image 2026-11-15 at 22.29.00 (1).jpeg',
  'WhatsApp Image 2026-11-15 at 22.29.00 (2).jpeg',
  'WhatsApp Image 2026-11-15 at 22.29.00 (3).jpeg',
  'WhatsApp Image 2026-11-15 at 22.29.00.jpeg',
  'WhatsApp Image 2026-11-15 at 22.29.01 (1).jpeg',
  'WhatsApp Image 2026-11-15 at 22.29.01 (2).jpeg',
  'WhatsApp Image 2026-11-15 at 22.29.01 (3).jpeg',
  'WhatsApp Image 2026-11-15 at 22.29.01.jpeg',
  'WhatsApp Image 2026-11-15 at 22.29.02 (1).jpeg',
  'WhatsApp Image 2026-11-15 at 22.29.02 (2).jpeg',
  'WhatsApp Image 2026-11-15 at 22.29.02.jpeg',
  'WhatsApp Image 2026-11-15 at 22.29.03 (1).jpeg',
  'WhatsApp Image 2026-11-15 at 22.29.03 (2).jpeg',
  'WhatsApp Image 2026-11-15 at 22.29.03 (3).jpeg',
  'WhatsApp Image 2026-11-15 at 22.29.03.jpeg',
  'WhatsApp Image 2026-11-15 at 22.29.04 (1).jpeg',
  'WhatsApp Image 2026-11-15 at 22.29.04 (2).jpeg',
  'WhatsApp Image 2026-11-15 at 22.29.04 (3).jpeg',
  'WhatsApp Image 2026-11-15 at 22.29.04.jpeg',
];

const FAQ_CATEGORIES = [
  'Semua',
  'Transportasi',
  'Tanggal & Konsumsi',
  'Lokasi & Vila',
  'Registrasi & Oprec',
  'Administrasi',
];

const FAQ_ITEMS = [
  {
    category: 'Transportasi',
    q: 'Apakah transportasi menuju lokasi Makrab disediakan oleh panitia atau peserta harus menggunakan kendaraan pribadi?',
    a: 'Saat ini PO/VPO sedang mengupayakan penyediaan transportasi bersama bagi peserta, salah satunya melalui pencarian bus atau alternatif transportasi kolektif lainnya. Namun, hal ini juga perlu mempertimbangkan anggaran agar biaya transportasi tidak membuat HTM menjadi terlalu mahal dan tetap <em>affordable</em> bagi seluruh peserta. Apabila ada peserta yang memiliki koneksi atau rekomendasi penyedia transportasi, silakan menghubungi panitia untuk membantu proses pencarian.',
  },
  {
    category: 'Transportasi',
    q: 'Apabila pada akhirnya peserta harus menggunakan kendaraan pribadi, bagaimana dengan peserta yang tidak memiliki kendaraan atau keberatan membawa kendaraan pribadi?',
    a: 'Hal ini masih menjadi salah satu pertimbangan panitia. Kami memahami bahwa tidak semua peserta memiliki kendaraan pribadi atau dapat menggunakannya untuk menuju lokasi. Oleh karena itu, penyediaan transportasi kolektif masih terus diupayakan sebagai salah satu solusi agar seluruh peserta dapat mengikuti kegiatan tanpa terkendala transportasi. Keputusan mengenai skema transportasi akan diinformasikan setelah proses pertimbangan dan perencanaan anggaran selesai.',
  },
  {
    category: 'Tanggal & Konsumsi',
    q: 'Kapan perkiraan tanggal pelaksanaan Makrab? Apakah sudah terdapat tanggal atau opsi tanggal yang dapat dipertimbangkan?',
    a: 'Untuk sementara, pelaksanaan Makrab direncanakan berada dalam rentang <strong>18–23 Januari 2027</strong>. Rentang tanggal tersebut mempertimbangkan kalender akademik PNJ, yaitu periode libur semester pada <strong>18–29 Januari 2027</strong>. Meskipun demikian, tanggal pastinya masih akan disesuaikan dengan kesiapan panitia dan kebutuhan teknis kegiatan.',
  },
  {
    category: 'Administrasi',
    q: 'Apakah panitia akan menyediakan surat pertanggungjawaban (SPJ), surat izin resmi, atau surat yang mencantumkan penanggung jawab kegiatan?',
    a: 'Terkait surat izin perkuliahan, pada dasarnya tidak diperlukan karena kegiatan direncanakan berlangsung pada masa libur semester. Sementara itu, perlu dipahami bahwa Makrab ini merupakan kegiatan yang diinisiasi oleh Angkatan MICE 2026 dan bukan merupakan agenda resmi PNJ, sehingga penerbitan surat resmi atas nama institusi perlu mempertimbangkan ketentuan dan persetujuan pihak kampus.<br><br>Namun, apabila yang dimaksud adalah <strong>surat pemberitahuan atau surat informasi kegiatan untuk orang tua/wali</strong>, panitia akan mengusahakan penyediaannya agar orang tua memiliki pegangan informasi kegiatan termasuk penanggung jawabnya. Adapun mengenai SPJ atau dokumen pertanggungjawaban kegiatan masih perlu dikoordinasikan lebih lanjut dengan PO/VPO.',
  },
  {
    category: 'Registrasi & Oprec',
    q: 'Mengapa Open Recruitment (Oprec) volunteer dan Open Registration (Oreg) peserta dilaksanakan secara bersamaan? Mengapa tidak Oprec terlebih dahulu?',
    a: 'Hal ini merupakan bagian dari strategi perencanaan panitia. Kami perlu memperoleh gambaran awal mengenai jumlah mahasiswa yang berminat mengikuti Makrab terlebih dahulu agar dapat menentukan kebutuhan volunteer pada setiap divisi secara proporsional. Mengingat volunteer yang bertugas juga berasal dari mahasiswa MICE 2026, jumlah panitia perlu disesuaikan dengan jumlah peserta agar komposisinya tetap seimbang dan rekrutmen sesuai kebutuhan aktual acara.',
  },
  {
    category: 'Registrasi & Oprec',
    q: 'Apakah Google Form pendaftaran peserta sudah bersifat final atau hanya digunakan untuk memperoleh estimasi jumlah peserta?',
    a: 'Untuk sementara, Google Form pendaftaran peserta (<a href="https://bit.ly/MakrabMICE_Tahanan" target="_blank" rel="noopener noreferrer">bit.ly/MakrabMICE_Tahanan</a>) digunakan sebagai <strong>pendataan awal</strong> untuk memperoleh estimasi jumlah mahasiswa yang berminat mengikuti Makrab. Di dalam formulir juga tersedia pilihan bagi mahasiswa yang belum dapat atau tidak berencana mengikuti kegiatan beserta kolom alasannya sebagai bahan pertimbangan perencanaan panitia. Status final formulir tetap akan dikonfirmasi kembali kepada PO/VPO.',
  },
  {
    category: 'Registrasi & Oprec',
    q: 'Apakah pendaftaran volunteer sudah dibuka?',
    a: 'Hingga saat ini, Google Form pendaftaran volunteer <strong>belum dibuka atau dipublikasikan</strong>. Informasi mengenai pembukaan pendaftaran volunteer akan disampaikan oleh panitia setelah tahap pendataan awal peserta dan perencanaan kebutuhan setiap divisi selesai dilakukan.',
  },
  {
    category: 'Tanggal & Konsumsi',
    q: 'Berapa biaya HTM (Harga Tiket Masuk) peserta?',
    a: 'Nominal final HTM saat ini masih menunggu informasi resmi dari panitia. Perhitungan anggaran (termasuk opsi transportasi kolektif) masih disusun agar HTM tetap <em>affordable</em> bagi seluruh peserta.',
  },
  {
    category: 'Tanggal & Konsumsi',
    q: 'Bagaimana skema konsumsi selama kegiatan berlangsung?',
    a: 'Panitia sedang menyiapkan kebutuhan konsumsi peserta. Untuk sementara, skema yang diinformasikan adalah <strong>2 kali makan</strong>. Rincian pembagian waktu makan dan daftar menu akan diinformasikan lebih lanjut.',
  },
  {
    category: 'Lokasi & Vila',
    q: 'Di mana lokasi akomodasi Makrab MICE 2026?',
    a: 'Makrab MICE 2026 direncanakan bertempat di <strong>Villa Sinar Alam 1</strong> yang berlokasi di Jl. Raya Puncak KM. 83, Leuwimalang, Cisarua, Tugu Utara, Kecamatan Cisarua, Kabupaten Bogor, Jawa Barat 16750. Kamu bisa langsung cek titik lokasinya melalui <a href="https://maps.app.goo.gl/AQ5XF8oaE5TLhgju7" target="_blank" rel="noopener noreferrer">Google Maps Villa Sinar Alam 1</a>.',
  },
  {
    category: 'Lokasi & Vila',
    q: 'Berapa kapasitas vila, jumlah kamar, dan area parkirnya?',
    a: 'Villa Sinar Alam 1 memiliki kapasitas <strong>hingga 80 orang</strong> dengan bangunan 3 lantai, 12 kamar tidur, 14 kamar mandi, serta area parkir berkapasitas hingga 10 mobil.',
  },
  {
    category: 'Lokasi & Vila',
    q: 'Apa saja fasilitas hiburan, rekreasi, dan dapur yang tersedia di vila?',
    a: 'Vila berada di area private dan dilengkapi kolam renang private, meja biliar, TV dan karaoke, Free Wi-Fi, 3 ruang tamu nyaman, ruang keluarga, 3 dapur beserta peralatannya, peralatan makan lengkap, serta peralatan BBQ.',
  },
];

const ICONS = {
  building: '<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9v.01M9 12v.01M9 15v.01M9 18v.01"/>',
  bed: '<path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/>',
  bath: '<path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1zM6 12V5a2 2 0 0 1 2-2h3v2.25"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  tv: '<rect x="2" y="7" width="20" height="15" rx="2"/><polyline points="17 2 12 7 7 2"/>',
  wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/>',
  billiard: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/>',
  pool: '<path d="M2 16c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0M2 20c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0M6 12V5a2 2 0 0 1 4 0M14 12V5a2 2 0 0 1 4 0"/>',
  sofa: '<path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0z"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  kitchen: '<path d="M4 3h16v18H4zM4 9h16M8 6h.01M12 6h.01"/>',
  utensils: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  car: '<path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"/><circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/>',
};

function assetUrl(filename) {
  return `assets/${encodeURIComponent(filename)}`;
}

// Render Fasilitas
function renderFacilities() {
  const container = document.getElementById('facilities-grid');
  container.innerHTML = FACILITIES.map(
    (item) => `
    <div class="facility-card">
      <div class="facility-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          ${ICONS[item.icon]}
        </svg>
      </div>
      <div>
        <span class="facility-name">${item.name}</span>
        <span class="facility-detail">${item.detail}</span>
      </div>
    </div>
  `
  ).join('');
}

// Render Galeri (8 awal agar ringan, tombol untuk tampilkan semua 45)
let showAllPhotos = false;
const INITIAL_PHOTO_COUNT = 8;

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  const toggleBtn = document.getElementById('toggle-gallery-btn');
  const limit = showAllPhotos ? GALLERY_FILES.length : INITIAL_PHOTO_COUNT;

  grid.innerHTML = GALLERY_FILES.slice(0, limit)
    .map(
      (file, idx) => `
    <button type="button" class="gallery-item" data-index="${idx}" aria-label="Buka foto ${idx + 1} dari ${GALLERY_FILES.length}">
      <img src="${assetUrl(file)}" alt="Foto Villa Sinar Alam 1 (${idx + 1})" loading="lazy" decoding="async" />
    </button>
  `
    )
    .join('');

  toggleBtn.textContent = showAllPhotos
    ? 'Tampilkan Lebih Sedikit'
    : `Tampilkan Semua ${GALLERY_FILES.length} Foto`;
}

// Lightbox
let currentPhotoIndex = 0;
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCounter = document.getElementById('lightbox-counter');

function openLightbox(index) {
  currentPhotoIndex = (index + GALLERY_FILES.length) % GALLERY_FILES.length;
  lightboxImg.src = assetUrl(GALLERY_FILES[currentPhotoIndex]);
  lightboxCounter.textContent = `${currentPhotoIndex + 1} / ${GALLERY_FILES.length}`;
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImg.src = '';
  document.body.style.overflow = '';
}

function stepLightbox(delta) {
  openLightbox(currentPhotoIndex + delta);
}

// Render FAQ, Filter & Search
let activeFaqCategory = 'Semua';

function renderFaqFilters() {
  const container = document.getElementById('faq-filters');
  container.innerHTML = FAQ_CATEGORIES.map(
    (cat) => `
    <button type="button" class="filter-pill ${cat === activeFaqCategory ? 'is-active' : ''}" data-category="${cat}" role="tab" aria-selected="${cat === activeFaqCategory}">
      ${cat}
    </button>
  `
  ).join('');
}

function renderFaq(query = '') {
  const list = document.getElementById('faq-list');
  const empty = document.getElementById('faq-empty');
  const normalized = query.trim().toLowerCase();

  const filtered = FAQ_ITEMS.filter((item) => {
    const matchCategory = activeFaqCategory === 'Semua' || item.category === activeFaqCategory;
    const matchQuery =
      !normalized ||
      item.q.toLowerCase().includes(normalized) ||
      item.a.toLowerCase().includes(normalized) ||
      item.category.toLowerCase().includes(normalized);
    return matchCategory && matchQuery;
  });

  if (filtered.length === 0) {
    list.innerHTML = '';
    empty.hidden = false;
    return;
  }

  empty.hidden = true;
  list.innerHTML = filtered
    .map(
      (item, idx) => `
    <div class="faq-item ${idx === 0 && !normalized ? 'is-open' : ''}">
      <button type="button" class="faq-question" aria-expanded="${idx === 0 && !normalized ? 'true' : 'false'}">
        <span class="faq-question-text">
          <span class="faq-cat-badge">${item.category}</span>
          <span>${item.q}</span>
        </span>
        <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-answer" ${idx === 0 && !normalized ? '' : 'hidden'}>
        <p>${item.a}</p>
      </div>
    </div>
  `
    )
    .join('');
}

// Toast
let toastTimer;
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 2400);
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderFacilities();
  renderGallery();
  renderFaqFilters();
  renderFaq();

  const faqSearchInput = document.getElementById('faq-search');

  document.getElementById('faq-filters').addEventListener('click', (e) => {
    const pill = e.target.closest('.filter-pill');
    if (!pill) return;
    activeFaqCategory = pill.dataset.category;
    renderFaqFilters();
    renderFaq(faqSearchInput.value);
  });

  document.getElementById('toggle-gallery-btn').addEventListener('click', () => {
    showAllPhotos = !showAllPhotos;
    renderGallery();
  });

  document.getElementById('gallery-grid').addEventListener('click', (e) => {
    const btn = e.target.closest('.gallery-item');
    if (btn) openLightbox(Number(btn.dataset.index));
  });

  document.querySelectorAll('[data-open-lightbox]').forEach((el) => {
    el.addEventListener('click', () => openLightbox(Number(el.dataset.openLightbox)));
  });

  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox-prev').addEventListener('click', () => stepLightbox(-1));
  document.getElementById('lightbox-next').addEventListener('click', () => stepLightbox(1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') stepLightbox(-1);
    if (e.key === 'ArrowRight') stepLightbox(1);
  });

  // Touch swipe in lightbox
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  lightbox.addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(diff) > 40) stepLightbox(diff > 0 ? -1 : 1);
  }, { passive: true });

  // FAQ Accordion delegation
  document.getElementById('faq-list').addEventListener('click', (e) => {
    const btn = e.target.closest('.faq-question');
    if (!btn) return;
    const item = btn.parentElement;
    const answer = item.querySelector('.faq-answer');
    const isOpen = item.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(isOpen));
    answer.hidden = !isOpen;
  });

  // FAQ Search
  document.getElementById('faq-search').addEventListener('input', (e) => {
    renderFaq(e.target.value);
  });

  // Copy Address
  document.getElementById('copy-address-btn').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(VILLA_ADDRESS);
      showToast('Alamat berhasil disalin!');
    } catch {
      showToast('Gagal menyalin otomatis, silakan salin manual.');
    }
  });
});

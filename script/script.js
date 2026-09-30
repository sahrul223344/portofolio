// Portfolio Interactive Logic - Sahrul.dev

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inisialisasi AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            duration: 800,
            easing: 'ease-out-cubic'
        });
    }

    // 2. Inisialisasi Typed.js untuk Efek Ketik dalam Bahasa Indonesia
    const typingElement = document.getElementById('typing-text');
    if (typingElement && typeof Typed !== 'undefined') {
        new Typed('#typing-text', {
            strings: [
                'Pengembang Web Full-Stack',
                'Spesialis Backend & FastAPI',
                'Pengembang Frontend & React',
                'Integrator Generative AI'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1800,
            loop: true
        });
    }

    // 3. Logika Hamburger Menu Mobile
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            menuBtn.classList.toggle('bx-menu');
            menuBtn.classList.toggle('bx-x');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                menuBtn.classList.add('bx-menu');
                menuBtn.classList.remove('bx-x');
            });
        });
    }

    // 4. ScrollSpy untuk Highlight Navigasi Aktif
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNavOnScroll() {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');
            const targetLink = document.querySelector(`.nav-link[href*=${sectionId}]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (targetLink) targetLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);

    // 5. Filtering Keahlian (Skills)
    const skillFilters = document.querySelectorAll('.skill-filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    skillFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state tab
            skillFilters.forEach(b => {
                b.classList.remove('bg-indigo-600', 'text-white', 'shadow-indigo-600/30');
                b.classList.add('bg-slate-800/80', 'text-slate-400', 'hover:bg-slate-800');
            });
            btn.classList.remove('bg-slate-800/80', 'text-slate-400', 'hover:bg-slate-800');
            btn.classList.add('bg-indigo-600', 'text-white', 'shadow-indigo-600/30');

            const category = btn.getAttribute('data-filter');

            skillCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    card.classList.add('animate-fadeIn');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 6. Filtering Proyek (Projects)
    const projectFilters = document.querySelectorAll('.project-filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    projectFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            projectFilters.forEach(b => {
                b.classList.remove('bg-indigo-600', 'text-white', 'shadow-indigo-600/30');
                b.classList.add('bg-slate-800/80', 'text-slate-400', 'hover:bg-slate-800');
            });
            btn.classList.remove('bg-slate-800/80', 'text-slate-400', 'hover:bg-slate-800');
            btn.classList.add('bg-indigo-600', 'text-white', 'shadow-indigo-600/30');

            const category = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 7. Modal Detail Proyek Interactive
    const projectModal = document.getElementById('project-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const openModalBtns = document.querySelectorAll('.open-project-modal');

    const projectData = {
        'curricula-ai': {
            title: 'Curricula AI',
            subtitle: 'Platform Generasi Kurikulum & Materi Pembelajaran Berbasis AI',
            image: './css/img/3.png',
            description: 'Curricula AI adalah platform cerdas yang dirancang untuk mengotomatisasi pembuatan materi kurikulum pendidikan tinggi dan pelatihan profesional. Menggunakan arsitektur FastAPI asinkron serta SSE (Server-Sent Events) untuk streaming respons real-time dari model OpenAI LLM.',
            highlights: [
                'Arsitektur Pub-Sub asinkron menggunakan Python Asyncio & SSE',
                'Ekspor dokumen PDF berkualitas tinggi dengan ReportLab dan pratinjau browser via pdfjs-dist',
                'Manajemen status basis data relasional dengan SQLAlchemy & Alembic (SQLite / MySQL)',
                'Automated E2E Testing menggunakan Playwright'
            ],
            tech: ['Python', 'FastAPI', 'OpenAI API', 'React 19', 'Vite', 'SQLAlchemy', 'Alembic', 'Asyncio & SSE', 'Playwright', 'ReportLab', 'pdfjs-dist'],
            demo: 'https://ai.maxy.academy/curricula-ai/',
            github: 'https://github.com/sahrul223344/circula_ai'
        },
        'voxflow-ai': {
            title: 'Voxflow AI (Podflow AI)',
            subtitle: 'Platform Otomatisasi Pembuatan Podcast Berbasis AI',
            image: './css/img/4.png',
            description: 'Voxflow AI mengotomatisasi alur kerja pembuatan podcast dari sumber artikel teks maupun RSS Feed. Sistem mengolah skrip dialog menggunakan Qwen AI dan Agnes AI, kemudian mengonversi dialog tersebut menjadi rekaman suara natural melalui ElevenLabs TTS dan merangkainya menggunakan pipeline audio FFmpeg.',
            highlights: [
                'Integrasi API Text-to-Speech (TTS) ElevenLabs & Model LLM (Qwen/Agnes AI)',
                'Pipeline pemrosesan dan penggabungan audio multi-track otomatis menggunakan FFmpeg',
                'Fitur ingestion otomatis dari RSS Feed berita/artikel',
                'Desain backend RESTful API yang modular dan scalable'
            ],
            tech: ['Python', 'FastAPI', 'Qwen AI', 'Agnes AI', 'ElevenLabs (TTS)', 'FFmpeg', 'REST API', 'RSS Feed', 'Relational Database'],
            demo: 'https://voxflow-frontend.vercel.app/',
            github: 'https://github.com/sahrul223344/Fodcash_Ai_Beckend'
        },
        'sales-purchase': {
            title: 'Sistem Siklus Penjualan & Pembelian',
            subtitle: 'Enterprise Management System Terintegrasi Payment Gateway & AI Analytics',
            image: './css/img/5.png',
            description: 'Aplikasi manajemen siklus transaksi penjualan dan pembelian berskala enterprise. Dibangun di atas kerangka kerja Laravel dengan pengolahan tabel data performa tinggi via DataTables Server-Side. Dilengkapi pembayaran otomatis via Xendit API dan sistem pelaporan cerdas berbasis AI DeepSeek.',
            highlights: [
                'Pengolahan jutaan data transaksi secara responsif dengan DataTables Server-Side Processing',
                'Integrasi Payment Gateway Xendit untuk transaksi otomatis dan validasi callback',
                'Asisten laporan keuangan & analitik berbasis DeepSeek AI API',
                'Manajemen stok, supplier, invoice, dan hak akses bertingkat'
            ],
            tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Bootstrap', 'DataTables Server-Side', 'Xendit API', 'DeepSeek AI API', 'RESTful API'],
            demo: '#',
            github: 'https://github.com/sahrul223344/sales-purchase-cycle-laravel'
        }
    };

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = btn.getAttribute('data-project');
            const data = projectData[projectId];

            if (data && projectModal) {
                document.getElementById('modal-img').src = data.image;
                document.getElementById('modal-title').textContent = data.title;
                document.getElementById('modal-subtitle').textContent = data.subtitle;
                document.getElementById('modal-desc').textContent = data.description;

                // Render Highlights
                const highlightsList = document.getElementById('modal-highlights');
                highlightsList.innerHTML = '';
                data.highlights.forEach(item => {
                    const li = document.createElement('li');
                    li.className = 'flex items-start gap-2 text-slate-300 text-sm';
                    li.innerHTML = `<i class='bx bx-check-circle text-indigo-400 text-lg flex-shrink-0 mt-0.5'></i><span>${item}</span>`;
                    highlightsList.appendChild(li);
                });

                // Render Tech Stack
                const techList = document.getElementById('modal-tech');
                techList.innerHTML = '';
                data.tech.forEach(t => {
                    const badge = document.createElement('span');
                    badge.className = 'bg-indigo-950/90 border border-indigo-700/50 text-indigo-300 text-xs px-2.5 py-1 rounded-md font-medium';
                    badge.textContent = t;
                    techList.appendChild(badge);
                });

                // Render Links
                const demoBtn = document.getElementById('modal-demo-btn');
                const githubBtn = document.getElementById('modal-github-btn');

                if (data.demo && data.demo !== '#') {
                    demoBtn.href = data.demo;
                    demoBtn.style.display = 'inline-flex';
                } else {
                    demoBtn.style.display = 'none';
                }

                if (data.github && data.github !== '#') {
                    githubBtn.href = data.github;
                    githubBtn.style.display = 'inline-flex';
                } else {
                    githubBtn.style.display = 'none';
                }

                projectModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    if (modalCloseBtn && projectModal) {
        const closeModal = () => {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        };

        modalCloseBtn.addEventListener('click', closeModal);
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                closeModal();
            }
        });
    }

    // 8. Copy to Clipboard Functionality
    window.copyToClipboard = function(text, label) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(`${label} telah disalin ke clipboard!`, 'bx-copy-check');
        }).catch(err => {
            showToast(`Gagal menyalin ${label}`, 'bx-error-circle');
        });
    };

    // 9. Toast Notification System
    window.showToast = function(message, iconClass = 'bx-check-circle') {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i class='bx ${iconClass} text-indigo-400 text-xl'></i><span>${message}</span>`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    };

    // 10. Form Kontak Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const formStatus = document.getElementById('form-status');
            const submitBtn = contactForm.querySelector('button[type="submit"]');

            // Jika action masih placeholder YOUR_FORM_ID, simulasi sukses dengan ramah
            if (contactForm.action.includes('YOUR_FORM_ID')) {
                e.preventDefault();
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = `<i class='bx bx-loader-alt animate-spin text-lg'></i> Memproses...`;
                }

                setTimeout(() => {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = `Kirim Pesan`;
                    }
                    if (formStatus) {
                        formStatus.textContent = "Terima kasih! Pesan Anda telah disimulasikan terkirim. Saya akan menghubungi Anda secepatnya.";
                        formStatus.classList.remove('hidden');
                        formStatus.className = 'text-center text-sm text-emerald-400 mt-3 font-medium';
                    }
                    showToast('Pesan Anda telah berhasil terkirim!', 'bx-paper-plane');
                    contactForm.reset();
                }, 1000);
            }
        });
    }

    // 11. Floating Back-to-Top Button
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 400) {
                backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
                backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
            } else {
                backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
                backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
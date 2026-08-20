  // Logika Interaktif Hamburger Menu untuk Responsif Mobile
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            menuBtn.classList.toggle('bx-menu');
            menuBtn.classList.toggle('bx-x'); // Mengubah ikon jadi 'X' saat terbuka
        });

        // Tutup menu otomatis setelah klik salah satu link navigasi mobile
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                menuBtn.classList.add('bx-menu');
                menuBtn.classList.remove('bx-x');
            });
        });

        // Mencegah reload halaman saat form dikirim
        function pesan(event) {
            event.preventDefault();
            alert("Pesan Anda disimulasikan terkirim dengan sukses!");
        }
// Ambil tombol kembali
const tombolKembali = document.querySelector('#halamanawal');

// Tambahkan event listener untuk tombol kembali
tombolKembali.addEventListener('click', (event) => {
    event.preventDefault(); // Mencegah tindakan default dari tautan

    // Ambil elemen beranda berdasarkan ID
    const beranda = document.querySelector('#halamansoda');

    // Gulir ke elemen beranda dengan efek smooth scroll
    beranda.scrollIntoView({ behavior: 'smooth' });
});



// Fungsi untuk mengubah warna teks navigasi saat scroll
function changeNavText() {
    const navItems = document.querySelectorAll('.navlist ul li a');
    const section = document.querySelector('section');

    // Ambil tinggi section
    const sectionHeight = section.offsetHeight;

    // Ambil posisi scroll saat ini
    const scrollPosition = window.scrollY;

    // Jika posisi scroll lebih besar dari tinggi section, ubah warna teks navigasi menjadi hitam
    if (scrollPosition > sectionHeight) {
        navItems.forEach(item => {
            item.style.color = 'black';
        });
    } else {
        navItems.forEach(item => {
            item.style.color = 'white'; // Kembalikan warna teks ke putih jika masih di atas section
        });
    }
}

// Panggil fungsi changeNavText saat scroll
window.addEventListener('scroll', changeNavText);

// Fungsi untuk mengatur ulang warna teks saat di-hover
function resetNavTextOnHover() {
    const navItems = document.querySelectorAll('.navlist ul li a');
    
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.color = 'chocolate'; // Atur warna teks saat di-hover
        });

        item.addEventListener('mouseleave', () => {
            const section = document.querySelector('section');
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.scrollY;

            // Kembalikan warna teks ke hitam jika di-hover dan posisi scroll di atas section
            if (scrollPosition <= sectionHeight) {
                item.style.color = 'white';
            } else {
                // Kembalikan warna teks ke warna yang sesuai saat kursor berada di luar navigasi list
                item.style.color = scrollPosition > sectionHeight ? 'black' : 'white';
            }
        });
    });
}


// Panggil fungsi resetNavTextOnHover saat dokumen siap
document.addEventListener('DOMContentLoaded', resetNavTextOnHover);

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const iconOpen = menuToggle?.querySelector('.menu-icon-open');
const iconClose = menuToggle?.querySelector('.menu-icon-close');

function setMenuOpen(open) {
    if (!menuToggle || !mobileMenu) return;
    mobileMenu.classList.toggle('hidden', !open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    iconOpen?.classList.toggle('hidden', open);
    iconClose?.classList.toggle('hidden', !open);
}

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        setMenuOpen(mobileMenu.classList.contains('hidden'));
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => setMenuOpen(false));
    });
}

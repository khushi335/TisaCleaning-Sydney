/* ==========================================================================
   TISA CLEANING - INTERACTIVE RESPONSIVE ARCHITECTURE INTERACTION ENGINE
   ========================================================================== */

// 1. THIRD PARTY SYSTEMS TELEMETRY CONFIG (Live Tawk Chat Core)
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function(){
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/6a265617be9ae91c2b2defb3/1jqis0jq9';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
})();

function toggleChat(){
    if(typeof Tawk_API !== 'undefined' && typeof Tawk_API.maximize === 'function'){
        Tawk_API.maximize();
    }
}

Tawk_API.onLoad = function(){
    Tawk_API.hideWidget();
};

// 2. DOM ACTION ROUTINES CORE RUNTIME
window.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // A. MOBILE NAVIGATION DRAWER UTILITIES
    // ==========================================
    const burger = document.getElementById('hamburgerTrigger');
    const mobileMenu = document.getElementById('mobileNavigationDrawer');
    const backdrop = document.getElementById('menuBackdropLayer');
    const closeActions = document.querySelectorAll('.mobile-menu-close-action, .mobile-nav-link:not(#mobileSubmenuToggle)');

    function toggleMenu() {
        if (burger && mobileMenu && backdrop) {
            burger.classList.toggle('open');
            mobileMenu.classList.toggle('active');
            backdrop.classList.toggle('active');
        }
    }

    if (burger && mobileMenu && backdrop) {
        burger.addEventListener('click', toggleMenu);
        backdrop.addEventListener('click', toggleMenu);
        
        closeActions.forEach(element => {
            element.addEventListener('click', () => {
                if (mobileMenu.classList.contains('active')) toggleMenu();
            });
        });
    }

    // ==========================================
    // B. MOBILE SUBMENU ACCORDION ENGINE
    // ==========================================
    const dropdownBtn = document.getElementById('mobileSubmenuToggle');
    const submenu = document.getElementById('mobileSubmenuContent');

    if (dropdownBtn && submenu) {
        dropdownBtn.addEventListener('click', (e) => {
            e.preventDefault();
            dropdownBtn.classList.toggle('open-submenu');
            
            if (submenu.style.maxHeight && submenu.style.maxHeight !== '0px') {
                submenu.style.maxHeight = '0px';
            } else {
                submenu.style.maxHeight = submenu.scrollHeight + 'px';
            }
        });
    }

    // ==========================================
    // C. DYNAMIC AURORA FLUID BACKGROUND ENGINE
    // ==========================================
    const canvas = document.getElementById("auroraCanvas");
    if (canvas) {
        // Organic premium background lighting config arrays
        const colors = ["rgba(0, 229, 255, 0.12)", "rgba(0, 128, 128, 0.1)", "rgba(16, 185, 129, 0.08)"];
        const totalOrbs = 4;

        for (let i = 0; i < totalOrbs; i++) {
            const orb = document.createElement("div");
            orb.classList.add("fluid-glow-orb");
            
            // Randomize vector dimensional structures
            const size = Math.floor(Math.random() * 250) + 250; 
            orb.style.width = `${size}px`;
            orb.style.height = `${size}px`;
            orb.style.background = colors[i % colors.length];
            
            orb.style.top = `${Math.random() * 60}%`;
            orb.style.left = `${Math.random() * 80}%`;

            canvas.appendChild(orb);

            // Infinite premium micro-flow ambient transformation loops
            setInterval(() => {
                const moveX = (Math.random() * 60) - 30;
                const moveY = (Math.random() * 60) - 30;
                orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }, 6000 + (i * 1000));
        }
    }

    // ==========================================
    // D. SMOOTH UI SIDEBAR UTILITY REVEALS
    // ==========================================
    setTimeout(() => {
        const sidebar = document.getElementById('socialSidebar');
        const chatTrigger = document.getElementById('chatWrapper');
        if (sidebar) sidebar.classList.add('reveal');
        if (chatTrigger) chatTrigger.classList.add('reveal');
    }, 800);
});
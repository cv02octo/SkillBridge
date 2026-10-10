/* ==========================================
   SKILLBRIDGE - INTERACTIVE APP LOGIC
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navigation Blur Effect on Scroll
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }

    // 2. Mobile Menu Toggle Setup
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });
    }

    // 3. Quiz & Assessment Option Selection Highlight
    const answerOptions = document.querySelectorAll('.answer-option, .option');
    answerOptions.forEach(option => {
        option.addEventListener('click', () => {
            const parent = option.parentElement;
            if (parent) {
                // If single choice radio group in question
                const siblings = parent.querySelectorAll('.answer-option, .option');
                siblings.forEach(sib => sib.classList.remove('selected'));
                option.classList.add('selected');
                
                // Select radio input if present
                const radio = option.querySelector('input[type="radio"]');
                if (radio) {
                    radio.checked = true;
                }
            }
        });
    });

    // 4. Interactive Search/Filter for Subjects (if search input present)
    const searchInput = document.getElementById('subject-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const subjectCards = document.querySelectorAll('.professional-card');
            subjectCards.forEach(card => {
                const title = card.querySelector('h2')?.textContent.toLowerCase() || '';
                const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
                if (title.includes(query) || desc.includes(query)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // 5. Active Link Highlight in Navigation based on current pathname
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navAnchors = document.querySelectorAll('nav a');
    navAnchors.forEach(a => {
        const href = a.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            a.classList.add('active');
        } else {
            a.classList.remove('active');
        }
    });

    // 6. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

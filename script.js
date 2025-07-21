
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        function toggleMobileMenu() {
            mobileMenu.classList.toggle('hidden');
        }

        mobileMenuButton.addEventListener('click', toggleMobileMenu);

        // Modal functionality (kept but not actively used by current features)
        const geminiModal = document.getElementById('gemini-modal');
        const modalCloseButton = document.getElementById('modal-close-button');
        const modalTitle = document.getElementById('modal-title');
        const modalText = document.getElementById('modal-text');
        const modalSpinner = document.getElementById('modal-spinner');

        function openModal(title, content) {
            modalTitle.textContent = title;
            modalText.textContent = content;
            modalSpinner.classList.add('hidden');
            geminiModal.classList.add('open');
        }

        modalCloseButton.addEventListener('click', () => {
                            geminiModal.classList.remove('open');
            modalText.textContent = '';
        });

        geminiModal.addEventListener('click', (e) => {
            if (e.target === geminiModal) {
                geminiModal.classList.remove('open');
                modalText.textContent = '';
            }
            });

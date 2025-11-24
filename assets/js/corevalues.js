
        const section = document.querySelector('.core-values-section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    section.classList.add('animated');
                    observer.unobserve(section);
                }
            });
        }, {
            threshold: 0.2
        });

        observer.observe(section);
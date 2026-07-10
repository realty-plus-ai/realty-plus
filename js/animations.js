/* ==========================================================
   REALTY+
   Animations
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const revealElements = document.querySelectorAll(
        ".feature-card, .trust-card, .timeline-card, .benefit-card, .stat-card, .contact-card, .company-card, .section-title, .cta-box"
    );

    revealElements.forEach(element => {

        element.classList.add("reveal");

    });

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    revealElements.forEach(element => {

        observer.observe(element);

    });

    /* ==========================================
       STAGGER FEATURE CARDS
    ========================================== */

    document.querySelectorAll(".feature-card").forEach((card, index) => {

        card.style.transitionDelay = `${index * 80}ms`;

    });

    document.querySelectorAll(".timeline-card").forEach((card, index) => {

        card.style.transitionDelay = `${index * 100}ms`;

    });

    document.querySelectorAll(".benefit-card").forEach((card, index) => {

        card.style.transitionDelay = `${index * 100}ms`;

    });

    /* ==========================================
       PARALLAX HERO
    ========================================== */

    const hero = document.querySelector(".hero");
    const heroCard = document.querySelector(".chat-card");

    if (hero && heroCard) {

        window.addEventListener("scroll", () => {

            const offset = window.scrollY;

            heroCard.style.transform = `translateY(${offset * 0.05}px)`;

        });

    }

    /* ==========================================
       BUTTON RIPPLE
    ========================================== */

    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            const diameter = Math.max(this.clientWidth, this.clientHeight);

            ripple.style.width = ripple.style.height = diameter + "px";

            ripple.style.left = e.offsetX - diameter / 2 + "px";

            ripple.style.top = e.offsetY - diameter / 2 + "px";

            ripple.className = "ripple";

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        });

    });

    /* ==========================================
       COUNTER ANIMATION
    ========================================== */

    const counters = document.querySelectorAll(".stat-card h2");

    const counterObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const element = entry.target;

            const value = element.innerText;

            if (!/^\d+$/.test(value)) {

                counterObserver.unobserve(element);

                return;

            }

            const target = parseInt(value);

            let current = 0;

            const increment = Math.max(1, Math.ceil(target / 40));

            const timer = setInterval(() => {

                current += increment;

                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }

                element.textContent = current;

            }, 25);

            counterObserver.unobserve(element);

        });

    });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

    /* ==========================================
       FLOATING SHADOW
    ========================================== */

    if (heroCard) {

        let direction = 1;

        setInterval(() => {

            heroCard.style.boxShadow = direction > 0

                ? "0 40px 70px rgba(37,99,235,.16)"

                : "0 30px 55px rgba(15,23,42,.10)";

            direction *= -1;

        }, 3000);

    }

});
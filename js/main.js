/* ==========================================================
   REALTY+
   Main JavaScript
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       MOBILE MENU
    ========================================== */

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {

        hamburger.addEventListener("click", () => {

            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");

        });

        document.querySelectorAll(".nav-menu a").forEach(link => {

            link.addEventListener("click", () => {

                hamburger.classList.remove("active");
                navMenu.classList.remove("active");

            });

        });

    }

    /* ==========================================
       STICKY HEADER
    ========================================== */

    const header = document.querySelector(".header");

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 30) {

            header.style.background = "rgba(255,255,255,.95)";
            header.style.boxShadow = "0 10px 30px rgba(15,23,42,.08)";
            header.style.borderBottom = "1px solid rgba(226,232,240,.9)";

        } else {

            header.style.background = "rgba(255,255,255,.82)";
            header.style.boxShadow = "none";
            header.style.borderBottom = "1px solid rgba(226,232,240,.7)";

        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);

    /* ==========================================
       FAQ ACCORDION
    ========================================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        question.addEventListener("click", () => {

            const isOpen = item.classList.contains("active");

            faqItems.forEach(faq => {

                faq.classList.remove("active");

                const body = faq.querySelector(".faq-answer");

                if (body) {

                    body.style.maxHeight = null;

                }

            });

            if (!isOpen) {

                item.classList.add("active");
                answer.style.maxHeight = answer.scrollHeight + "px";

            }

        });

    });

    /* ==========================================
       ACTIVE NAV LINK
    ========================================== */

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-menu a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage || (currentPage === "" && href === "index.html")) {

            link.classList.add("active");

        }

    });

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });

    /* ==========================================
       CONTACT FORM
    ========================================== */

    const form = document.querySelector(".contact-form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const requiredFields = form.querySelectorAll("[required]");

            let valid = true;

            requiredFields.forEach(field => {

                if (field.value.trim() === "") {

                    valid = false;
                    field.style.borderColor = "#ef4444";

                } else {

                    field.style.borderColor = "#e2e8f0";

                }

            });

            if (!valid) {

                alert("Please complete all required fields.");

                return;

            }

            alert("Thank you! Your request has been received.");

            form.reset();

        });

    }

});
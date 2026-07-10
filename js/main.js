/* ==========================================================
   REALTY+
   Main JavaScript
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       MOBILE MENU
    ========================================== */

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {

        hamburger.addEventListener("click", function () {

            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");

        });

        document.querySelectorAll(".nav-menu a").forEach(function(link){

            link.addEventListener("click", function(){

                hamburger.classList.remove("active");
                navMenu.classList.remove("active");

            });

        });

    }

    /* ==========================================
       STICKY HEADER
    ========================================== */

    const header = document.querySelector(".header");

    function updateHeader(){

        if(!header) return;

        if(window.scrollY > 20){

            header.style.background = "rgba(255,255,255,.96)";
            header.style.boxShadow = "0 8px 25px rgba(15,23,42,.08)";
            header.style.borderBottom = "1px solid rgba(226,232,240,.9)";

        }

        else{

            header.style.background = "rgba(255,255,255,.82)";
            header.style.boxShadow = "none";
            header.style.borderBottom = "1px solid rgba(226,232,240,.7)";

        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);

    /* ==========================================
       ACTIVE NAVIGATION
    ========================================== */

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-menu a").forEach(function(link){

        const href = link.getAttribute("href");

        if(

            href === currentPage ||

            (currentPage === "" && href === "index.html")

        ){

            link.classList.add("active");

        }

    });

    /* ==========================================
       FAQ ACCORDION
    ========================================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function(item){

        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        if(!question || !answer) return;

        question.addEventListener("click", function(){

            const alreadyOpen = item.classList.contains("active");

            faqItems.forEach(function(faq){

                faq.classList.remove("active");

                const body = faq.querySelector(".faq-answer");

                if(body){

                    body.style.maxHeight = null;

                }

            });

            if(!alreadyOpen){

                item.classList.add("active");

                answer.style.maxHeight = answer.scrollHeight + "px";

            }

        });

    });

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(function(anchor){

        anchor.addEventListener("click", function(e){

            const target = document.querySelector(

                this.getAttribute("href")

            );

            if(!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",
                block:"start"

            });

        });

    });

    /* ==========================================
       WEB3FORMS UX
       (No preventDefault)
    ========================================== */

    const form = document.querySelector(".contact-form");

    if(form){

        form.addEventListener("submit", function(){

            const button = form.querySelector("button[type='submit']");

            if(button){

                button.disabled = true;

                button.innerHTML = "Submitting...";

                button.style.opacity = ".8";

            }

        });

    }

});

/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.querySelector(".nav-menu");


menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICK
===================================================== */

const navLinks =
    document.querySelectorAll(".nav-menu a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =====================================================
   ACTIVE NAVIGATION LINK
===================================================== */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.clientHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   CURRENT YEAR
===================================================== */

const year =
    new Date().getFullYear();

const footerText =
    document.querySelector("footer p");

if (footerText) {

    footerText.innerHTML =
        `© ${year} Yedlapalli Rakesh Sai. All Rights Reserved.`;

}
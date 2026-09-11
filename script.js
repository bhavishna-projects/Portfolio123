function toggleMenu() {

    const nav = document.querySelector(".navbar nav");

    nav.classList.toggle("active");

}


/* Close mobile menu when link is clicked */

document.querySelectorAll(".navbar nav a").forEach(function(link) {

    link.addEventListener("click", function() {

        document.querySelector(".navbar nav")
            .classList.remove("active");

    });

});


/* Simple scroll reveal */

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .about-box"
);

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(function(card) {

    card.style.opacity = "0";

    card.style.transform = "translateY(30px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});
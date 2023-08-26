// navbar
document.addEventListener("DOMContentLoaded", function () {
    const underlineLinks = document.querySelectorAll(".underline");

    underlineLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            underlineLinks.forEach(link => link.classList.remove("active"));
            link.classList.add("active");

            const category = link.getAttribute("data-category");
            // Do something with the category
        });
    });
});



// owl carousel
$(document).ready(function () {
    $('.carousel1').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        },
        navText: ["<i class='fa-solid fa-circle-chevron-left'></i>", "<i class='fa-solid fa-circle-chevron-right'></i>"],
        autoplay: true,
        autoplayTimeout: 20000
    });

    $('.carousel2').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        },
        navText: ["<i class='fa-solid fa-circle-chevron-left'></i>", "<i class='fa-solid fa-circle-chevron-right'></i>"],
        autoplay: true,
        autoplayTimeout: 20000
    });
});




// mobile menu
const buttons = [...document.querySelectorAll("nav button")];

const closeAll = () => {
	buttons.forEach((button) => {
		button.classList.remove("active");
	});
};

buttons.forEach((button) => {
	button.onclick = () => {
		closeAll();
		button.classList.add("active");
	};
});
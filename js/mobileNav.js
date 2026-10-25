const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobilemenu = document.getElementById("mobileMenu");
const hamburgerIcon = document.getElementById("hamburgerIcon");
const closeIcon = document.getElementById("iconclose");

let isOpen = false;

hamburgerBtn.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
        mobilemenu.classList.remove("translate-x-full");
        mobilemenu.classList.add("translate-x-0");

        hamburgerIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");

        document.body.style.overflow = "hidden";

    } else {
        mobilemenu.classList.remove("Translate-x-0,");
        mobilemenu.classList.add("translate-x-full");

        hamburgerIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");

        document.body.style.overflow = "";
    }
})

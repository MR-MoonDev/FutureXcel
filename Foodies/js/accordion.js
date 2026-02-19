document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
        const body = header.nextElementSibling;
        body.classList.toggle("show");
    });
});

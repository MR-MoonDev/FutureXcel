(() => {
    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("open-modal");
    const closeModalBtn = document.getElementById("close-modal");

    if (!modal || !openModalBtn || !closeModalBtn) return;

    openModalBtn.addEventListener("click", () => {
        modal.classList.add("show");
    });

    closeModalBtn.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    });
})();

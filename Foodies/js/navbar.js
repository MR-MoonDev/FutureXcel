(() => {
    const navbarData = {
        logo: "Foodies",
        links: [
            { name: "Home", href: "#" },
            { name: "Menu", href: "#" },
            { name: "About", href: "#" },
            { name: "Contact", href: "#" }
        ]
    };

    const navbarContainer = document.getElementById("navbar-container");
    if (!navbarContainer) return;

    const header = document.createElement("header");
    header.classList.add("navbar");

    // Logo
    const logo = document.createElement("div");
    logo.classList.add("logo");
    logo.textContent = navbarData.logo;
    header.appendChild(logo);

    // Navigation links
    const nav = document.createElement("nav");
    navbarData.links.forEach(link => {
        const a = document.createElement("a");
        a.href = link.href;
        a.textContent = link.name;
        nav.appendChild(a);
    });
    header.appendChild(nav);

    // Theme toggle button
    const themeBtn = document.createElement("button");
    themeBtn.id = "theme-toggle";
    header.appendChild(themeBtn); // append first

    // Initialize theme
    const currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    themeBtn.textContent = currentTheme === "dark" ? "🌙" : "🌞";

    // Toggle functionality
    themeBtn.addEventListener("click", () => {
        const theme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        themeBtn.textContent = theme === "dark" ? "🌙" : "🌞"; // use textContent for safety
    });

    navbarContainer.appendChild(header);
})();

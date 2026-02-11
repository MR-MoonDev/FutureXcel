const items = [
    { name: "Home", url: "/index.html" },
    { name: "Services", url: "/pages/services.html" },
    { name: "Contact", url: "/pages/contact.html" }
];

const cur = location.pathname;

let html = `
<header class="header">
  <div class="nav">
    <span class="nav__logo">Ecofy</span>
    <div class="nav__links">
`;

items.forEach(i => {
    const a = i.url === cur ? "nav__link nav__link--active" : "nav__link";
    html += `<a class="${a}" href="${i.url}">${i.name}</a>`;
});

html += `</div></div></header>`;

document.getElementById("navMount").innerHTML = html;



// menu.js

// Menu data
const menuData = [
    {
        name: "Burger",
        description: "Juicy grilled burger with fresh veggies.",
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyfGVufDB8fDB8fHww"
    },
    {
        name: "Pizza",
        description: "Hot and cheesy pizza with your choice of toppings.",
        image: "https://images.unsplash.com/photo-1613564834361-9436948817d1?q=80&w=443&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Roasted Chicken",
        description: "Golden roasted chicken with herbs.",
        image: "https://images.unsplash.com/photo-1594221708779-94832f4320d1?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

// Get container with a unique name
const menuSectionContainer = document.getElementById("menu-container");

const section = document.createElement("section");
section.classList.add("menu");

const h2 = document.createElement("h2");
h2.textContent = "Our Menu";
section.appendChild(h2);

const menuItemsDiv = document.createElement("div");
menuItemsDiv.classList.add("menu-items");

// Generate menu items dynamically
menuData.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("item");

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    div.appendChild(img);

    const h3 = document.createElement("h3");
    h3.textContent = item.name;
    div.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = item.description;
    div.appendChild(p);

    menuItemsDiv.appendChild(div);
});

section.appendChild(menuItemsDiv);
menuSectionContainer.appendChild(section);

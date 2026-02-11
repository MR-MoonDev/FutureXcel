const services = [
  {
    title: "Environmental Audit",
    description: "Full site audits.",
    img: "https://images.unsplash.com/photo-1528323273322-d81458248d40?q=80&w=800"
  },
  {
    title: "Waste Management",
    description: "Smart waste plans.",
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=800"
  },
  {
    title: "Solar Setup",
    description: "Solar installations.",
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800"
  }
];



const grid = document.querySelector('.grid');
grid.innerHTML = ""; // Clear existing cards if any

services.forEach(service => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${service.img}">
    <h3 class="card__title">${service.title}</h3>
    <p>${service.description}</p>
  `;
  grid.appendChild(card);
});



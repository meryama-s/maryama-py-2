const planets = [
  { name: "Mercury", color: "gray", moons: 0 },
  { name: "Venus", color: "orange", moons: 0 },
  { name: "Earth", color: "blue", moons: 1 },
  { name: "Mars", color: "red", moons: 2 },
  { name: "Jupiter", color: "brown", moons: 4 },
  { name: "Saturn", color: "gold", moons: 3 },
  { name: "Uranus", color: "lightblue", moons: 2 },
  { name: "Neptune", color: "darkblue", moons: 1 }
];

const section = document.querySelector(".listPlanets");

planets.forEach((planet) => {
//create planet div
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet");
  planetDiv.style.backgroundColor = planet.color;
  planetDiv.textContent = planet.name;

  //create moons
  for (let i = 0; i < planet.moons; i++) {
    const moon = document.createElement("div");
    moon.classList.add("moon");

    //random angle to place moons around the planet
    const angle = Math.random() * 2 * Math.PI;
    const radius = 60 + (i * 20); // spread moons out
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    moon.style.left = `${50 + x}px`;
    moon.style.top = `${50 + y}px`;

    planetDiv.appendChild(moon);
  }

  //aappend planet to section
  section.appendChild(planetDiv);
});

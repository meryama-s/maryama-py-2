// لائحة الروبوتات
const robots = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: 'imgs/robot1.png'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    image: 'imgs/robot2.png'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    image: 'imgs/robot3.png'
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    image: 'imgs/robot4.png'
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    image: 'imgs/robot5.png'
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    image: 'imgs/robot6.png'
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    image: 'imgs/robot7.png'
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    image: 'imgs/robot8.png'
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    image:'imgs/robot9.png'
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    image:'imgs/robot10.png'
  }
];

// display robot container
function displayRobot(list) {
  const container = document.getElementById("robotContainer");
  container.innerHTML = "";

  list.forEach(robot => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${robot.image}" alt="${robot.name}">
      <h3>${robot.name}</h3>
      <p>${robot.email}</p>
    `;
    container.appendChild(card);
  });
}

// search
const searchBox = document.getElementById("searchBox");
searchBox.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = robots.filter(robot =>
    robot.name.toLowerCase().includes(value)
  );
  displayRobot(filtered);
});

// displaying
displayRobot(robots);

const btn = document.getElementById('generateBtn');
const loadingEl = document.getElementById('loading');
const errorEl = document.getElementById('error');
const characterBox = document.getElementById('character');

const nameEl = document.getElementById('name');
const heightEl = document.getElementById('height');
const genderEl = document.getElementById('gender');
const birthEl = document.getElementById('birth_year');
const homeworldEl = document.getElementById('homeworld');

btn.addEventListener('click', getCharacter);

async function getCharacter() {
  const randomId = Math.floor(Math.random() * 83) + 1;
  const url = `https://www.swapi.tech/api/people/${randomId}`;

  loadingEl.classList.remove('hidden');
  errorEl.classList.add('hidden');
  characterBox.classList.add('hidden');

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch character.');

    const data = await response.json();
    const character = data.result.properties;

    // get homeworld
    const homeRes = await fetch(character.homeworld);
    const homeData = await homeRes.json();
    const homeName = homeData.result.properties.name;

    displayCharacter({
      name: character.name,
      height: character.height,
      gender: character.gender,
      birth_year: character.birth_year,
      homeworld: homeName,
    });

  } catch (err) {
    errorEl.textContent = "⚠️ Error fetching data. Try again!";
    errorEl.classList.remove('hidden');
  } finally {
    loadingEl.classList.add('hidden');
  }
}

function displayCharacter(character) {
  nameEl.textContent = character.name;
  heightEl.textContent = character.height;
  genderEl.textContent = character.gender;
  birthEl.textContent = character.birth_year;
  homeworldEl.textContent = character.homeworld;

  characterBox.classList.remove('hidden');
}

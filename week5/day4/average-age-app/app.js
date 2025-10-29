import { persons } from './data.js';

function calculateAverageAge(personArray) {
    const totalAge = personArray.reduce((sum, person) => sum + person.age, 0);
    const average = totalAge / personArray.length;
    console.log('Average age:', average);
}
calculateAverageAge(persons);
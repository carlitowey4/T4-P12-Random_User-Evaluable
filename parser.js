import { fetchUserData, fetchCurrentTime } from './api.js';

export function generateUsers() {
  return new Promise(async (resolve, reject) => {
    const container = document.querySelector('.container');
    const card = document.querySelector('.card');

    try {
      const person = await fetchUserData();
      const currentTime = await fetchCurrentTime(person.location);

      const userImage = document.createElement('img');
      userImage.src = person.picture;
      userImage.alt = 'User Image';
      userImage.id = 'userImage';

      const userInfo = document.createElement('div');
      userInfo.classList.add('card-info');
      userInfo.innerHTML = `
        <span><strong>Name: ${person.name}</strong></span>
        <span><strong>Email: ${person.email}</strong></span>
        <span><strong>Phone: ${person.phone}</strong></span>
        <span><strong>Location: ${person.location}</strong></span>
        <span><strong>Current Time: ${currentTime}</strong></span>
      `;

      if (card) {
        // Reemplazar el contenido de la tarjeta existente
        card.innerHTML = '';
        card.appendChild(userImage);
        card.appendChild(userInfo);
      } else {
        // Crear una nueva tarjeta si no existe
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.appendChild(userImage);
        newCard.appendChild(userInfo);
        container.insertBefore(newCard, container.firstChild);
      }

      resolve(person);
    } catch (error) {
      console.error('Error generating user:', error);
      reject(error);
    }
  });
}



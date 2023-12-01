import { generateUsers } from './parser.js';

document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.container');

  function generateUsersDefault() {
    const card = document.createElement('div');
    card.classList.add('card');

    const userImage = document.createElement('img');
    userImage.src = './user_nt_found.jpg';
    userImage.alt = 'User Image';
    userImage.id = 'userImage';

    const userInfo = document.createElement('div');
    userInfo.classList.add('card-info');
    userInfo.innerHTML = `
      <span><strong>Name: name surname</strong></span>
      <span><strong>Mail: mail</strong></span>
      <span><strong>Phone: phone</strong></span>
      <span><strong>Location: city</strong></span>
      <span><strong>Current Time: time</strong></span>
    `;

    card.appendChild(userImage);
    card.appendChild(userInfo);

    container.appendChild(card);
  }

  generateUsersDefault();

  const generateButton = document.createElement('button');
  generateButton.textContent = 'Generate User';
  generateButton.id = 'generateButton';
  generateButton.addEventListener('click', generateUsers);

  container.appendChild(generateButton);
});







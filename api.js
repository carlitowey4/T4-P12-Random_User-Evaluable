import { Person } from './person.js';

export async function fetchUserData() {
  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();

    const user = data.results[0];

    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      phone: user.phone,
      location: `${user.location.city}, ${user.location.country}`,
      picture: user.picture.large,
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}


export async function fetchCurrentTime(location) {
  const url = `https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime?city=${location}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bcf6e307a7mshdd1c91718c1ce3cp177c50jsn8c748d59f43a',
      'X-RapidAPI-Host': 'world-time-by-api-ninjas.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return `${data.hour}:${data.minute}:${data.second}`;
  } catch (error) {
    console.error('Error fetching current time:', error);
    throw error;
  }
}


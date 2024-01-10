export function uploadPhoto() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        body: 'photo-profile-1',
      });
    }, 1000);
  });
}

export function createUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        firstName: 'Guillaume',
        lastName: 'Salva',
      });
    }, 1000);
  });
}

import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];

  Promise.all(promises)
    .then((results) => {
      const [photoResponse, userResponse] = results;
      console.log(`body: ${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch((error) => {
      console.error('Signup system offline');
    });
}

handleProfileSignup();

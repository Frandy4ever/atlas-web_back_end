export default function uploadPhoto() {
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

  Promise.all(promises).then((results) => {
    const [photo, user] = results;
    console.error(`${photo.body} ${user.firstName} ${user.lastName}`)
  })
  .catch(() => console.error('Signup system offline'));
}

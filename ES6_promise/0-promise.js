export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Got a response from the API');
    }, 500);
  });
}

function uploadPhoto() {
  return simulateAPIRequest().then(() => {
    return {
      status: 200,
      body: 'photo-profile-1'
    };
  });
}

function createUser() {
  return simulateAPIRequest().then(() => {
    return {
      firstName: 'Guillaume',
      lastName: 'Salva'
    };
  });
}

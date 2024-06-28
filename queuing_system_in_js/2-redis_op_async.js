import { createClient } from 'redis';
import { promisify } from 'util';

const client = createClient();

client.on('error', (error) => {
    console.error(`Redis client error: ${error}`);
});

client.on('ready', () => {
    console.log('Redis client connected to the server');
});

const getAsync = promisify(client.get).bind(client);

async function setNewSchool(schoolName, value) {
    try {
        await client.set(schoolName, value);
        console.log(`Set ${schoolName}: ${value}`);
    } catch (error) {
        console.error(`Error setting ${schoolName}: ${error}`);
    }
}

async function displaySchoolValue(schoolName) {
    try {
        console.log(`Getting value for ${schoolName}`); // Added debug log
        const reply = await getAsync(schoolName);
        console.log(`${schoolName}: ${reply}`);
    } catch (error) {
        console.error(`Error getting ${schoolName}: ${error}`);
    }
}

client.connect().then(async () => {
    console.log('Starting script'); // Added debug log
    await displaySchoolValue('Holberton');
    await setNewSchool('HolbertonSanFrancisco', '100');
    await displaySchoolValue('HolbertonSanFrancisco');
    console.log('Script finished'); // Added debug log

    client.quit();
}).catch(error => {
    console.error(`Error connecting to Redis: ${error}`);
});

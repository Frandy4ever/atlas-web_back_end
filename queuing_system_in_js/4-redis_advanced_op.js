import pkg from 'redis';
const { createClient } = pkg;

const client = createClient();

client.on('error', (error) => {
    console.error(`Redis client error: ${error}`);
});

client.on('ready', async () => {
    console.log('Redis client connected to the server');

    try {
        await client.hSet('HolbertonSchools', 'Portland', 50);
        await client.hSet('HolbertonSchools', 'Seattle', 80);
        await client.hSet('HolbertonSchools', 'New York', 20);
        await client.hSet('HolbertonSchools', 'Bogota', 20);
        await client.hSet('HolbertonSchools', 'Cali', 40);
        await client.hSet('HolbertonSchools', 'Paris', 2);

        // Display Hash
        const result = await client.hGetAll('HolbertonSchools');
        console.log(result);

    } catch (error) {
        console.error(`Error: ${error}`);
    } finally {
        client.quit();
    }
});

await client.connect();

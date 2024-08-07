import redis from 'redis';

const client = redis.createClient();

client.on('connect', () => {
    console.log('Redis client connected to the server');
    client.subscribe('holberton school channel');
});

client.on('error', (error) => {
    console.error(`Redis client not connected to the server: ${error}`);
});

client.on('message', (channel, message) => {
    console.log(message);
    if (message === 'KILL_SERVER') {
        client.unsubscribe('holberton school channel');
        client.quit();
    }
});

process.on('SIGINT', () => {
    console.log('Subscriber exiting...');
    client.unsubscribe('holberton school channel');
    client.quit();
    process.exit(0);
});

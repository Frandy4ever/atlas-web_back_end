import redis from 'redis';

const client = redis.createClient();

client.on('connect', () => {
    console.log('Redis client connected to the server');
    publishMessages();
});

client.on('error', (error) => {
    console.error(`Redis client not connected to the server: ${error}`);
});

function publishMessages() {
    const messages = [
        { message: 'Holberton Student #1 starts course', time: 100 },
        { message: 'Holberton Student #2 starts course', time: 200 },
        { message: 'KILL_SERVER', time: 300 },
        { message: 'Holberton Student #3 starts course', time: 400 }
    ];

    let count = 0;

    function publishNextMessage() {
        if (count < messages.length) {
            const { message, time } = messages[count];
            setTimeout(() => {
                console.log(`About to send ${message}`);
                client.publish('holberton school channel', message);
                publishNextMessage(); // Publish next message
            }, time);
            count++;
        } else {
            console.log('All messages sent, quitting client...');
            setTimeout(() => {
                client.quit();
            }, 500);
        }
    }

    publishNextMessage();
}

process.on('SIGINT', () => {
    console.log('Publisher exiting...');
    client.quit();
    process.exit(0);
});

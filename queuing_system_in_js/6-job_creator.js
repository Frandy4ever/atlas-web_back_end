import kue from 'kue';

// Create a Kue queue
const queue = kue.createQueue();

// Object containing job data
const jobData = {
  phoneNumber: '1234567890',
  message: 'Hello, this is a notification message!',
};

const job = queue.create('push_notification_code', jobData);

job.on('enqueue', function () {
  console.log(`Notification job created: ${job.id}`);
});

job.on('complete', function () {
  console.log('Notification job completed');
});

job.on('failed', function () {
  console.log('Notification job failed');
});

job.save(function (err) {
  if (err) {
    console.error('Error creating job:', err);
    return;
  }
  queue.process('push_notification_code', function (job, done) {
    setTimeout(function () {
      console.log(`Processed job ${job.id}`);
      done();
    }, 3000); 
  });
});

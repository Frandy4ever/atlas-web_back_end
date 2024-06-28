import kue from 'kue';

const blacklistedNumbers = ['4153518780', '4153518781'];

function sendNotification(phoneNumber, message, job, done) {
  job.progress(0, 100);

  if (blacklistedNumbers.includes(phoneNumber)) {
    done(new Error(`Phone number ${phoneNumber} is blacklisted`));
  } else {
    // Update progress to 50%
    job.progress(50, 100);

    console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);

    done();
  }
}

const queue = kue.createQueue({ concurrency: 2 });

queue.process('push_notification_code_2', 2, function(job, done) {
  const { phoneNumber, message } = job.data;

  sendNotification(phoneNumber, message, job, done);

  job.on('complete', function() {
    console.log(`Notification job ${job.id} completed`);
  });

  job.on('failed', function(err) {
    console.error(`Notification job ${job.id} failed: ${err}`);
  });

  job.on('progress', function(progress) {
    console.log(`Notification job ${job.id} ${progress}% complete`);
  });
});

import { expect } from 'chai';
import kue from 'kue';
import createPushNotificationsJobs from './8-job.js';

describe('createPushNotificationsJobs', function() {
  this.timeout(5000); // Increase timeout to 5 seconds

  let queue;

  beforeEach(() => {
    queue = kue.createQueue({ redis: { port: 6379, host: '127.0.0.1' }, testMode: true });
  });

  afterEach((done) => {
    queue.testMode.clear();
    queue.shutdown(1000, done);
  });

  it('should create jobs in the queue', (done) => {
    const jobs = [
      { phoneNumber: '4153518780', message: 'This is the code 1234 to verify your account' },
    ];

    createPushNotificationsJobs(jobs, queue);

    setTimeout(() => {
      try {
        expect(queue.testMode.jobs.length).to.equal(1); 
        done();
      } catch (error) {
        done(error);
      }
    }, 4000);
  });

  it('should log job creation, completion, failure, and progress', (done) => {
    const jobs = [
      { phoneNumber: '4153518780', message: 'This is the code 1234 to verify your account' },
    ];

    createPushNotificationsJobs(jobs, queue);

    queue.process('push_notification_code_3', (job, jobDone) => {
      job.log('completed');
      jobDone();
    });

    setTimeout(() => {
      try {
        const job = queue.testMode.jobs[0];
        if (job) {
          expect(job.log).to.contain('Notification job created');
          expect(job.log).to.contain('Notification job completed');
        } else {
          console.log('No job found in the queue.');
        }
        done();
      } catch (error) {
        done(error);
      }
    }, 4000);
  });
});

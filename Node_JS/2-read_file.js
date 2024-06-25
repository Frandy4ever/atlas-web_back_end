const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8').toString().split('\n').filter(row => row.trim() !== '');
    if (data.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = data.slice(1);
    console.log(`Number of students: ${students.length}`);
    
    const subjects = {};
    for (const row of students) {
      const student = row.split(',');
      const firstname = student[0];
      const subject = student[3];
      if (!subjects[subject]) subjects[subject] = [];
      subjects[subject].push(firstname);
    }
    
    for (const subject in subjects) {
      if (subject) {
        console.log(`Number of students in ${subject}: ${subjects[subject].length}. List: ${subjects[subject].join(', ')}`);
      }
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
};

module.exports = countStudents;

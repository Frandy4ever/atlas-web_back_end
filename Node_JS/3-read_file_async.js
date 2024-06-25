

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const messages = [];
      let message;

      // Split the file content by lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      // If the file is empty or only contains the header
      if (lines.length <= 1) {
        message = 'Number of students: 0';
        console.log(message);
        messages.push(message);
        resolve(messages);
        return;
      }

      const students = lines.slice(1).map((line) => line.split(','));

      const nStudents = students.length;
      message = `Number of students: ${nStudents}`;
      console.log(message);
      messages.push(message);

      const fields = {};

      students.forEach((student) => {
        const [firstName, , , field] = student;
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      });

      for (const field in fields) {
        if (fields.hasOwnProperty(field)) {
          message = `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
          console.log(message);
          messages.push(message);
        }
      }

      resolve(messages);
    });
  });
}

module.exports = countStudents;

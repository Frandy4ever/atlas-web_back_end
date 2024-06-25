import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const database = await readDatabase(req.app.get('database'));
      let responseText = 'This is the list of our students\n';
      const sortedFields = Object.keys(database).sort();
      sortedFields.forEach((field) => {
        responseText += `Number of students in ${field}: ${database[field].length}. List: ${database[field].join(', ')}\n`;
      });
      res.status(200).send(responseText.trim());
    } catch (error) {
      console.error('Error fetching all students:', error);
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    console.log(`Requested major: ${major}`);
    if (major !== 'CS' && major !== 'SWE') {
      res.status(400).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const database = await readDatabase(req.app.get('database'));
      console.log('Database keys:', Object.keys(database));
      const students = database[major];
      if (!students) {
        res.status(404).send('Major not found');
        return;
      }
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      console.error('Error fetching students by major:', error);
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;

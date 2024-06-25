import fs from 'fs';
import util from 'util';

const readFile = util.promisify(fs.readFile);

export const readDatabase = async (filePath) => {
  try {
    console.log(`Reading database file from path: ${filePath}`);
    const data = await readFile(filePath, 'utf8');
    console.log('Raw database content:', data);

    const lines = data.split('\n').filter(line => line.trim() !== '');
    const fields = {};
    lines.slice(1).forEach(line => {
      const [firstName, lastName, age, field] = line.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });
    console.log('Parsed database content:', fields);
    return fields;
  } catch (error) {
    console.error('Error reading database:', error);
    throw new Error('Cannot load the database');
  }
};

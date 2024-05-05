#!/usr/bin/env node

// Create all project files and add executable privileges
const fs = require('fs');

// List of filenames
const files = [
    
];

// Iterate over each filename
files.forEach(file => {
    // Create the file and write the shebang line
    fs.writeFileSync(file, '#!/usr/bin/env python3\n');

    // Set executable permission
    fs.chmodSync(file, '755');
});

console.log("Project files created successfully.");

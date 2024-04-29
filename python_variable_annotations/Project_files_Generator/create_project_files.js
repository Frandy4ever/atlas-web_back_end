#!/usr/bin/env node

// Create all project files and add executable privileges
const fs = require('fs');

// List of filenames
const files = [
    '0-add.py', '1-concat.py', '2-floor.py', '3-to_str.py',
    '4-define_variables.py', '5-sum_list.py', '6-sum_mixed_list.py',
    '7-to_kv.py', '8-make_multiplier.py', '9-element_length.py'
];

// Iterate over each filename
files.forEach(file => {
    // Create the file and write the shebang line
    fs.writeFileSync(file, '#!/usr/bin/env python3\n');

    // Set executable permission
    fs.chmodSync(file, '755');
});

console.log("Project files created successfully.");

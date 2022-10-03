const fs = require('fs-js');

fs.open('../txts/visitas.txt', 'wx', (err, fd) => {
  if (err) {
    if (err.code === 'EEXIST') {
      console.error('myfile already exists');
      return;
    }
 
    throw err;
  }
 
});
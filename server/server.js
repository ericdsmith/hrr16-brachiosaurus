const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/source`));

app.listen(3000, () => console.log('Server running on port 3000!'));

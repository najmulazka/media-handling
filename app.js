require('dotenv').config();
const express = require('express');
const app = express();
const { PORT = 3000 } = process.env;
const router = require('./routes/media.routes');

app.use(express.json());
app.use('/api/v1', router);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

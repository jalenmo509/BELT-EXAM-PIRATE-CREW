const express = require('express');
const cors = require('cors');
const { pirateRouter } = require('./routes/pirate.routes');
const PORT = 8000;
const app = express();
require('./config/mongoose.config');

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api/pirates', pirateRouter)

app.listen(PORT, () => {
  console.log(`Listening at Port ${PORT}`);
})
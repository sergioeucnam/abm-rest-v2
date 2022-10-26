const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const PORT = require('./config').PORT;
//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes
app.use(require('./routes/index.js'));
app.use('/api/players', require('./routes/players.js'));

//server deployment
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});

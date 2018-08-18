console.log('hello');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world',
  });
});

const server = app.listen(process.env.PORT || 8081);
console.log(`server listening at port ${server.address().port}`);

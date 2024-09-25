const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const menuRouter = require('./routes/menu.route');
const orderRouter = require('./routes/order.route');

const app = express();
const PORT = 5001;


app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: "Node, Express and Postgres API" });
});

app.use('/api/menu', menuRouter);
app.use('/api/order', orderRouter);

app.use((req, res, next) => {
  const error = new Error('Not Found!');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}.`)
})
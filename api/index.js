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

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}.`)
})
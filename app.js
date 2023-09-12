const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const validator = require('validator');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(rateLimit());
app.use(hpp());

app.get("/", (req, res) => {
    res.send("Welcome to my Express js Project");
  });

const apiRoutes = require("./src/Routes/api");
app.use("/", apiRoutes);
// app.use("/api", apiRoutes);



app.use((req, res, next) => {
  res.status(404).json({ status: 'error', message: 'Route not found' });
});

// const port = process.env.RUNNING_PORT || 5500;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

module.exports = app;
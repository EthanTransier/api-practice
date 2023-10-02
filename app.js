const express = require('express');
const app = express();
const menuMiddleware = require('./routes/menu-controller');

// console.log(menu)

app.use(express.static('./public'))
// Parse form data

app.use(express.urlencoded({ extended: false}));

app.use(express.json())

app.use('/api/menu', menuMiddleware)

// app.use('/api/tasks', tasks)
// app.use('/api/people', people)
// app.use('/login', auth)

app.listen(7000)
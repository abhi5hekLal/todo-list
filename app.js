const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));
let taskList = [];

app.get('/', function(req, res) {
    let now = new Date();
    let options = {
        day : 'numeric',
        month : 'long',
        weekday : 'long'
    };
    day = now.toLocaleDateString('en-US', options);
    res.render('list', {day: day, taskList: taskList});
});

app.post('/', function(req, res) {
    taskList.push(req.body.newTask);
    res.redirect('/');
});

app.listen(3000, function() {
    console.log('Server running on port 3000');
});
var path = require('path'); 
const fs = require('fs'); 
const express = require('express');
const port = 5;

const app = express();

var dir = path.join(__dirname, 'public');

app.use(express.static(dir));

let totalViews = 0;


if (fs.existsSync('views.txt')) {
  totalViews = parseInt(fs.readFileSync('views.txt', 'utf8'));
}

app.get('/', (req, res) => {
    totalViews++; 
    fs.writeFileSync('views.txt', totalViews.toString());

    let html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    html = html.replace('{{views}}', totalViews);
    res.send(html);
});

app.get('/board.html', (req, res) => {
    res.sendFile(__dirname + '/board.html');
})
  
app.get('/portfolio.html', (req, res) => {
      res.sendFile(__dirname + '/portfolio.html');
});

app.get('/projects.html', (req, res) => {
    res.sendFile(__dirname + '/projects.html');
});

app.get('/styles/style.css', (req, res) => {
      res.sendFile(__dirname + '/styles/style.css');
});

app.get('/styles/board.css', (req, res) => {
    res.sendFile(__dirname + '/styles/board.css');
});

app.get('/styles/projects.css', (req, res) => {
    res.sendFile(__dirname + '/styles/projects.css');
});

app.get('/styles/portfolio.css', (req, res) => {
    res.sendFile(__dirname + '/styles/portfolio.css');
});
  
app.get('/goodbyeworld.js', (req, res) => {
      res.sendFile(__dirname + '/goodbyeworld.js');
});

app.get('/fork.png', (req, res) => {
      res.sendFile(__dirname + '/fork.png');
});

app.get('/fork.png', (req, res) => {
    res.sendFile(__dirname + '/fork.png');
});

app.get('/filthy.jpg', (req, res) => {
    res.sendFile(__dirname + '/filthy.jpg');
});

app.get('/bart.jpg', (req, res) => {
    res.sendFile(__dirname + '/bart.jpg');
});

app.get('/lambs.jpg', (req, res) => {
    res.sendFile(__dirname + '/lambs.jpg');
});

app.get('/amigos.jpg', (req, res) => {
    res.sendFile(__dirname + '/amigos.jpg');
});

app.get('/gif.gif', (req, res) => {
    res.sendFile(__dirname + '/gif.gif');
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
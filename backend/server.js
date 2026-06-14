const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let notices = [];
let idCounter = 1;

app.get('/api/notices', (req, res) => {
  res.json(notices);
});

app.post('/api/notices', (req, res) => {
  const notice = {
    _id: idCounter++,
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
    createdAt: new Date()
  };
  notices.push(notice);
  res.json(notice);
});

app.delete('/api/notices/:id', (req, res) => {
  notices = notices.filter(n => n._id != req.params.id);
  res.json({ message: 'Deleted' });
});

app.listen(5000, () => console.log('Server running on port 5000'));
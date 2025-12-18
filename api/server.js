const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = process.env.JWT_SECRET || 'dev-secret';
const sampleUser = { email: 'demo@example.com', password: 'password' }; // demo only

app.get('/api/projects', (req, res) => {
  res.json([
    { id: 1, title: 'Product Launch Kit', summary: 'Checklist + templates.' },
    { id: 2, title: 'Market Research Toolkit', summary: 'Surveys & interview scripts.' }
  ]);
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body || {};
  if (email === sampleUser.email && password === sampleUser.password) {
    const token = jwt.sign({ sub: email }, SECRET, { expiresIn: '1h' });
    return res.json({ token });
  }
  res.status(401).json({ error: 'Invalid credentials' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};
  console.log('contact received', { name, email, message });
  res.json({ ok: true });
});

// serve static files from public/
const publicDir = path.join(__dirname, '..', 'public');
app.use(express.static(publicDir));

// fallback to index.html for non-api routes
app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) return res.status(404).json({ error: 'Not found' });
  res.sendFile(path.join(publicDir, 'index.html'));
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
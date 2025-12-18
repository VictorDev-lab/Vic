const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

// Serve components as static files
app.use('/components', express.static(path.join(__dirname, '../public/components')));

const SECRET = process.env.JWT_SECRET || 'dev-secret';

const sampleUser = {
  email: 'demo@eksempel.no',
  password: 'passord'
};

// API routes
app.get('/api/projects', (req, res) => {
  res.json([
    { 
      id: 1, 
      title: 'Produktlanseringssett', 
      summary: 'Steg-for-steg sjekkliste og maler for å lansere din MVP raskere.',
      category: 'Mal',
      icon: '🚀'
    },
    { 
      id: 2, 
      title: 'Markedsundersøkelsesverktøy', 
      summary: 'Spørreskjemaer, intervjumanus og rammeverk for å validere ideer.',
      category: 'Forskning',
      icon: '📊'
    },
    { 
      id: 3, 
      title: 'Vekststrategi', 
      summary: 'Beviste kanaler og eksperimenter for å skale tidlig trafikk.',
      category: 'Strategi',
      icon: '📈'
    }
  ]);
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body || {};
  if (email === sampleUser.email && password === sampleUser.password) {
    const token = jwt.sign({ sub: email }, SECRET, { expiresIn: '1h' });
    return res.json({ 
      token,
      user: {
        email,
        name: 'Demo Bruker',
        role: 'admin'
      }
    });
  }
  res.status(401).json({ error: 'Ugyldige legitimasjoner' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('📩 Ny kontaktskjema-innsending:', { name, email, message });
  res.json({ 
    success: true,
    message: 'Takk for din melding! Vi svarer innen 24 timer.'
  });
});

// Serve HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/contact.html'));
});

app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/projects.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/services.html'));
});

// 404 fallback
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../public/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server kjører på http://localhost:${PORT}`);
  console.log(`📁 Statiske filer serveres fra: ${path.join(__dirname, '../public')}`);
});
require('dotenv').config();
const express   = require('express');
const cors      = require('cors');
const connectDB = require('./config/db');
const protect   = require('./middleware/auth.middleware');

connectDB();

const app = express();

const allowedOrigins = [
  'http://localhost:4200',
  'https://yared-portfolio-angular.vercel.app'
];
app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

// Public auth route
app.use('/api/auth', require('./routes/auth'));

// Public GET routes
app.use('/api/skills',         require('./routes/skills'));
app.use('/api/experiences',    require('./routes/experiences'));
app.use('/api/education',      require('./routes/education'));
app.use('/api/certifications', require('./routes/certifications'));

// Protected mutation routes (POST, PUT, DELETE)
app.use('/api/admin/skills',         protect, require('./routes/skills'));
app.use('/api/admin/experiences',    protect, require('./routes/experiences'));
app.use('/api/admin/education',      protect, require('./routes/education'));
app.use('/api/admin/certifications', protect, require('./routes/certifications'));

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

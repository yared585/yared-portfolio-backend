require('dotenv').config();
const express   = require('express');
const cors      = require('cors');
const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

app.use('/api/skills',         require('./routes/skills'));
app.use('/api/experiences',    require('./routes/experiences'));
app.use('/api/education',      require('./routes/education'));
app.use('/api/certifications', require('./routes/certifications'));

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

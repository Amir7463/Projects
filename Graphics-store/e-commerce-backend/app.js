const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config(); 

const app = express();

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

// Routes
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');

app.use('/api', adminRoutes);
app.use('/api', userRoutes);
app.use('/api', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Connect DB & start server
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './models/User.js';

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://krishaeducation2020:kteZqrjfOdtvXAs4@cluster0.abg9m63.mongodb.net/skill_swap?retryWrites=true&w=majority';

async function main() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1); // Stop the server if initial DB connect fails
  }
}

main();

// Global event listeners for future errors/disconnections:
mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.warn('⚠️ MongoDB disconnected, retrying in 5s');
  setTimeout(main, 5000); // Retry after a delay
});

app.post('/api/profile', async (req, res) => {
  try {
    const { name, skillsOffered, skillsWanted, availability, isPublic } = req.body;
    const user = new User({
      name,
      skillsOffered,
      skillsWanted,
      availability,
      isPublic,
    });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    console.error('Error saving profile:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/profiles', async (req, res) => {
  try {
    const profiles = await User.find({ isPublic: true }).sort({ createdAt: -1 });
    res.json(profiles);
  } catch (err) {
    console.error('Error fetching profiles:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

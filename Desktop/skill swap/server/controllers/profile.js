import User from '../models/User.js';
import { validationResult } from 'express-validator';

export async function createProfile(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, skillsOffered, skillsWanted, availability, isPublic } = req.body;
    const user = new User({ name, skillsOffered, skillsWanted, availability, isPublic });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    console.error('Error creating profile:', err);
    res.status(500).json({ error: 'Database error' });
  }
}

export async function getProfiles(req, res) {
  try {
    console.log('🔎 getProfiles called');
    const profiles = await User.find({ isPublic: true }).sort({ createdAt: -1 });
    console.log('✅ fetched profiles:', profiles.length);
    res.json(profiles);
  } catch (err) {
    console.error('❌ Error fetching profiles:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}


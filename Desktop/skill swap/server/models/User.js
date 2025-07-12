import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  skillsOffered: { type: [String], default: [] },
  skillsWanted: { type: [String], default: [] },
  availability: { type: String, default: "" },
  isPublic: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.model('User', UserSchema);

import React, { useState } from 'react';
import api from '../api.js';

export default function ProfileForm({ onSaved }) {
  const [form, setForm] = useState({
    name: '',
    skillsOffered: '',
    skillsWanted: '',
    availability: '',
    isPublic: true,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post('/profile', {
        name: form.name,
        skillsOffered: form.skillsOffered.split(',').map(s => s.trim()),
        skillsWanted: form.skillsWanted.split(',').map(s => s.trim()),
        availability: form.availability,
        isPublic: form.isPublic,
      });

      setForm({
        name: '',
        skillsOffered: '',
        skillsWanted: '',
        availability: '',
        isPublic: true,
      });
      onSaved();
    } catch (err) {
      console.error(err);
      alert('Error saving profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="skillsOffered"
        placeholder="Skills You Offer"
        value={form.skillsOffered}
        onChange={handleChange}
        required
      />
      <input
        name="skillsWanted"
        placeholder="Skills You Want"
        value={form.skillsWanted}
        onChange={handleChange}
        required
      />
      <input
        name="availability"
        placeholder="Availability (e.g., weekends)"
        value={form.availability}
        onChange={handleChange}
        required
      />
      <label>
        <input
          name="isPublic"
          type="checkbox"
          checked={form.isPublic}
          onChange={handleChange}
        />
        Make Profile Public
      </label>
      <button type="submit" disabled={loading}>
        {loading ? 'Saving...' : 'Save Profile'}
      </button>
    </form>
  );
}

import React, { useEffect, useState } from 'react';
import api from '../api.js';

export default function ProfilesList({ refreshKey }) {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    api.get('/profiles')
      .then(res => setProfiles(res.data))
      .catch(err => {
        console.error(err);
        alert('Error loading profiles');
      });
  }, [refreshKey]);

  return (
    <div id="profilesList">
      {profiles.length === 0 ? (
        <p>No public profiles available.</p>
      ) : (
        profiles.map(p => (
          <div key={p._id}>
            <strong>{p.name}</strong><br />
            <em>Offers:</em> {p.skillsOffered.join(', ')}<br />
            <em>Wants:</em> {p.skillsWanted.join(', ')}<br />
            <em>Availability:</em> {p.availability}
          </div>
        ))
      )}
    </div>
  );
}

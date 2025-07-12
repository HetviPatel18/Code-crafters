import React, { useState } from 'react';
import ProfileForm from './components/ProfileForm.jsx';
import ProfilesList from './components/ProfilesList.jsx';
import './App.css';

export default function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="App">
      <h1>Skill Swap</h1>
      <ProfileForm onSaved={() => setRefreshKey(k => k + 1)} />
      <h2>Public Profiles</h2>
      <ProfilesList refreshKey={refreshKey} />
    </div>
  );
}

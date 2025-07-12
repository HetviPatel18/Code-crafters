import React, { useState, useEffect } from 'react';
import api from '../api.js';
import './Feedback.css';

export default function Feedback() {
  const [completedSwaps, setCompletedSwaps] = useState([]);
  const [rating, setRating] = useState({});
  const [comments, setComments] = useState({});

  useEffect(() => {
    api.get('/swap/completed')
      .then(res => setCompletedSwaps(res.data))
      .catch(console.error);
  }, []);

  const handleSubmit = async (swapId) => {
    try {
      await api.post('/swap/feedback', {
        swapId,
        rating: rating[swapId],
        comment: comments[swapId]
      });
      alert('Feedback submitted!');
    } catch (err) {
      console.error(err);
      alert('Failed to submit feedback');
    }
  };

  return (
    <div className="page">
      <h2>Give Feedback</h2>
      {completedSwaps.length === 0 ? (
        <p>No completed swaps to review yet.</p>
      ) : (
        completedSwaps.map(swap => (
          <div className="card" key={swap._id}>
            <strong>{swap.withUserName}</strong>
            <div>Swap Date: {new Date(swap.completedAt).toLocaleDateString()}</div>
            <label>Rating:</label>
            <select
              value={rating[swap._id] || ''}
              onChange={e => setRating(v => ({ ...v, [swap._id]: +e.target.value }))}
            >
              <option value="">Select rating</option>
              {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
            </select>
            <label>Comments:</label>
            <textarea
              value={comments[swap._id] || ''}
              onChange={e => setComments(v => ({ ...v, [swap._id]: e.target.value }))}
            />
            <button onClick={() => handleSubmit(swap._id)}>Submit Feedback</button>
          </div>
        ))
      )}
    </div>
  );
}

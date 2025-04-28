import React from 'react';

export default function ThankYou() {
  return (
    <div style={{ textAlign: 'center', padding: '3rem', fontFamily: 'sans-serif' }}>
      <h1>✅ Thank You!</h1>
      <p>Your response has been recorded.</p>

      <a href="/">
        <button
          style={{
            marginTop: '2rem',
            padding: '1rem 2rem',
            fontSize: '1rem',
            borderRadius: '12px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          ⬅️ Back to Home
        </button>
      </a>
    </div>
  );
}

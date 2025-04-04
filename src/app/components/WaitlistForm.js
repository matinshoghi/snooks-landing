'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('Please enter your email address');
      return;
    }

    // Here you would typically send this to your backend
    // For now, we'll just show a success message
    setStatus('Thanks for joining our waitlist! We\'ll be in touch soon.');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-control w-full max-w-md mx-auto">
      <div className="input-group">
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full text-base-content"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-accent">
          Join Waitlist
        </button>
      </div>
      {status && (
        <p className="text-sm mt-2 text-primary-content/80">
          {status}
        </p>
      )}
    </form>
  );
} 
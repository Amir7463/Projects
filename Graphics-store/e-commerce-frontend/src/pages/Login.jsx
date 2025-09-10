
import React, { useState } from 'react';
import axios from 'axios';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log("hello");
    console.log(`Email: ${email}\nPassword: ${password}`);
    // Handle login logic here
    // alert(`Email: ${email}\nPassword: ${password}`);

    // Example: Send a POST request to your backend API for login
   const res =await axios.post('http://localhost:3000/api/user/login', { email, password })
   console.log(res.data); // Log the response from the server
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f6fa' }}>
      <form style={{ background: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', minWidth: '320px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#333' }}>Login</h2>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '.5rem', color: '#555' }}>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '.5rem', color: '#555' }}>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '.75rem', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }} onClick={handleSubmit} >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
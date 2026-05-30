import React, { useState } from 'react'
import './App.css'

const Signup = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.username || !form.email || !form.password) {
      setError('All fields are required')
    } else if (!form.email.includes('@')) {
      setError('Invalid email')
    } else if (form.password.length < 6) {
      setError('Password must be 6+ characters')
    } else {
      setError('')
      alert('Signup Successful 🎉')
    }
  }

  return (
    <div className="auth-bg">
      <div className="auth-card">

        <div className="avatar">👤</div>

        <form onSubmit={handleSubmit}>

          <div className="input-box">
            <span>👤</span>
            <input
              type="text"
              name="username"
              placeholder="USERNAME"
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <span>📧</span>
            <input
              type="text"
              name="email"
              placeholder="EMAIL"
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <span>🔒</span>
            <input
              type="password"
              name="password"
              placeholder="PASSWORD"
              onChange={handleChange}
            />
          </div>

          <button className="btn">SIGN UP</button>

          <p className="error">{error}</p>

        </form>
      </div>
    </div>
  )
}

export default Signup
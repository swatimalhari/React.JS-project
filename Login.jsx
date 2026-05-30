import React, { useState } from 'react'
import './App.css'

const Login = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    remember: false
  })

  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.username || !form.password) {
      setError('All fields are required')
    } else if (form.password.length < 6) {
      setError('Password must be at least 6 characters')
    } else {
      setError('')
      alert('Login Successful ✅')
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
              value={form.username}
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <span>🔒</span>
            <input
              type="password"
              name="password"
              placeholder="PASSWORD"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className="options">
            <label>
              <input
                type="checkbox"
                name="remember"
                onChange={handleChange}
              />
              Remember me
            </label>

            <p className="link">Forgot password?</p>
          </div>

          <button type="submit" className="btn">LOGIN</button>

          <p className="error">{error}</p>

        </form>
      </div>
    </div>
  )
}

export default Login
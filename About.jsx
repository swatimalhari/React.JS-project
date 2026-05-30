import React, { useState } from 'react'
import './App.css'

const About = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

    if (!username || !password) {
      setError('All fields required')
    } else if (password.length < 6) {
      setError('Password must be 6+ characters')
    } else {
      setError('')
      alert('Login Successful ')
    }
  }

  return (
    <div className="about-container">

      <h1 className="title">Why Choose Us</h1>

      <div className="card-container">

        <div className="card card1">
          <h1>Convenient & Hassle-Free</h1>
          <p>Book your service slot online and we will take care of the rest</p>
        </div>

        <div className="card card2">
          <h1>Saves Time</h1>
          <p>Why waste time in garages when you can get a much better service at home</p>
        </div>

        <div className="card card3">
          <h1>Transparent Pricing</h1>
          <p>You can rest assured about the prices and service quality</p>
        </div>

      </div>

      {/*LOGIN CARD */}
      <div className="auth-bg">

        <div className="auth-card">

          <div className="avatar"></div>

          <form onSubmit={handleLogin}>

            <div className="input-box">
              <span>👨‍💻</span>
              <input
                type="text"
                placeholder="USERNAME"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-box">
              <span>🔒</span>
              <input
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <p className="link">Forgot password?</p>
            </div>

            <button className="btn">LOGIN</button>

            <p className="error">{error}</p>

          </form>

        </div>

      </div>

    </div>
  )
}

export default About
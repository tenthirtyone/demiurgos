import React, { useState } from 'react'
import Panel from '../ui/Panel'
import Card from '../ui/Card'
import { useAuthUser } from '../utils/AuthUser'

// Fake API Network Call
const apiLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    if (username === 'credible' && password === 'credible') {
      resolve()
    } else {
      reject()
    }
  })
}

const Login = ({ history }) => {
  const { setLogged } = useAuthUser()
  const [errorMessage, setErrorMessage] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    const [usernameNode, passwordNode] = e.target.elements

    apiLogin(usernameNode.value, passwordNode.value)
      .then(() => {
        setLogged(true)
        history.push('/dashboard')
      })
      .catch(() => {
        setLogged(false)
        setErrorMessage('Invalid')
      })
  }

  return (
    <Panel className="panel-login">
      <Card style={{ minHeight: '10em' }}>
        <h1 className="heading-1">Welcome to Credible, almost...</h1>        
        <p>
          The username is <strong>credible</strong> and the password is <strong>credible</strong>
        </p>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <form className="spacing" onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="button">
            Login
          </button>
        </form>
      </Card>
    </Panel>
  )
}

export default Login

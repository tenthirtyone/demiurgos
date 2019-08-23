import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import classnames from 'classnames'
import { useAuthUser } from '../utils/AuthUser'

const AuthorizedPrimaryHeader = ({ location }) => {
  const { setLogged } = useAuthUser()
  const lightBackground = ['/products', '/products/add'].includes(location.pathname)

  return (
    <header className="authorized-primary-header">
      <span className="logo">
        <img src="/static/logo.png" alt="Credible Logo" />
        <span className="brand">Credible</span>
      </span>
      <nav className="primary-nav">
        <button onClick={() => setLogged(false)} className="logout text-light-tint">
          Logout
        </button>
      </nav>
    </header>
  )
}

export default withRouter(AuthorizedPrimaryHeader)

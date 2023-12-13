import {NavLink} from 'react-router-dom'


const LoggedOutHeader = () => {
  return (
    <div className="nav-user">
        <nav className="navigations logged-out-nav">
            <button>Login</button>
            <button>Signup</button>
        </nav>
    </div>
  )
}

export default LoggedOutHeader

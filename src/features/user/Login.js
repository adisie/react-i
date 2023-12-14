

const Login = () => {
  return (
    <div className="form-container">
        <form>
            <h3>Login</h3>
            <div className="input-controll">
                <input type="text" placeholder="username" name="username" />
                <div className="error username"></div>
            </div>
            <div className="input-controll">
                <input type="password" placeholder="password" name="password" />
                <div className="error password"></div>
            </div>
            <div className="btn-container">
                <span className="submit-btn">Login</span>
                <span className="nav-link-btn">no account ?</span>
            </div>
        </form>
    </div>
  )
}

export default Login

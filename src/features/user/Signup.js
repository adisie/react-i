import { useDispatch } from "react-redux"

import {loginSignupToggler} from '../user/zuserSclice'

const Signup = () => {
  // dispatch 
  const dispatch = useDispatch()

  return (
    <div className="form-container">
        <form>
            <h3>Signup</h3>
            <div className="input-controll">
                <input type="text" placeholder="username" name="username" />
                <div className="error username"></div>
            </div>
            <div className="input-controll">
                <input type="text" placeholder="email" name="email" />
                <div className="error email"></div>
            </div>
            <div className="input-controll">
                <input type="password" placeholder="password" name="password" />
                <div className="error password"></div>
            </div>
            <div className="input-controll">
                <input type="password" placeholder="confirm password" />
                <div className="error password2"></div>
            </div>
            <div className="btn-container">
                <span className="submit-btn">Signup</span>
                <span className="nav-link-btn" onClick={()=>dispatch(loginSignupToggler())}>have account ?</span>
            </div>
        </form>
    </div>
  )
}

export default Signup

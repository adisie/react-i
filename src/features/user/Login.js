import { useDispatch,useSelector } from "react-redux"

import {
    selectIsFormError,
    loginSignupToggler,
    formErrorToggler,
} from '../user/zuserSclice'

const Login = () => {
  // states
  const isFormError = useSelector(selectIsFormError)
  // dispatch
  const dispatch = useDispatch()

  const loginIndicator = () => {
    const form = document.getElementById('form')
    isFormError && form && form.classList.add('error')
  }
  
  let timer = isFormError && setInterval(loginIndicator,300)

  setTimeout(()=>{
    clearInterval(timer)
    const form = document.getElementById('form')
    dispatch(formErrorToggler(false))
    form && form.classList.remove('error')
  },3000)

  return (
    <div className="form-container">
        <form className="" id="form">
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
                <span className="nav-link-btn" onClick={()=>dispatch(loginSignupToggler())}>no account ?</span>
            </div>
        </form>
    </div>
  )
}

export default Login

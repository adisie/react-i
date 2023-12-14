import { useState } from "react"

import { useDispatch,useSelector } from "react-redux"

import {
    selectIsFormError,
    loginSignupToggler,
    formErrorToggler,
    loginUser,
    selectErrors,
    resetErrors,
    selecetIsLoginSuccessFull,
    selectIsLoginLoading,
} from '../user/zuserSclice'

import LoginSpinner from "../../components/spinners/LoginSpinner"

const Login = () => {
  // states
  const [formField,setFormField] = useState({
    username: '',
    password: ''
  })

  // fields
  const {username,password} = formField

  // states from slice
  const isFormError = useSelector(selectIsFormError)
  const errors = useSelector(selectErrors)
  const isLoginSuccessFull = useSelector(selecetIsLoginSuccessFull)
  const isLogginLoading = useSelector(selectIsLoginLoading)

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

  // input change handler
  const inputChangeHandler = e => {
    const {name,value} = e.target 
    setFormField(prevState=>({
      ...prevState,
      [name]: value
    }))
  }

  // submit handler
  const submitHandler = () => {
    const usernameError = document.querySelector('.error.username')
    const passwordError = document.querySelector('.error.password')

    if(!username.trim()){
      usernameError.textContent = 'username required'
    }else{
      usernameError.textContent = ''
    }

    if(!password){
      passwordError.textContent = 'password required'
    }else{
      passwordError.textContent = ''
    }

    if(username.trim() && password){
      dispatch(loginUser({username,password}))
    }
  }


  if(isLoginSuccessFull){
    window.location.assign('/')
  }

  if(isLogginLoading){
    return <LoginSpinner />
  }

  return (
    <div className="form-container">
        <form className="" id="form">
            <h3>Login</h3>
            <div className="input-controll">
                <input type="text" placeholder="username" name="username"  
                  value={username} 
                  onChange={inputChangeHandler} />
                <div className="error username">{errors ? errors.username : ''}</div>
            </div>
            <div className="input-controll">
                <input type="password" placeholder="password" name="password" 
                  value={password} 
                  onChange={inputChangeHandler} />
                <div className="error password">{errors ? errors.password : ''}</div>
            </div>
            <div className="btn-container">
                <span className="submit-btn" onClick={submitHandler}>Login</span>
                <span className="nav-link-btn" onClick={()=>{
                  dispatch(loginSignupToggler(false))
                  dispatch(resetErrors())
                }}>no account ?</span>
            </div>
        </form>
    </div>
  )
}

export default Login

import { useState } from "react"

import { useDispatch,useSelector } from "react-redux"

import {
    loginSignupToggler,
    resetErrors,
    selectIsLoginLoading,
    selectErrors,
    selecetIsLoginSuccessFull,
    signupUser,
} from '../user/zuserSclice'

// spinner
import LoginSpinner from "../../components/spinners/LoginSpinner"

const Signup = () => {
    // local states
    const [formField,setFormField] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })

    // slice states
    const isLogginLoading = useSelector(selectIsLoginLoading)
    const isLoginSuccessFull = useSelector(selecetIsLoginSuccessFull)
    const errors = useSelector(selectErrors)

    // fields
    const {username,email,password,password2} = formField 

  // dispatch 
  const dispatch = useDispatch()

    // input chnage handler
    const inputChangeHandler = e => {
        const {name,value} = e.target
        setFormField(prevState=>({
            ...prevState,
            [name]: value
        }))
    }

    // submit Handler
    const submitHandler = () => {
        const usernameError = document.querySelector('.error.username')
        const emailError = document.querySelector('.error.email')
        const passwordError = document.querySelector('.error.password')
        const password2Error = document.querySelector('.error.password2')


        if(!username.trim()){
            usernameError.textContent = 'username required'
        }else {
            usernameError.textContent = ''
        }

        if(!email.trim()){
            emailError.textContent = 'email address required'
        }else {
            emailError.textContent = ''
        }

        if(!password){
            passwordError.textContent = 'password required'
        }else {
            passwordError.textContent = ''
        }

        if(!password2){
            password2Error.textContent = 'confirm password'
        }else if(password !== password2){
            password2Error.textContent = 'passwords not match'
        }else {
            password2Error.textContent = ''
        }

        if(username.trim() && email.trim() && password && password2 && password === password2){
            dispatch(signupUser({username,email,password}))
            // setFormField({
            //     username: '',
            //     email: '',
            //     password: '',
            //     password2: ''
            // })
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
        <form>
            <h3>Signup</h3>
            <div className="input-controll">
                <input type="text" placeholder="username" name="username" 
                    value={username} 
                    onChange={inputChangeHandler} />
                <div className="error username">{errors ? errors.username : ''}</div>
            </div>
            <div className="input-controll">
                <input type="text" placeholder="email" name="email" 
                    value={email} 
                    onChange={inputChangeHandler} />
                <div className="error email">{errors ? errors.email : ''}</div>
            </div>
            <div className="input-controll">
                <input type="password" placeholder="password" name="password" 
                    value={password} 
                    onChange={inputChangeHandler} />
                <div className="error password">{errors ? errors.password : ''}</div>
            </div>
            <div className="input-controll">
                <input type="password" placeholder="confirm password"  name="password2" 
                    value={password2} 
                    onChange={inputChangeHandler} />
                <div className="error password2"></div>
            </div>
            <div className="btn-container">
                <span className="submit-btn" onClick={submitHandler}>Signup</span>
                <span className="nav-link-btn" onClick={()=>{
                    dispatch(loginSignupToggler(true))
                    dispatch(resetErrors())
                }}>have account ?</span>
            </div>
        </form>
    </div>
  )
}

export default Signup

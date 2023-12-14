
import { useDispatch,useSelector } from 'react-redux'

import {selecteIsShowLogin,loginSignupToggler,resetErrors} from '../../features/user/zuserSclice'

const LoggedOutHeader = () => {
  // states
  const isShowLogin = useSelector(selecteIsShowLogin)

  // dispatch
  const dispatch = useDispatch()

  // toggler
  const toLoginHandler = () => {
    dispatch(resetErrors())
    const rightContainer = document.querySelector('.home-right-container')
    rightContainer.style.display = 'flex'
    if(!isShowLogin){
      dispatch(loginSignupToggler(true))
    }
  }

  const toSignupHandler = () => {
    dispatch(resetErrors())
    const rightContainer = document.querySelector('.home-right-container')
    rightContainer.style.display = 'flex'
    if(isShowLogin){
      dispatch(loginSignupToggler(false))
    }
  }
 

  return (
    <div className="nav-user">
        <nav className="navigations logged-out-nav">
            <button onClick={toLoginHandler}>Login</button>
            <button onClick={toSignupHandler}>Signup</button>
        </nav>
    </div>
  )
}

export default LoggedOutHeader

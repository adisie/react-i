
import { useDispatch,useSelector } from 'react-redux'

import {selecteIsShowLogin,loginSignupToggler} from '../../features/user/zuserSclice'

const LoggedOutHeader = () => {
  // states
  const isShowLogin = useSelector(selecteIsShowLogin)

  // dispatch
  const dispatch = useDispatch()

  // toggler
  const toLoginHandler = () => {
    if(!isShowLogin){
      dispatch(loginSignupToggler())
    }
  }

  const toSignupHandler = () => {
    if(isShowLogin){
      dispatch(loginSignupToggler())
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

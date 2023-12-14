
import { useDispatch,useSelector } from 'react-redux'

import { logoutUser,selecetIsLogoutSuccessFull} from '../../features/user/zuserSclice'

// default profiles
import defaultUserProfile from '../../assets/images/default-images/male-profile-2.jpg'

const LoggedInHeader = () => {

  // states from slices
  const isLogoutSuccessFull = useSelector(selecetIsLogoutSuccessFull)

  //dispatch
  const dispatch = useDispatch()

  // loggged out user
  const logoutUserHandler = () => {
    dispatch(logoutUser())
  }

  if(isLogoutSuccessFull){
    window.location.assign('/')
  }

  // show home right container
  const showHomeRightContainer = () => {
    const homeRightContainer = document.querySelector('.home-right-container')
    if(homeRightContainer) homeRightContainer.style.display = 'flex'
  }

  return (
    <div className="nav-user">
        <div className="logged-in-nav">
            <span className='username-span'>username</span>
            <img src={defaultUserProfile} alt="user-profile" className='user-profile' onClick={showHomeRightContainer}/>
            <button className='logout-btn' onClick={logoutUserHandler}><span></span>logout</button>
        </div>
    </div>
  )
}

export default LoggedInHeader

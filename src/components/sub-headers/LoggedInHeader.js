
import { useDispatch,useSelector } from 'react-redux'

import { 
  logoutUser,
  selecetIsLogoutSuccessFull,
  selectUser,
} from '../../features/user/zuserSclice'

// default profiles
import defaultUserProfile from '../../assets/images/default-images/male-profile-2.jpg'

const LoggedInHeader = () => {

  // states from slices
  const isLogoutSuccessFull = useSelector(selecetIsLogoutSuccessFull)
  const user = useSelector(selectUser)

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
    const userProfile = document.querySelector('.user-profile')

    if(homeRightContainer) homeRightContainer.style.display = 'flex'
    if(userProfile) {
      userProfile.style.transform = "scale(0)"
      userProfile.style.width = "0px"
      userProfile.style.height = "0px"
    }
  }

  return (
    <div className="nav-user">
        <div className="logged-in-nav">
            <span className='username-span'>{user ? user.username: ''}</span>
            <img src={defaultUserProfile} alt="user-profile" className='user-profile' onClick={showHomeRightContainer}/>
            <button className='logout-btn' onClick={logoutUserHandler}><span></span>logout</button>
        </div>
    </div>
  )
}

export default LoggedInHeader

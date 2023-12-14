

// default profiles
import defaultUserProfile from '../../assets/images/default-images/male-profile-2.jpg'

const LoggedInHeader = () => {
  return (
    <div className="nav-user">
        <div className="logged-in-nav">
            <span className='username-span'>username</span>
            <img src={defaultUserProfile} alt="user-profile" style={{width: "38px"}} className='user-profile'/>
            <button className='logout-btn'><span></span>logout</button>
        </div>
    </div>
  )
}

export default LoggedInHeader

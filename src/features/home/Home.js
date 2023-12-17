import {useSelector,useDispatch} from 'react-redux'

import {selectUser,formErrorToggler,loginSignupToggler} from '../user/zuserSclice'
// sub-pages
import HomeRightContainer from './sub-home/HomeRightContainer'

const Home = () => {
    // states
    const user = useSelector(selectUser)
    const rightContainer = document.querySelector('.home-right-container')
    const userProfile = document.querySelector('.user-profile')

    // distpatch
    const dispatch = useDispatch()

    // checker
    const userChecker = () => {
        rightContainer.style.display = 'flex'
        // if(rightContainer.)
        if(!user){
            dispatch(loginSignupToggler(true))
            dispatch(formErrorToggler(true))
        }
    }


    window.addEventListener('resize',e=>{

        if(window.innerWidth <= 712){
            rightContainer.style.display = 'none'
            if(userProfile){
                userProfile.style.transform = "scale(1)"
                userProfile.style.width = "28px"
                userProfile.style.height = "28px"
                userProfile.style.marginLeft = ".3em"
            }
        }else {
            rightContainer.style.display = 'flex'
            if(userProfile) {
                userProfile.style.transform = "scale(0)"
                userProfile.style.width = "0px"
                userProfile.style.height = "0px"
              }

        }
    })


    if(window.innerWidth < 712){
        if(rightContainer) rightContainer.style.display = 'none'
      }else{
        if(rightContainer) rightContainer.style.display = 'flex'
      }

    return ( 
        <div className="home-container">
            <div className="sub-container home-content">
               <div className="home-content-container">
                    <h3>Content</h3>
                    <button onClick={userChecker}>Add New BTN</button>
               </div>
               <HomeRightContainer />
            </div>
        </div>
     );
}
 
export default Home;
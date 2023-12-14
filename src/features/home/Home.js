import {useSelector,useDispatch} from 'react-redux'

import {selectUser,formErrorToggler,loginSignupToggler} from '../user/zuserSclice'
// sub-pages
import HomeRightContainer from './sub-home/HomeRightContainer'

const Home = () => {
    // states
    const user = useSelector(selectUser)

    // distpatch
    const dispatch = useDispatch()

    // checker
    const userChecker = () => {
        const rightContainer = document.querySelector('.home-right-container')
        rightContainer.style.display = 'flex'
        // if(rightContainer.)
        if(!user){
            dispatch(loginSignupToggler(true))
            dispatch(formErrorToggler(true))
        }
    }


    window.addEventListener('resize',e=>{
        const container = document.querySelector('.home-right-container')
        if(window.innerWidth <= 712){
            container.style.display = 'none'
        }else {
            container.style.display = 'flex'
        }
    })

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
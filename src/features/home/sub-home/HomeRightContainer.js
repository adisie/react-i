import { useDispatch } from "react-redux"

import { IoIosCloseCircle } from "react-icons/io"

// actions
import {resetErrors} from '../../user/zuserSclice'

// pages
import LoginSignup from "../../user/LoginSignup"
import UserProfileContainer from "../../user/UserProfileContainer"

const HomeRightContainer = () => {

    // dispatch
    const dispatch = useDispatch()

    // hide home right container
    const hideHomeRightContainer = () => {
        dispatch(resetErrors())
        const container = document.querySelector('.home-right-container')
        const usernameError = document.querySelector('.error.username')
        const emailError = document.querySelector('.error.email')
        const passwordError = document.querySelector('.error.password')
        const password2Error = document.querySelector('.error.password2')
        if(usernameError) usernameError.textContent = ''
        if(emailError) emailError.textContent = ''
        if(passwordError) passwordError.textContent = ''
        if(password2Error) password2Error.textContent = ''

        if(window.innerWidth < 712) {
            container.style.display = 'none'
        }
    }

  return (
    <div className="home-right-container">
        <button className='home-right-container-close-btn' onClick={hideHomeRightContainer}><IoIosCloseCircle /></button>
        {
            !true 
            ?
            <UserProfileContainer />
            :
            <LoginSignup />
        }
        <div className="right-notification">
            notification
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum obcaecati saepe perferendis qui nostrum magni, laudantium voluptatem odio nisi, alias exercitationem placeat, in esse recusandae temporibus unde error? Quaerat labore, deserunt, cum eum ut assumenda ea nulla eaque ipsa dolore id pariatur nobis exercitationem dolorum ullam odit nisi commodi laboriosam error cupiditate dolor aliquid sapiente beatae iure? Facilis minus animi et saepe enim quod voluptas nulla voluptatem. Commodi sequi qui provident totam ad unde numquam quos hic saepe, maiores dignissimos, porro, sint obcaecati? Fuga, alias praesentium asperiores tempore minima officiis ipsa cumque maxime harum quo sed vel ea autem deserunt?
            </p>
        </div>
    </div>
  )
}

export default HomeRightContainer

import { IoIosCloseCircle } from "react-icons/io"

// pages
import LoginSignup from "../../user/LoginSignup"
import UserProfileContainer from "../../user/UserProfileContainer"

const HomeRightContainer = () => {

    // hide home right container
    const hideHomeRightContainer = () => {
        const container = document.querySelector('.home-right-container')
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

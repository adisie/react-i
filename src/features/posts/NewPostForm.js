import {useSelector,useDispatch} from 'react-redux'
import { AiFillPlusCircle } from "react-icons/ai"

// actions
import {selectUser,loginSignupToggler,formErrorToggler} from '../user/zuserSclice'

const NewPostForm = () => {
     // states
     const user = useSelector(selectUser)

    // DOM elements
    const rightContainer = document.querySelector('.home-right-container')

    // dispatch
    const dispatch = useDispatch()

    // adjust textarea height
    const adjustTextAreaHeight = e => {
        const element = document.querySelector('textarea[name="body"]')
        element.style.height = "29px"
        let scHeight = e.target.scrollHeight 
        e.target.style.height = `${scHeight}px`
    }


     // checker
     const userChecker = () => {
        if(rightContainer) rightContainer.style.display = 'flex'
        if(!user){
            dispatch(loginSignupToggler(true))
            dispatch(formErrorToggler(true))
        }
    }

    // check a user is logged in or not
    const isUserExist = e => {
        if(!user){
            e.target.blur()
            e.target.disable = true
            userChecker()
        }
    }

  return (
    <div className="add-new-post-form-container">
        <div className="form-container">
            <form>
                <textarea name="body" 
                    onKeyUp={adjustTextAreaHeight} 
                    onFocus={isUserExist}
                    ></textarea>
                <span className="send-btn"><AiFillPlusCircle /></span>
            </form>
        </div>
    </div>
  )
}

export default NewPostForm

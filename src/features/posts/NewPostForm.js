import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { AiFillPlusCircle } from "react-icons/ai"

// actions
import {selectUser,loginSignupToggler,formErrorToggler} from '../user/zuserSclice'
import {addPost,getAuthors} from '../posts/zpostSlice'

const NewPostForm = () => {
    // local states
    const [body,setBody] = useState('')

    // fields
     // states
     const user = useSelector(selectUser)

    // DOM elements
    const rightContainer = document.querySelector('.home-right-container')
    const textArea = document.querySelector('textarea[name="body"]')

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
            if(rightContainer) rightContainer.style.display = 'flex'
            e.target.blur()
            e.target.disable = true
            userChecker()
        }else {
            e.target.focus()
            e.target.disable = false
        }
    }

    // add new submit handler
    const submitHandler = () => {
        if(body.trim()){
            dispatch(addPost({body}))
            setBody('')
            textArea.style.height = '29px'
        }
    }

  return (
    <div className="add-new-post-form-container">
        <div className="form-container">
            <form>
                <textarea name="body" 
                    onKeyUp={adjustTextAreaHeight} 
                    onFocus={isUserExist} 
                    value={body} 
                    onChange={e=>setBody(e.target.value)}
                    ></textarea>
                <span className="send-btn" onClick={submitHandler}><AiFillPlusCircle /></span>
            </form>
        </div>
    </div>
  )
}

export default NewPostForm

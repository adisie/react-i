import { useSelector } from "react-redux"

import {selecteIsShowLogin} from '../user/zuserSclice'

// sub pages
import Login from "./Login"
import Signup from './Signup'

const LoginSignup = () => {
    const isShowLogin = useSelector(selecteIsShowLogin)

    return ( 
        <>
        {
            isShowLogin
            ?
            <Login />
            :
            <Signup />
        }
        </>
     );
}
 
export default LoginSignup;
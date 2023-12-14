
// sub pages
import Login from "./Login"
import Signup from './Signup'

const LoginSignup = () => {
    return ( 
        <>
        {
            !true
            ?
            <Signup />
            :
            <Login />
        }
        </>
     );
}
 
export default LoginSignup;
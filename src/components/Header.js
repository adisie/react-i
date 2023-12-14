import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectUser } from '../features/user/zuserSclice'

// sub headers
import LoggedOutHeader from './sub-headers/LoggedOutHeader'
import LoggedInHeader from './sub-headers/LoggedInHeader'

const Header = () => {

    // states from slices
    const user = useSelector(selectUser)

    return ( 
        <header>
            <div className="sub-container header-container">
                <div className="site-logo">
                    <NavLink to='/' className='logo-home-link'>ishare</NavLink>
                </div>
                {
                    user
                    ?
                    <LoggedInHeader />
                    :
                    <LoggedOutHeader />
                }
            </div>
        </header>
     );
}
 
export default Header;
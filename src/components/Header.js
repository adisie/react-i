import {NavLink} from 'react-router-dom'

// sub headers
import LoggedOutHeader from './sub-headers/LoggedOutHeader'
import LoggedInHeader from './sub-headers/LoggedInHeader'

const Header = () => {
    return ( 
        <header>
            <div className="sub-container header-container">
                <div className="site-logo">
                    <NavLink to='/' className='logo-home-link'>ishare</NavLink>
                </div>
                {
                    !true
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
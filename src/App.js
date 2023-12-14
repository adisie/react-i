import {Routes,Route} from 'react-router-dom'

// components -> header
import Header from './components/Header'

// pages -> user authentication
import Login from "./features/user/Login"
import Signup from "./features/user/Signup"

// pages -> posts
import Home from './features/home/Home'

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App

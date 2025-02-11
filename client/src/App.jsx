import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Cart from './Components/Cart'
import Product from './Components/Product'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './Components/PrivateRoute/Auth'
import Profile from './Components/Profile'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <ToastContainer />
    <Routes>
    <Route path='/' element={<Home/>}/>   
     <Route path='/signUp' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>  
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/product' element={<Product/>}/>
    
    <Route path='' element={<PrivateRoute/>}>
    <Route path='/profile' element={<Profile/>}/>
    </Route>


    </Routes>
    <Footer/>
    </BrowserRouter>





    
    
    </>
  )
}

export default App

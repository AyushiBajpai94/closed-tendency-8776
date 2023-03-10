import {Routes,Route} from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Sigup';
import Home from '../pages/Home'
import Products from '../pages/products';
import ProductCardDetail from '../pages/productCardDetail';
import Cartpage from '../pages/Cartpage';
import Admin from '../pages/admin';
import PrivateRoute from '../components/PrivatRoute';
import PaymentPage from '../pages/payment'

function AllRoutes(){
return (
    

    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/product' element={<Products />}/>
        <Route path='/product/:id' element={<ProductCardDetail />}/>
        <Route path='/cart' element={
            <PrivateRoute>
                 <Cartpage />
            </PrivateRoute>
       
        } />
        <Route path='/payment' element={
            <PrivateRoute>
                 <PaymentPage />
            </PrivateRoute>
       
        } />
        <Route path='admin' element={<Admin/>}/>
    </Routes>
    
)
}

export default AllRoutes;
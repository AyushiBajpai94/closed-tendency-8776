import {Routes,Route} from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Sigup';
import Home from '../pages/Home'
import Products from '../pages/products';

function AllRoutes(){
return (
    

    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/product' element={<Products />}/>
    </Routes>
    
)
}

export default AllRoutes;
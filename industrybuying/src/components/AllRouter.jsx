import {Routes,Route} from 'react-router-dom';
import SignIn from '../pages/Login';
import Signup from '../pages/Sigup';

function AllRoutes(){
return (
    <>

    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/cart' element={<Cart />}/>
    </Routes>
    </>
)
}

export default AllRoutes;
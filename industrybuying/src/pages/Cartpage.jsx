import React from 'react'
import { useParams} from 'react-router-dom';
import axios from 'axios'
import { useEffect } from 'react';
import { border, Box, Text } from '@chakra-ui/react';
import CartComponent from '../pages/cartcomponent'
import {CartOrderSummary} from '../pages/order'

const Cartpage = () => {


const[cartData,setCartData]=React.useState([]);
const[page,setPage]=React.useState(1)
const {id}=useParams();
   
const getCartData=()=>{
        return axios({
            method:'get',
            url:`https://mockserver-y04s.onrender.com/cart`
        })
    };

const fetchCartData=()=>{
    getCartData().then((res)=>setCartData(res.data))
};

useEffect(()=>{
    fetchCartData(page)
},[page]);


const deleteCartData=(id)=>{
    return axios({
      method:"delete",
      url:`https://mockserver-y04s.onrender.com/cart/${id}`
    })
  };
  const handleDelete =(id)=>{
    deleteCartData(id)
    fetchCartData(page)
  };


  return ( 
    cartData.length===0  ? (<h1>cart is Empty</h1>):
   ( <Box>

<Box   fontSize='3xl'
 pt='20px' pb='20px' bgColor='orange.600' color='white'>My Cart</Box>
 <Box display='flex'>
 <Box   w='60%'>
  {cartData.map((item)=>(
    <Box key={item.id} mt='20px' mb='30px'> 
        <CartComponent 
        id={item.id}
        name={item.name}
        image={item.image}
        price={item.price}
        handleDelete={handleDelete}/>
    </Box>
     ))}
 </Box>
 <Box  h='300px' w='40%' mt='20px' ml='5px'>
    
    <CartOrderSummary />
 </Box>
     </Box>
    </Box>)
  )
}

export default Cartpage

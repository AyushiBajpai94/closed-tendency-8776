import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid} from '@chakra-ui/react';
import{Link as RouterLink} from 'react-router-dom';
import ProductCardInfo from '../components/ProductCardInfo';
function Products() {

const[prod,setProd]=React.useState([])
    const getData=()=>{
        return axios({
            method:'get',
            url:`https://mockserver-y04s.onrender.com/products`
        })
    };

const fetchedData=()=>{
    getData().then((res)=>setProd(res.data))
};
useEffect(()=>{
    fetchedData()
},[]);

// fetchedData()

  return (
    
    <div>
        <Grid templateColumns={`repeat(4, 1fr)`} rowGap={1} ml='2px' mr='2px' mt='10px' >
      {prod.map((el)=>(
        // <GridItem>
    
      <ProductCardInfo
      id={el.id}
      image={el.image}
      name={el.name}
      price={el.price}/>
    // </RouterLink>
    // </GridItem>
      ))}
      </Grid>
    </div>
  )
}

export default Products

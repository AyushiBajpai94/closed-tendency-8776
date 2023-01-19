import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Image ,Text,Box, GridItem,Grid} from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter,Stack,Heading,
Divider,ButtonGroup,Button } from '@chakra-ui/react'
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
      <Card maxW='sm'  >
      <CardBody h='200px' >
        <Image
          src={el.image}
          alt={el.name}
          borderRadius='lg'
          w="300px"
          
        />
        <Stack mt='6' >
          <Heading size='md'>{el.name}</Heading>
          <Text color='blue.600' fontSize='2xl'>
            {el.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='orange'>
            Buy now
          </Button>
          <Button variant='ghost' colorScheme='orange'>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
    // </GridItem>
      ))}
      </Grid>
    </div>
  )
}

export default Products

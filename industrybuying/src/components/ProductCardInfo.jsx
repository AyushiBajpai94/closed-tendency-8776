import React from 'react'
import { Image ,Text,Box, GridItem,Grid} from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter,Stack,Heading,
Divider,ButtonGroup,Button } from '@chakra-ui/react';
import{Link as RouterLink} from 'react-router-dom';

const ProductCardInfo = ({id,image,name,price}) => {
    // console.log(id)
  return (
   <>
   <RouterLink to={`/product/${id}`}>
   <Card maxW='sm'>
   
      <CardBody h='200px' >
        <Box h='280px'>
            <Image
            src={image}
            alt={name}
            borderRadius='lg'
            />
        </Box>
        
        <Stack mt='6' >
            <Box>
                <Heading size='md'>{name}</Heading>
                <Text color='orange.600' fontSize='md'>
                    {price}
                </Text>
            </Box>
          
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
    </RouterLink>
   </>
  )
}

export default ProductCardInfo

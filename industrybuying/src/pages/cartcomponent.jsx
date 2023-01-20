import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { IconButton ,Box} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

export default function CartComponent({id,name,image,price,handleDelete}) {
  const[Qty,setQty]=useState(1);


  const handleChange=(val)=>{
   setQty(Qty+val)
  };
 
  return (
    <> 
<Card    boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  ml='20px'
>
  <Image
    maxW={{ base: '100%', sm: '200px' }}
    src={image}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='sm'>{name}</Heading>
      <Heading as='h6' size='xs' mt='20px'>
       TotalPrice: {Qty*price}
  </Heading>

    </CardBody>

    <CardFooter display='flex' flexDirection='column'>
    <Stack 
            w='200px'
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Button
           
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bgColor='orange.500'
              _focus={{
                bg: 'orange.400',
              }}
              onClick={()=>handleChange(1)}
              >
              +
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bgColor='orange.500'
              _focus={{
                bg: 'orange.400',
              }}>
              {Qty}
            </Button>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bgColor='orange.500'
              _focus={{
                bg: 'orange.400',
              }}
              disabled={Qty === 1}
              onClick={()=>handleChange(-1)}
              
                        >
              -
            </Button>
            <IconButton aria-label='Search database' rounded={'full'} bgColor='orange.500'_focus={{
                bgColor: 'orange.400',
              }} icon={<DeleteIcon onClick={()=>handleDelete(id)} />} />
          </Stack>
          <Stack 
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}>
            
            
            </Stack>

    </CardFooter>
    
  </Stack>
</Card>

</>

  )
}
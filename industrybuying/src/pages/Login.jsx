import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import {useState } from 'react';
  
  export default function Login() {
    const{isAuth,setisAuth,login,token}=useContext(AuthContext);
    const [email,setEmail]=useState('gtatterton0@ehow.com')
    const[password,setPassword]=useState('Gertrudis Tatterton')
    const [LoginInfo,setLoginInfo]= useState({})

const handleEmail=(e)=>{
  setEmail(e.target.value)
};
const handlePass=(e)=>{
  setPassword(e.target.value)
}

const handleClick=async (e)=>{
  // setLoginInfo({...LoginInfo,
  // email:email,
  //  password:password});
   e.preventDefault();
   let Email=e.target.value;
   let Password=e.target.value;
   let Info={email:Email,password:Password};
   try {
    let res=await fetch(`https://reqres.in/api/login`,{
      method:"POST",
      headers:{
      "Content-type":"application/json"
      },
      body:JSON.stringify(Info)
    });
    let result=await res.json();
    if(result.token){
      login(result.token)
    }
   } catch (error) {
    console.log(error)
   }

  };





    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email" onChange={handleEmail}>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" onChange={handlePass}>
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                onClick={handleClick}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                    
                  }}>
                  Sign in 
                </Button>
                {/* <Link href='/signup'>SignUp</Link> */}
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
import React from "react";
import Navigate from 'react'
import  a from '../a.jpg';
import {Link as RouterLink}  from 'react-router-dom';
import Login from '../pages/Login'

import { SearchIcon,UserIcon} from '@chakra-ui/icons';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'

import {
    AvatarGroup ,
    
    Avatar,
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
    Input,
    InputRightAddon,
    InputLeftAddon,
    InputGroup,
    
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box  >
        <Flex
          bg={useColorModeValue('blue.900', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <a href="/">
            <Image  src={a} width='50px' style={{borderRadius:'50%'}} />
            </a>
            
            
            <Stack spacing={4}>

            <InputGroup size='sm' ml={'10'} mt='2' width='600px'>
                <InputLeftAddon bgColor='#DD6B20' children={
                                 <Menu>
                                 <MenuButton as={Button} h='auto'w={'140px'} borderRadius='1px' bgColor='#DD6B20'  color='white' pl={0} rightIcon={<ChevronDownIcon />}>
                                   All categories
                                 </MenuButton>
                                 <MenuList  zIndex='5'>
                                   <MenuItem>All categories</MenuItem>
                                   <MenuItem>Abrasives</MenuItem>
                                   <MenuItem>Adhesives Sealants and Tape</MenuItem>
                                   <MenuItem>Appliances</MenuItem>
                                   <MenuItem>Automotive Maintenance and Accessories</MenuItem>
                                   <MenuItem>Bearings</MenuItem>
                                   <MenuItem>Cleaning</MenuItem>
                                   <MenuItem>Corporate Gifts</MenuItem>
                                   <MenuItem>Electrical</MenuItem>
                                   <MenuItem>Electronics & Robotics</MenuItem>
                                 </MenuList>
                               </Menu>
                } />
                <Input placeholder='Search Products by title,supplier,sku,category,brand etc' bgColor='white'/>
                <InputRightAddon children={<SearchIcon color='orange.500' />} />
             </InputGroup>
         </Stack>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10} width='400px'>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack 
          ml='0px'
          mr='20%'
          w={400}
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
                <AvatarGroup spacing='0.5 rem'  >
                    <Avatar bg='orange.500'  />
                </AvatarGroup>
                <RouterLink to='/signup'>
                        <Button 
                            as={'a'}
                            fontSize={'sm'}
                            fontWeight={400}
                            //  variant={'link'}
                            href={'#'}>
                            SignIn
                    </Button>
                </RouterLink>
            <RouterLink to='/cart'>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'orange.400'}
              href={'#'}
              _hover={{
                bg: '#DD6B2',
              }}  >
              Cart
            </Button>
            </RouterLink>
           
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
        
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
       
          <Box >
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                
                </Link>
              </PopoverTrigger>
  
              
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    
                  </Stack>
                </PopoverContent>
              
            </Popover>
          </Box>
        
      </Stack>
    );
  };
  
  
  

//   <AvatarGroup spacing='1rem'>
//   <Avatar bg='red.500' icon={<AiOutlineUser fontSize='1.5rem' />} />
//   <Avatar bg='teal.500' />
// </AvatarGroup>
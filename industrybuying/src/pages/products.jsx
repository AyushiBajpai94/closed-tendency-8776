import React from 'react'
import { Box, Heading,Text ,Flex,Spacer,Input,InputGroup,InputLeftElement,InputRightElement,InputRightAddon} from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel,Checkbox ,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Container,
    Button
} from '@chakra-ui/react'
import{SearchIcon,ChevronDownIcon,} from '@chakra-ui/icons'
import Products from './productCard';
import {ArrowBackIcon} from '@chakra-ui/icons'

// RangeSlider
import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
  } from '@chakra-ui/react'
const ProductPage = () => {
  return (
    <>
    <Box>
    <Tabs>
        
  <TabList>
    <Box border='1px solid black' w='200px' pt='8px' mt='0px' borderTop='0px' borderBottom='0px'>
    <Text>Grain Processing</Text>
    </Box>
    <Tab>Agriculture Implements</Tab>
    <Tab>Agriculture & Gardening - Made in Japan</Tab>
    <Tab>Artificial Grass</Tab>
  </TabList>

  {/* <TabPanels>
    <TabPanel>
    <p>Agriculture Implements</p>
    </TabPanel>
    <TabPanel>
        <p>Agriculture & Gardening</p>
      <Products />
    </TabPanel>
    <TabPanel>
      <p>Artificial Grass</p>
    </TabPanel>
  </TabPanels> */}
</Tabs>
    </Box>
    <Box   display='flex' flexDirection='row'>
        

        {/* sidebar */}
        <Box w='25%'  className='leftside' bgColor='gray.50'>
                <Box mt='20px' borderBottom='dotted' pb='15px'>
                    <Heading as='h5' size='sm'>CATEGORIES</Heading>
                    <p><ArrowBackIcon/>Agriculture Garden & Landscaping</p>
                </Box>
                <Box borderBottom='dotted' mt='3px' pb='15px' >
                <Text mt='30px' fontWeight='bold'>PRICE RANGE (Rs)</Text>
                <RangeSlider
                        aria-label={['min', 'max']}
                        colorScheme='orange'
                        defaultValue={[10, 80]}
                        >
                        <RangeSliderTrack>
                            <RangeSliderFilledTrack />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={0} />
                        <RangeSliderThumb index={1} />
                        </RangeSlider>
                        <Box mt='10px'>
                            <Flex>
                                    <Box p='1' bg='whiteAlpha.900' border='gray.500 1px solid' w='auto' h='30px' ml='10px'>
                                    188
                                    </Box>
                                    <Spacer >to</Spacer>
                                    <Box p='1' bg='whiteAlpha.900' border='gay.500 1px solid' w='auto' h='30px' mr='10px'>
                                        69900
                                    </Box>
                            </Flex>
                        </Box>
                </Box>
                <Box borderBottom='dotted' pb='25px'>
                    <Text size='sm' align='left' ml='10px' mt='10px' fontWeight='semibold' fontSize='smaller'>BRANDS</Text>
                    <InputGroup mt='20px'>
                            <InputLeftElement
                            pointerEvents='none'
                            color='gray.300'
                            fontSize='1.2em'
                            />
                            <Input placeholder='Search by Brands' w='300px'ml='10px' h='30px'/>
                            <InputRightElement children={<SearchIcon color='grey.500' mr='20px'pb='3px' />} />
                    </InputGroup>
                    <Box className='CheckBox' mt='10px'>
                            <Checkbox colorScheme='orange'mr='160px'>AgriPro (29)</Checkbox>
                            <Checkbox colorScheme='orange'mr='160px'>Confider (7)</Checkbox>
                            <Checkbox colorScheme='orange'mr='182px'>RAJA (2)</Checkbox>
                            <Checkbox colorScheme='orange'mr='155px'>Rico Italy (2)</Checkbox>
                            <Checkbox colorScheme='orange'mr='125px'>KISANKRAFT (2)</Checkbox>
                        </Box>
                </Box>
                <Box className='discount' borderBottom='dotted' pb='20px'fontSize='smaller'>
                  <Text size='sm' align='left' ml='10px' mt='10px' pb='10px' fontWeight='semibold'>DISCOUNT</Text>
                   <Checkbox colorScheme='orange'mr='170px'>Upto 10% </Checkbox>
                    <Checkbox colorScheme='orange'mr='160px'>10% - 20%</Checkbox>
                    <Checkbox colorScheme='orange'mr='155px'>40% - 50%</Checkbox>
                </Box>

                <Box className='offers' borderBottom='dotted' pb='30px' fontSize='smaller'>
                  <Text size='sm' align='left' ml='10px' mt='10px' pb='10px' fontWeight='semibold'>OFFERS</Text>
                   <Checkbox colorScheme='orange'mr='130px'>Clearance Sale</Checkbox>
                </Box>
                <Box className='availablity' borderBottom='dotted' pb='30px' fontSize='smaller'>
                  <Text size='sm' align='left' ml='10px' mt='10px' pb='10px' fontWeight='semibold'>AVAILABILITY</Text>
                   <Checkbox colorScheme='orange'mr='90px'>Exclude Out Of Stock</Checkbox>
                </Box>
            
        </Box>
       
        <Box w='80%'  h='auto' className='rightside' bgColor='whiteAlpha.200'>
             {/* --------------------------Top2Nav------------------------------ */}
            <Box h='50px'  display='flex' className='top' flexDirection='row'>
                    <Box ml='10px' mt='10px' className='leftchild' >
                    <Heading as='h5' size='sm'>Grain Processing Machine</Heading>
                    </Box>
                {/* <Spacer /> */}
                <Box display='flex' mr='100px' className='rightchild' justifyContent='space-around'>
                        <Box>
                        <InputGroup size='sm' mt='10px' ml='50px'> 
                            <Input placeholder='search within these result' borderTop='solid orange' borderLeft='solid orange' borderBottom='solid orange' borderRight='0'/>
                            <InputRightAddon bgColor='whiteAlpha.100' borderTop='solid orange' borderRight='solid orange' borderBottom='solid orange' borderLeft='0'children={<SearchIcon  color='orange.500' />} />
                        </InputGroup>
                        </Box>
                        <Box>
                            <Checkbox size='sm' mt='15px' ml='90px' colorScheme='orange' color='orange.500' fontWeight='bold' >
                                Clearance Sale Product
                            </Checkbox>
                                <Menu >
                                        <MenuButton as={Button} ml='50px'  mb='200px'  mt='10px' h='8' rightIcon={<ChevronDownIcon />}>
                                            Popularity
                                        </MenuButton>
                                        <MenuList>
                                            <MenuItem>Popularity</MenuItem>
                                            <MenuItem>Price - Low to High</MenuItem>
                                            <MenuItem>Price - High to Low</MenuItem>
                                            <MenuItem>Discount- Low to High</MenuItem>
                                            <MenuItem>Discount - High to Low</MenuItem>
                                        </MenuList>
                                        </Menu>
                                        
                        </Box>
                </Box>
                
            </Box>
            <Box mt='10px' mb='30px'>
            <Products  />
            <Heading as='h5' size='sm' borderBottom='1px solid black' mt='50px' textAlign='left'>
                    Avail Jaw Dropping Deals & Best Rates on Grain Processing Machine
                </Heading>
                <p textAlign='left' border='1px solid black' ml='2px' w='auto'>
                Having a pan India presence including cities like Delhi NCR, Mumbai, Chennai, Bengaluru, Kolkata, Chennai, Pune, Jaipur, Hyderabad and Ahmedabad, you will get all your 
                choicest brands under one roof from trusted Grain Processing Machine distributers. You can procure Grain Processing Machine 
                from reliable Grain Processing Machine dealers in India. When you buy Grain Processing Machine online in India, don’t miss out on the attractive deals that pop up now and then with every item. You don’t have to
                worry about the genuineness of our products as we hoard from best Grain Processing Machine distributors who know the best. If you purchase Grain Processing Machine at
                Industrybuying, you will experience the ease of shopping. And also get the best Grain Processing Machine prices.
               
                </p>  
            </Box>
            
        </Box>
    </Box>
    </>
  )
}

export default ProductPage

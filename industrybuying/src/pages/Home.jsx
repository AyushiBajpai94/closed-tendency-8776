import React from 'react'
import Sidebar from '../pages/SideMenu'
import Carousel from '../pages/carasoul'
import SmallCard from './smallCard'
import Powercard from './Powercard';
import Cleaning from './Cleaning';
import { Box ,Image} from '@chakra-ui/react'
import BestSeller from './Bestseller'
import Testing from './Testing';
import MaterialHandling from './MaterialHandling';
import OfficeSupplies from './OfficeSupplise';


const Home = () => {
  return (<>
   <Box  display='flex'>

        <Box  w='20%'>
        <Sidebar />
        </Box>
        <Box  w='80%'>
           <Box display='flex'>
                <Box>
                <Carousel/>
                </Box>
                <Box ml='10px'>
                    <Image src='https://static3.industrybuying.com/homepage/16732564011662983964web-side-bnr-top%20(2)%20(1).png'h='200px'w='400px'
                        />
                    <Image  src='https://static3.industrybuying.com/homepage/1551767207right-small-reseller2.gif'h='190px'w='400px' mt='10px'/>
                </Box>
            </Box>
            <Box display='flex' >
                <Box className='left1' w='70%' >
                <Image src='https://static3.industrybuying.com/homepage/1652437509PowerHouse-Strip-Banner%20(1).png'h='80px' w='800px' mt='10px'/>
                <Powercard />
                </Box>
                <Box className='right1' w='21%' h='639px' display='flex' flexDirection='column' justifyContent='space-evenly'>
                <Image src='https://static3.industrybuying.com/homepage/1669783977image%20(8).png' ml='9px' h='58%' />
                <Image src='https://static3.industrybuying.com/homepage/1669871486image%20(10).png' ml='9px' h='37%'/>
                </Box>
            </Box>
            <Image src='https://static3.industrybuying.com/homepage/1663932735Vacuum-Cleaner.jpg'h='80px' w='91%'/>
            
            <BestSeller />

            {/* Cleaning */}
            <Box display='flex' h='auto' w='91%' mt='10px'>
                    <Box className='left2' w='70%'   >
                         <Cleaning />
                    </Box>
                    <Box className='right2' w='30%'>
                    <Image src='https://static3.industrybuying.com/homepage/1650526743unnamed.png' ml='2px' h="600px" w="400px" pt='35px'/>
                    </Box>
            </Box>

            {/* Testing */}
            <Box display='flex' h='auto' w='91%' mt='10px'>
                    <Box className='left2' w='70%'   >
                         <Testing />
                    </Box>
                    <Box className='right2' w='30%'>
                    <Image src='https://static3.industrybuying.com/homepage/1647347789b-2.jpg' ml='2px' h="600px" w="400px" pt='35px'/>
                    </Box>
            </Box>

             {/* material */}
            <Box display='flex' h='auto' w='91%' mt='10px'>
                    <Box className='left3' w='70%'   >
                        <MaterialHandling />
                    </Box>
                    <Box className='right3' w='30%'>
                    <Image src='https://static3.industrybuying.com/homepage/1613551427ElectricHoist-217x467-Banner.png' ml='2px' h="600px" w="400px" pt='35px'/>
                    </Box>
            </Box>
            {/* Office */}
            <Box display='flex' h='auto' w='91%' mt='10px'>
                    <Box className='left3' w='70%'   >
                        <OfficeSupplies />
                    </Box>
                    <Box className='right3' w='30%'>
                    <Image src=' https://static3.industrybuying.com/homepage/1613539266hpbanner-217X467-Office-Chair.gif' ml='2px' h="600px" w="400px" pt='35px'/>
                    </Box>
            </Box>

           
            
            
            


            
        </Box>
       
</Box>
  </>
   
  )
}

export default Home

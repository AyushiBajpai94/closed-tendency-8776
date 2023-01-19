import React from 'react'
import {Box,Heading ,Grid,GridItem} from '@chakra-ui/react'
import SmallCard from './smallCard';

const Testing = () => {



   const testing=[
       {
       Name:"Insulation Resistance Tester",
       Url:"https://static3.industrybuying.com/homepage/1647000067Insulation-Resistance-Tester-1.png"
     },
{
   Name:"Infrared Thermometer",
   Url:"https://static3.industrybuying.com/homepage/1647000067Infrared-Thermometer-2.png"
},
{
   Name:"Coating Thickness Meterh",
   Url:"https://static3.industrybuying.com/homepage/1647000068Coating-Thickness-Meter-3.png"

},
{
   Name:"Digital calipers",
   Url:"https://static3.industrybuying.com/homepage/1647000069Digital-Calipers-4.png"
},
{
    Name:"Digital Clamp Meter",
    Url:"https://static3.industrybuying.com/homepage/1647000070Digital-Clamp-Meter-5.png",
},
{
    Name:"Digital MultiMeters",
    Url:"https://static3.industrybuying.com/homepage/1647000071Digital-Multimeters-6.png",
},
{
    Name:"Analog Insulation Tester",
    Url:"https://static3.industrybuying.com/homepage/1647000071Insulation-Tester.png",
},
{
    Name:"Outside MicroMeter",
    Url:"https://static3.industrybuying.com/homepage/1647000072Outside-Micrometer-8.png",
}


];
const row=4;
  return (
    <Box>
      <Heading as='h3' size='sm' width='400px'marginTop='5px' >
       TESTING AND MEASURING INSTRUMENTS
      </Heading>
      <Grid templateColumns={`repeat(${row}, 1fr)`} rowGap={1} ml='2px' mr='2px' mt='10px' >
           {testing?.map((el)=>(
                   <SmallCard  Name={el.Name}
                       Url={el.Url}
                       />
           ))}
      </Grid>
    </Box>
  )
}

export default Testing

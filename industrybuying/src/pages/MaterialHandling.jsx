import React from 'react'
import {Box,Heading ,Grid,GridItem} from '@chakra-ui/react'
import SmallCard from './smallCard';

const MaterialHandling = () => {



   const material=[
       {
       Name:"Electric Hoist",
       Url:"https://static3.industrybuying.com/homepage/1647257054Electric%20hoist.png"
     },
{
   Name:"Chain Pulley Block",
   Url:"https://static3.industrybuying.com/homepage/1647257055Chain%20pulley.png"
},
{
   Name:"Plastic Crates",
   Url:"https://static3.industrybuying.com/homepage/1647257056Plastic%20crates.png"

},
{
   Name:"Pallet Trucks",
   Url:"https://static3.industrybuying.com/homepage/1647257057Pallet%20trucks.png"
},
{
    Name:"Platform Trollry",
   Url:"https://static3.industrybuying.com/homepage/1647257060Platform%20trolley.png"
},
{
    Name:"Wheel Barrows",
    Url:"https://static3.industrybuying.com/homepage/1647257061Wheel%20barrow.png"
},
{
    Name:"Storage Bins",
   Url:"https://static3.industrybuying.com/homepage/1647257061Storage%20bin.png"
},
{
    Name:"Steel Rack",
   Url:"https://static3.industrybuying.com/homepage/1647257063Steel%20racks.png"
}


];
const row=4;
  return (
    <Box>
       <Heading as='h3' size='sm' width='400px'marginTop='5px' >
       MATERIAL HANDLING AND PACKAGING
      </Heading>
      <Grid templateColumns={`repeat(${row}, 1fr)`} rowGap={1} ml='2px' mr='2px' mt='10px' >
           {material?.map((el)=>(
                   <SmallCard  Name={el.Name}
                       Url={el.Url}
                       />
           ))}
      </Grid>
    </Box>
  )
}

export default MaterialHandling

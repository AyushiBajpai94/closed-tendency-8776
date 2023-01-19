import React from 'react'
import {Box,Heading ,Grid,GridItem} from '@chakra-ui/react'
import SmallCard from './smallCard';

const Cleaning = () => {



   const cleaning=[
       {
       Name:"Pressure Washers",
       Url:"https://static3.industrybuying.com/homepage/1650366611Pressure%20washer.png"
     },
{
   Name:"Vaccum cleaners",
   Url:"https://static3.industrybuying.com/homepage/1650366635Vaccum%20cleaner.png"
},
{
   Name:"Micro fiber cloth",
   Url:"https://static3.industrybuying.com/homepage/1655961999CLE.MIC.36119213_1653482361886.jpg"

},
{
   Name:"Cleaning Liquids and Essentials",
   Url:"https://static3.industrybuying.com/homepage/1650366695Untitled%20design.png"
},
{
    Name:"Dustbin",
    Url:"https://static3.industrybuying.com/homepage/1650366813Dustbins.png",
},
{
    Name:"Air purifies filters and parts",
    Url:"https://static3.industrybuying.com/homepage/1650366836Air%20purifier.png",
},
{
    Name:"Surface Care",
    Url:"https://static3.industrybuying.com/homepage/1650524800Windows.png",
},
{
    Name:"Windows and Glass cleaning tools",
    Url:"https://static3.industrybuying.com/homepage/1650524822Glass%20cleaning%20tools.png",
}


];
const row=4;
  return (
    <Box>
       <Heading as='h3' size='sm' width='150px'marginTop='5px'>
                  Cleaning
      </Heading>
      <Grid templateColumns={`repeat(${row}, 1fr)`} rowGap={1} ml='2px' mr='2px' mt='10px' >
           {cleaning?.map((el)=>(
                   <SmallCard  Name={el.Name}
                       Url={el.Url}
                       />
           ))}
      </Grid>
    </Box>
  )
}

export default Cleaning

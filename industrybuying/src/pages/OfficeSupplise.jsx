import React from 'react'
import {Box,Heading ,Grid,GridItem} from '@chakra-ui/react'
import SmallCard from './smallCard';

const OfficeSupplies= () => {



   const office=[
   { Name:"Office Chairs",
    Url:"https://static3.industrybuying.com/homepage/16135455241.jpg"
},
    {
        Name:"Spiral Binding Machines",
        Url:"https://static3.industrybuying.com/homepage/1648536880Untitled%20design.png"
},
{
    Name:"Paper Cutting machines",
    Url:"https://static3.industrybuying.com/homepage/1648537111Untitled%20design%20(1).png"
},
{
    Name:"Reception Furniture",
    Url:"https://static3.industrybuying.com/homepage/1613545645OFF.REC.72225643_1562660321664.jpg"

},
{
    Name:"Copy & Multipurpose paper",
    Url:"https://static3.industrybuying.com/homepage/1613545671OF.OF.PA.CO.CO.316003_1563596004967.jpg"

},
{
    Name:"Printer Ink Cartridges & Toner Cartridges",
    Url:"https://static3.industrybuying.com/homepage/1613545700OFF.INK.16995374_1504601014628.jpg"

},
{
    Name:"Storage Cabinets & Shelving Units",
    Url:"https://static3.industrybuying.com/homepage/1613545726OF.OF.ST7.1573010.jpg"

},
{
    Name:"Calculators",
    Url:"https://static3.industrybuying.com/homepage/1613545762LA.CA.202958_1515819571061.jpg"

}

   

];
const row=4;
  return (
    <Box>
       <Heading as='h3' size='sm' width='180px'marginTop='5px' >
       Office Supplies
      </Heading>
      <Grid templateColumns={`repeat(${row}, 1fr)`} rowGap={1} ml='2px' mr='2px' mt='10px' >
           {office?.map((el)=>(
                   <SmallCard  Name={el.Name}
                       Url={el.Url}
                       />
           ))}
      </Grid>
    </Box>
  )
}

export default OfficeSupplies

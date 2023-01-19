 import React from 'react'
 import {Box,Heading ,Grid,GridItem} from '@chakra-ui/react'
 import SmallCard from './smallCard';
 
 const Powercard = () => {



    const power=[
        {
        Name:"AgriPro 3 HP Butterfly Combined Rice Mill Machine without Motor APCRM6N9FC",
        Price:25800,
        Url:"https://static1.industrybuying.com/products/agriculture-garden-landscaping/grain-processing-machine/AGR.GRA.82125517_1670416542273.webp"
      },
{
    Name:"Fulcrum 2 Ton 3Mtr Chain Pulley Block 2T3M",
    Price:3980,
    Url:"https://static1.industrybuying.com/products/material-handling-and-packaging/chain-pulley-blocks-and-accessories/chain-pulley-block/MAT.CHA.91518751_1667990374012.webp"
},
{
    Name:"Fulcrum 3 HP Air Compressor 50 liters, TB3050BM",
    Price:10900,
    Url:"https://static1.industrybuying.com/products/pneumatics/air-compressors/air-tank-compressor/PNE.AIR.24347772_1668115052521.webp"

},
{
    Name:"PowerHouse 255 mm Mitre Saw 2200W PHMS255 with 6 Months Warranty",
    Price:8490,
    Url:"https://static1.industrybuying.com/products/power-tools/miter-saw/POW.MIT.82065711_1668009715087.webp"
},

{
    Name:"Agripro Mini Power Tiller APMT52",
    Price:9990,
    Url:"https://static1.industrybuying.com/products/agriculture-garden-landscaping/tillers-and-cultivator/tillers/AGR.TIL.41517227_1667990253322.webp"
},
{
    Name:"Fulcrum 150 kg Heavy Duty Foldable Platform Trolley",
    Price:2990,
    Url:"https://static1.industrybuying.com/products/material-handling-and-packaging/platform-trolley/MAT.PLA.91518620_1667990365953.webp"
},
{
    Name:"Powerwash High Pressure Power Sprayer PW 280 with",
    Price:7680,
    Url:"https://static1.industrybuying.com/products/cleaning/pressure-washer/CLE.PRE.53146602_1668052244969.webp"
},
{
    Name:"Powerwash High Pressure Washer 1600W PW-M28",
    Price:3990,
    Url:"https://static1.industrybuying.com/products/cleaning/pressure-washer/CLE.PRE.22179136_1668012965323.webp"
}
];
const row=4;
   return (
     <Box>
        <Heading as='h3' size='sm' width='150px'marginTop='5px'>
                    IW Power Brand
       </Heading>
       <Grid templateColumns={`repeat(${row}, 1fr)`} rowGap={1} ml='2px' mr='2px' mt='10px' >
            {power?.map((el)=>(
                    <SmallCard  Name={el.Name}
                        Url={el.Url}
                        Price={el.Price}/>
            ))}
       </Grid>
     </Box>
   )
 }
 
 export default Powercard
 
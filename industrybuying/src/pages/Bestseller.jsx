import React from 'react'
import {Box,Heading ,Grid,GridItem,Image,Text} from '@chakra-ui/react'
import SmallCard from './smallCard';

const BestSeller = () => {



    const Bestcard=[{
        Name:"Voltas Floor Mounted Water Dispenser Minimagic Pure-F",
        Price:7990,
        Url:"https://static1.industrybuying.com/products/furniture-hospitality-and-food-service/water-dispensers/FUR.WAT.14570895_1667958140407.webp"
},
{
    Name:"iBELL M200-105 IGBT Inverter 2 in 1 Flux Core/Solid Wire MAG Welding Machine with 1 Year Warranty",
    Price:13800,
    Url:"https://static1.industrybuying.com/products/welding/welding-machine/arc-welding-machine/WEL.ARC.65308964_1668172023800.webp"
},
{
    Name:"Waaree 445W 24V Mono Perc Solar Panel",
    Price:19800,
    Url:"https://static1.industrybuying.com/products/solar/solar-panels/perc-solar-panel/SOL.SOL.84439435_1668119360416.webp"

},
{
    Name:"Texmo 0.5 HP DMS 02N Domestic Water Motor Pump",
    Price:9690,
    Url:"https://static1.industrybuying.com/products/pumps/water-pumps/domestic-monoblock-pump/PUM.DOM.16523646_1667956625830.webp"
},

{
    Name:"Bosch Universal Aquatak 125 1500W Green High Pressure Washer, 0600 8A7 AF0",
    Price:9990,
    Url:"https://static1.industrybuying.com/products/cleaning/pressure-washer/CLE.HOM.61033166_1667972760820.webp"
},
{
    Name:"Pinaka High Pressure Car Washer Power Wash 150 Bar Pressure Pressure Washer",
    Price:4880,
    Url:"https://static1.industrybuying.com/products/power-tools/pressure-washer/CLE.PRE.87760694_1672923134164.webp"
},
{
    Name:"Jindal Gold 1 Hp Water Filled Submersible Pump with Copper Winding",
    Price:4390,
    Url:"https://static1.industrybuying.com/products/pumps/submersible-pumps/borewell-submersible-pumps/PUM.BOR.84384240_1668428584876.webp"
},
{
    Name:"NGCO Metal 450W HVLPFloor Based Electric Paint Spray Gun SPG3508",
    Price:1580,
    Url:"https://static1.industrybuying.com/products/pneumatics/spray-gun-air-gun/spray-gun/PNE.SPR.62684915_1668029168422.webp"
},
{
    Name:"AgriPro 3 HP Combined Rice Mill Machine without Motor",
    Price:21900,
    Url:"https://static1.industrybuying.com/products/agriculture-garden-landscaping/grain-processing-machine/AGR.GRA.85702340_1668750002046.webp"
},
{
    Name:"Powerhouse 750W Sealing Machine FR900 with 6",
    Price:16800,
    Url:"https://static1.industrybuying.com/products/packaging-materials-and-machines/sealing-machine/PAC.SEA.54144595_1669893964814.webp"
}
];
return (
            <div>
            <Heading as='h3' size='sm' width='150px'marginTop='5px'>
               Best sellers
            </Heading>
              <Grid templateColumns='repeat(5, 1fr)' rowGap={1} ml='2px' mr='2px' mt='10px' w='91%'>
        
                {Bestcard.map((el)=>(
                    <GridItem w='100%'  bg='white.500'  boxShadow='rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'>
                        <Image src={el.Url}/>
                        <Text fontSize='xs' style={{textAlign:'left',marginLeft:'3px'}}>{el.Name}</Text>
                        {el.Price && <Heading as='h3' size='sm' style={{textAlign:'left',marginLeft:"3px"}}>
                          {el.Price}
                        </Heading>}
                    </GridItem>
                ))}
            </Grid>
            </div>
          )
}

export default BestSeller

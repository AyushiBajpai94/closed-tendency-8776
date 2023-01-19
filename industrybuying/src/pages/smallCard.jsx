import React from 'react'
import { Grid, GridItem,Image,Heading ,Text, Box} from '@chakra-ui/react'

export default function SmallCard({Name,Price,Url}) {

  return (
    <div>
            <GridItem   bg='white.500'  boxShadow='rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px' >
               <Box  h='200px' ><Image src={Url} w="100%"/></Box> 
               <Box h='80px'><Text fontSize='xs' style={{textAlign:'left',marginLeft:'3px'}}>{Name}</Text>
                    {Price && <Heading as='h3' size='sm' style={{textAlign:'left',marginLeft:"3px"}}>
                        {Price}
                        </Heading>
                    }
             </Box> 
            </GridItem>
    </div>
  )
}


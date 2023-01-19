import React, { ReactNode } from 'react';
import { FiSettings} from 'react-icons/fi';
import Products from './products';
 import {Box,Button,VStack,StackDivider} from '@chakra-ui/react'   
import { Link, Navigate } from 'react-router-dom';
export default function Sidebar(){
    const LinkItems = [
          { name: 'Agriculture Garden & Landsc', icon: FiSettings },
          { name: 'Power Tools', icon: FiSettings },
          { name: 'Office Supplies', icon: FiSettings },
          { name: 'Material Handling and Pack...', icon: FiSettings },
          { name: 'Pumps', icon: FiSettings },
          { name: 'Automotive Maintenance an...', icon: FiSettings },
          { name: 'Safety', icon: FiSettings },
          { name: 'Cleaning', icon: FiSettings },
          { name: 'Electrical', icon: FiSettings },
          { name: 'Hand Tools', icon: FiSettings },
          { name: 'testing and Measuring Instr...', icon: FiSettings },
          { name: 'IT & Electronics', icon: FiSettings },
          { name: 'Furniture,Hospitality and Fo...', icon: FiSettings },
        ];



        const handleClick=()=>{
           <Navigate to={<Products/>}/>
        }
    return (
        <>
        <VStack
                spacing={3}
                align='stretch'
                textAlign='left'
                >
             {LinkItems.map((el)=>(
             <a href='/product'> <Button h='auto' bg='white.200'textAlign='left'>
                {el.name}
                </Button>
                </a>
             ))}    
        </VStack>
        </>
    )
}





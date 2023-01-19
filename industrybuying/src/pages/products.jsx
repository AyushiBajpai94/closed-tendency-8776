import React from 'react'
import { Box } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Products from './productCard';
const ProductPage = () => {
  return (
    <>
    <Box>
    <Tabs>
  <TabList>
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
    <Box border='1px solid black'  display='flex' flexDirection='row'>
        <Box w='25%' border='1px solid red'h='700px'></Box>
        <Box w='80%' border='1px solid blue' h='auto'>
            <Products />
        </Box>
    </Box>
    </>
  )
}

export default ProductPage

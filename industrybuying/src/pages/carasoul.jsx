import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://static3.industrybuying.com/homepage/1673953632Desktop-524xx334-Green-Soul-new.jpg',
    'https://static3.industrybuying.com/homepage/1674019851Desktop-524xx334-Auto-oprema.jpg',
    'https://static3.industrybuying.com/homepage/1671432246CP-PLUS-DESKTOP-(524X334).png',
    'https://static3.industrybuying.com/homepage/1667890944Industrial-buying-524x334-4.jpg',
    "https://static3.industrybuying.com/homepage/1650877078AGRIPRO.png",
    "https://static3.industrybuying.com/homepage/1672383942Air-Purifier-Desktop-banner-524x334-2.png",
  ];

  return (
    <Box
     position={'relative'}
    //  border='2px solid black'
      height={'400px'}
      width={'600px'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={1}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'md'}
            width={"80%"}
            position="relative"
            backgroundPosition='center'
            backgroundRepeat="no-repeat"
            backgroundSize='100%'
            backgroundColor='black'
            backgroundImage={`url(${url})`}
            alignItems='center'
            p='0px'
          />
        ))}
      </Slider>
    </Box>
  );
}
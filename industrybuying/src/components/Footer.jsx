import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Tag,
    Image
  } from '@chakra-ui/react';
  import  a from '../a.jpg';
  import { ReactNode } from 'react';
  import { FaFacebook, FaPinterest, FaTwitter} from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  
  
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
      border='1px solid black'
      bg='#131822'
        color='white'>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box display='flex'>
               
                <Image  src={a} width='50px' style={{borderRadius:'50%'}}/>
                <Text fontSize={'lg'} style={{width:'180px',height:'30px',marginTop:'10px'}}>
                © Apna Bazar.com
              </Text>
              </Box>
              
              <Stack direction={'row'} spacing={6}  width='180px' pl='20px'>
                <SocialButton label={'Twitter'} href={'https://twitter.com/industrybuying'}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'Facebook'} href={'https://www.facebook.com/industrybuying'}>
                  <FaFacebook />
                </SocialButton>
                <SocialButton label={'Pinterest'} href={'https://www.pinterest.com/industrybuy0039/'}>
                  <FaPinterest />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Link href={'#'}>About us</Link>
              <Link href={'#'}>Blog</Link>
              <Link href={'#'}>Contact us</Link>
              <Link href={'#'}>Pricing</Link>
              <Link href={'#'}>Testimonials</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Support</ListHeader>
              <Link href={'#'}>Help Center</Link>
              <Link href={'#'}>Terms of Service</Link>
              <Link href={'#'}>Legal</Link>
              <Link href={'#'}>Privacy Policy</Link>
              <Link href={'#'}>Satus</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Subscribe to Newletter</ListHeader>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Your email address'}
                  bg='white'
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  bg='orange.500'
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bg: 'orange.600',
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }





  
  const ListHeader1 = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export  function Footer1() {
    return (
      <Box
        bg='#232f3e'
        color='#a9b5c4'>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 6 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader1>All Categories</ListHeader1>
              <Link href={'#'}>LED Lights</Link>
              <Stack direction={'row'} align={'center'} spacing={2}>
                <Link href={'#'}>Paints</Link>
                
              </Stack>
              <Link href={'#'}>Corporate Gifts</Link>
              <Link href={'#'}>Geysers</Link>
              <Link href={'#'}>Welding</Link>
              <Link href={'#'}>Tooling and Cutting</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader1>Other categories</ListHeader1>
              <Link href={'#'}>Abrasives</Link>
              <Link href={'#'}>Power Tools</Link>
              <Link href={'#'}>Pumps</Link>
              <Link href={'#'}>Safety</Link>
              <Link href={'#'}>Bearings</Link>
              <Link href={'#'}>Cleanings</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader1>Shop All Brands</ListHeader1>
              <Link href={'#'}>Bosch</Link>
              <Link href={'#'}>Divano</Link>
              <Link href={'#'}>Regent</Link>
              <Link href={'#'}>Havells</Link>
              <Link href={'#'}>Omron</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader1>Brands</ListHeader1>
              <Link href={'#'}>Su-Kam</Link>
              <Link href={'#'}>Swift</Link>
              <Link href={'#'}>HP</Link>
              <Link href={'#'}>Ceat</Link>
              <Link href={'#'}>Aristo</Link>
            </Stack>

            <Stack align={'flex-start'}>
            <ListHeader1>Popular searches</ListHeader1>
            <Link href={'#'}>Office Chairs</Link>
            <Link href={'#'}>Tyres</Link>
            <Link href={'#'}>Safety Shoes</Link>
            <Link href={'#'}>Solar Panels</Link>
            <Link href={'#'}>Home & Car washer</Link>
            </Stack>

            <Stack align={'flex-start'}>
           <ListHeader1>Other searches</ListHeader1>
            <Link href={'#'}>Saws</Link>
            <Link href={'#'}>Angle Grinders</Link>
            <Link href={'#'}>Electric Hoists</Link>
            <Link href={'#'}>Exterior Styling</Link>
            <Link href={'#'}>Pallet trucks</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        {/* <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
            <Logo />
          </Flex>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            © 2022 Chakra Templates. All rights reserved
          </Text>
        </Box> */}
      </Box>
    );
  }
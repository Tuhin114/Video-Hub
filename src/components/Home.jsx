import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.webp';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading py={'2'} w={'fit-content'} m={'auto'}>
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            natus, obcaecati esse praesentium asperiores corporis. Modi
            asperiores id eveniet ab dolore, doloribus quisquam officia
            repudiandae nisi ut fugiat voluptate officiis commodi eius animi eos
            assumenda dolorem architecto harum corrupti blanditiis. Sint, hic
            magni tenetur commodi exercitationem quae culpa voluptas recusandae.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto et
            libero sequi suscipit eum mollitia accusantium, corporis fuga minus
            odit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            consequatur distinctio illo accusamus odit totam vel eum adipisci
            sint placeat beatae, voluptatibus ab labore iusto saepe esse
            perferendis provident odio sequi temporibus. Deleniti aut vero
            ducimus, mollitia eos magni voluptatum?
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night Life is cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;

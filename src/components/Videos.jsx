import { Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Videos = () => {
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          src=""
          style={{ width: '100%' }}
          controls
          controlsList="nodownload"
        ></video>
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Sample Video 1</Heading>
          <Text>
            This is a sample video for testing and demo. This is called
            description. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Assumenda quidem asperiores non harum sapiente perspiciatis
            numquam? Soluta sint quidem laudantium consequatur consectetur
            perferendis ipsum assumenda, quam in qui sit fuga placeat tempore
            temporibus labore doloremque alias accusantium cum mollitia saepe
            vel dignissimos, nisi suscipit corrupti! Quidem blanditiis vel
            pariatur laudantium! Nesciunt ducimus modi facilis voluptatum ipsum
            provident, suscipit consequatur autem commodi labore cumque quasi
            adipisci laudantium, non, aliquam quos? Iure deleniti a incidunt
            assumenda, voluptate ipsa reprehenderit labore. Mollitia commodi ex
            in quae autem animi ipsum, iusto nisi eveniet ad harum quam quaerat
            quos dignissimos cumque? Provident corrupti exercitationem
            similique!
          </Text>
        </VStack>
      </VStack>
      <VStack w={['full', 'xl']}></VStack>
    </Stack>
  );
};

export default Videos;

import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { HashLink } from 'react-router-hash-link';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="purple"
        p={0}
        w={10}
        h={10}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={20} />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VIDEO HUB</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button variant={'ghost'} colorScheme="purple">
                <HashLink to={'/'}>Home</HashLink>
              </Button>
              <Button variant={'ghost'} colorScheme="purple">
                <HashLink to={'/videos'}>Videos</HashLink>
              </Button>
              <Button variant={'ghost'} colorScheme="purple">
                <HashLink to={'/videos?category=free'}>Free Videos</HashLink>
              </Button>
              <Button variant={'ghost'} colorScheme="purple">
                <HashLink to={'/upload'}>Upload Video</HashLink>
              </Button>
            </VStack>

            <HStack pos={'absolute'} bottom={10} left={0}>
              <Button colorScheme="purple" variant={'outline'}>
                <HashLink>Log In</HashLink>
              </Button>
              <Button colorScheme="purple">
                <HashLink>Sign Up</HashLink>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;

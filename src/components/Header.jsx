import React from 'react';
import {
  Drawer,
  DrawerBody,
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
              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <HashLink to={'/'}>Home</HashLink>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <HashLink to={'/videos'}>Videos</HashLink>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <HashLink to={'/videos?category=free'}>Free Videos</HashLink>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <HashLink to={'/upload'}>Upload Video</HashLink>
              </Button>
            </VStack>

            <HStack
              pos={'absolute'}
              bottom={10}
              left={0}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button
                onClick={onClose}
                colorScheme="purple"
                variant={'outline'}
              >
                <HashLink to={'/login'}>Log In</HashLink>
              </Button>
              <Button onClick={onClose} colorScheme="purple">
                <HashLink to={'/signup'}>Sign Up</HashLink>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;

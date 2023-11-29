import { Box, Flex, Heading, Link, Text, Avatar } from '@chakra-ui/react';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
import NextLink from 'next/link';

const Navbar = () => {
  const address = useAddress();
  return (
    <Box
      color={'darkslateblue'}
      maxW={'1200px'}
      m={'auto'}
      py={'10px'}
      px={'40px'}
      borderBottom={'solid'}
    >
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Link as={NextLink} href="/">
          <Heading>Marketplace</Heading>
        </Link>

        <Flex direction={'row'}>
          <Link as={NextLink} href="/buy" mx={2.5}>
            Buy
          </Link>
          <Link as={NextLink} href="/sell" mx={2.5}>
            Sell
          </Link>
        </Flex>

        <Flex direction={'row'} alignItems={'center'}>
          <ConnectWallet />
          {address && (
            <Link as={NextLink} href={`/profile/${address}`}>
              <Avatar src="https://bit.ly/broken-link" ml={'20px'} /> 
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};
export default Navbar;

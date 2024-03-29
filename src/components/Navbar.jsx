import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import mockAPI from "../api/smartInventoryApi";

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" alignItems="center" mb="40px">
      <Heading as="h1">Customer List</Heading>
      <Spacer />

      <HStack spacing="20px">
        <Avatar name="Mario" src="/img/mario.png" bg="purple">
          <AvatarBadge width="1.3em" bg="teal">
            <Text fontSize="xs" color="white">
              3
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>mario@netninja.dev</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
    // <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="2">
    //   <Box w="150px" h="50px" bg="red">
    //     1
    //   </Box>
    //   <Box w="150px" h="50px" bg="blue">
    //     2
    //   </Box>
    //   <Box w="150px" h="50px" flexGrow="1" bg="green">
    //     3
    //   </Box>
    //   <Box w="150px" h="50px" bg="yellow">
    //     4
    //   </Box>
    // </Flex>
  );
}

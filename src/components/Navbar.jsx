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
      <Heading as="h1">Smart Inventory</Heading>
      <Spacer />
    </Flex>
  );
}

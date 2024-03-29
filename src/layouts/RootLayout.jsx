import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
        as="aside"
        colSpan={{ base: 6, md: 2, lg: 1 }}
        minHeight={{ base: "10vh", sm: "10vh", md: "100vh" }}
        bg="purple.400"
        p="30px"
      >
        <Sidebar />
      </GridItem>
      <GridItem as="main" colSpan={{ base: 6, md: 4, lg: 5 }} padding={"40px"}>
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}

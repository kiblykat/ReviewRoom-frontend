import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Heading,
  Link,
  ListIcon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
// import { myCustomers } from "../../data/db";

export default function Dashboard() {
  const [customers, setCustomers] = useState([]);
  const [reviews, setReviews] = useState([]);

  const customersLoader = async () => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || "https://localhost:9090/";
      console.log("API_URL:", API_URL); // Check the value of API_URL.
      const res = await axios.get(`${API_URL}customers`);
      setCustomers(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("error encountered: ", error);
    }
  };

  const reviewsLoader = async (customerId) => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || "https://localhost:9090/";
      console.log("API_URL:", API_URL); // Check the value of API_URL.
      const res = await axios.get(`${API_URL}customers/${customerId}`);
      setReviews(res.data);
      console.log(res.data.reviews);
    } catch (error) {
      console.log("error encountered: ", error);
    }
  };

  const deleteCustomer = async (customerId) => {
    try {
      const API_URL = import.meta.env.VITE_API_URL || "https://localhost:9090/";
      console.log("API_URL:", API_URL); // Check the value of API_URL.
      const res = await axios.delete(`${API_URL}customers/${customerId}`);
      window.location.reload();
    } catch (error) {
      console.log("error encountered: ", error);
    }
  };

  useEffect(() => customersLoader, []);

  return (
    <SimpleGrid spacing={10} minChildWidth="250px">
      {customers &&
        customers.map((customer) => (
          <Card
            key={customer.id}
            borderTop={"8px"}
            borderColor={"purple.400"}
            bg={"white"}
          >
            <CardHeader>
              <Flex gap="5px">
                <Avatar src="/img/ugandanKnuckles.png" />
                <Box>
                  <Heading as="h3" size="small">
                    {customer.firstName} {customer.lastName}
                  </Heading>
                  <Text>{customer.country}</Text>
                  <Text>
                    Reviewed Products: {customer.reviewedProducts.length}
                  </Text>
                  {/* <Text>Email: {customer.email}</Text> */}
                </Box>
              </Flex>
            </CardHeader>
            <CardBody>{customer.description}</CardBody>
            <Divider borderColor="gray.200" />
            <CardFooter>
              <HStack>
                <Button
                  variant="ghost"
                  leftIcon={<EditIcon />}
                  onClick={() => deleteCustomer(customer.id)}
                >
                  Delete
                </Button>
                <Button
                  variant="ghost"
                  leftIcon={<ViewIcon />}
                  onClick={() => reviewsLoader(customer.id)}
                >
                  Reviews
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}

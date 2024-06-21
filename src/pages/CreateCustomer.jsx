import React, { useState } from "react";
import axios from "axios";
import { Button, Heading } from "@chakra-ui/react";

export default function CreateCustomer() {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:9090/";
      const response = await axios.post(`${API_URL}customers`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Heading size="md">Add New Customer: </Heading>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={handleInputChange}
        style={{ margin: "5px", padding: "3px" }}
      />
      <br />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={handleInputChange}
        style={{ margin: "5px", padding: "3px" }}
      />
      <br />
      <label htmlFor="country">Country:</label>
      <input
        type="text"
        id="country"
        name="country"
        onChange={handleInputChange}
        style={{ margin: "5px", padding: "3px" }}
      />
      <br />
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        onChange={handleInputChange}
        style={{ margin: "5px", padding: "3px" }}
      />
      <br />
      <label htmlFor="postalCode">Postal Code:</label>
      <input
        type="number"
        id="postalCode"
        name="postalCode"
        onChange={handleInputChange}
        style={{ margin: "5px", padding: "3px" }}
      />
      <br />
      <label htmlFor="phoneNumber">Phone Number:</label>
      <input
        type="number"
        id="phoneNumber"
        name="phoneNumber"
        onChange={handleInputChange}
        style={{ margin: "5px", padding: "3px" }}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={handleInputChange}
        style={{ margin: "5px", padding: "3px" }}
      />
      <br />
      <Button type="submit" colorScheme="purple">
        Add Customer
      </Button>
    </form>
  );
}

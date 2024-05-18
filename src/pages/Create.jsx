import React, { useState } from "react";
import axios from "axios";
import { Button, Heading } from "@chakra-ui/react";

export default function Create() {
  const [formData, setFormData] = useState({});
  const [customerId, setCustomerId] = useState(0);
  const [productId, setProductId] = useState(0);

  const handleInputChange = (event) => {
    console.log(typeof event.target.value);
    if (event.target.name != "customerId" || event.target.name != "productId") {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    if (event.target.name == "customerId") {
      setCustomerId(Number(event.target.value));
    } else if (event.target.name == "productId") {
      setProductId(Number(event.target.value));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission.

    try {
      const API_URL = import.meta.env.VITE_API_URL || "https://localhost:9090/";
      console.log("API_URL:", API_URL); // Check the value of API_URL.
      const response = await axios.post(
        `${API_URL}customers/${customerId}/products/${productId}/reviews`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = response.data;
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Heading size="md">Add review to existing customer</Heading>
      <label htmlFor="customerId">customerId:</label>
      <input
        style={{ margin: "5px", padding: "3px" }}
        type="number"
        id="customerId"
        name="customerId"
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="productId">productId:</label>
      <input
        style={{ margin: "5px", padding: "3px" }}
        type="number"
        id="productId"
        name="productId"
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="category">Category:</label>
      <input
        style={{ margin: "5px", padding: "3px" }}
        type="text"
        id="category"
        name="category"
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="reviewContent">reviewContent:</label>
      <input
        style={{ margin: "5px", padding: "3px" }}
        type="text"
        id="reviewContent"
        name="reviewContent"
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="rating">Rating:</label>
      <input
        style={{ margin: "5px", padding: "3px" }}
        type="number"
        id="rating"
        name="rating"
        onChange={handleInputChange}
      />
      <br />
      <Button type="submit" colorScheme="purple">
        Add review
      </Button>
    </form>
  );
}

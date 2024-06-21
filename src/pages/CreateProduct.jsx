import React, { useState } from "react";
import axios from "axios";
import { Button, Heading } from "@chakra-ui/react";

export default function CreateProduct() {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:9090/";
      const response = await axios.post(`${API_URL}products`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Success:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Heading size="md">Add New Product</Heading>
      <label htmlFor="name">Product Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleInputChange}
        style={{ margin: "5px", padding: "3px" }}
      />
      <br />
      <label htmlFor="category">Category:</label>
      <input
        type="text"
        id="category"
        name="category"
        onChange={handleInputChange}
        style={{ margin: "5px", padding: "3px" }}
      />
      <br />
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        name="description"
        onChange={handleInputChange}
        style={{ margin: "5px", padding: "3px" }}
      />
      <br />
      <label htmlFor="price">Price ($):</label>
      <input
        type="number"
        id="price"
        name="price"
        onChange={handleInputChange}
        style={{ margin: "5px", padding: "3px" }}
      />
      <br />
      <label htmlFor="stockQuantity">Stock Quantity:</label>
      <input
        type="number"
        id="stockQuantity"
        name="stockQuantity"
        onChange={handleInputChange}
        style={{ margin: "5px", padding: "3px" }}
      />
      <br />
      <Button type="submit" colorScheme="purple">
        Add Product
      </Button>
    </form>
  );
}

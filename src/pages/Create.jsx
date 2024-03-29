import React, { useState } from "react";
import axios from "axios";

export default function Create() {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post(
        "http://localhost:9090/customers/1/products/2/reviews",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = response.data;
      console.log("Success:", data);
      // Handle successful submission (optional)
    } catch (error) {
      console.error("Error:", error);
      // Handle errors (optional)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="category">Category:</label>
      <input
        type="text"
        id="category"
        name="category"
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="reviewContent">reviewContent:</label>
      <input
        type="text"
        id="reviewContent"
        name="reviewContent"
        onChange={handleInputChange}
      />
      <br />
      <label htmlFor="rating">Rating:</label>
      <input
        type="number"
        id="rating"
        name="rating"
        onChange={handleInputChange}
      />
      <br />
      <button type="submit">Submit Review</button>
    </form>
  );
}

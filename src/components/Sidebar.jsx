import { AddIcon, AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <NavLink to="/">
          <ListIcon as={CalendarIcon} color={"white"} />
          Dashboard
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/create-review">
          <ListIcon as={AddIcon} color={"white"} />
          New Review
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/create-customer">
          <ListIcon as={AddIcon} color={"white"} />
          New Customer
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/create-product">
          <ListIcon as={AddIcon} color={"white"} />
          New Product
        </NavLink>
      </ListItem>
    </List>
  );
}

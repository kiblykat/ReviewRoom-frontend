//TABS: each TabPanel corresponds to a Tab in the TabList

import { ChatIcon, EmailIcon, StarIcon } from "@chakra-ui/icons";
import {
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs variant="enclosed" colorScheme="orange">
      <TabList>
        <Tab _selected={{ color: "white", bg: "orange.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "orange.400" }}>
          Tasks History
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List>
            <ListItem>
              <ListIcon as={EmailIcon} /> Email: hihihihi@hihi.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} /> Email: hihihihi@hihi.com
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} /> Email: hihihihi@hihi.com
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          Voluptates vel natus unde blanditiis labore animi maxime ea obcaecati
          quaerat veritatis!
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

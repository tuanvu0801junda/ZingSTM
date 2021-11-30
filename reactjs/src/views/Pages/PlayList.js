import React from "react";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import SongPlayList from "components/SongTable/SongPlayList";
import { tablesProjectData, songData } from "variables/general";
import UserComment from "components/Comment/Comment";
import PlayListBanner from "components/Banner/playlistBanner";

function PlayList() {
  const textColor = useColorModeValue("gray.700", "white");

  return (

    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <PlayListBanner />

      <Card overflowX={{ xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Song
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th pl="0px" color="gray.400">
                  Song
                </Th>
                <Th color="gray.400">Album</Th>
                <Th color="gray.400">Geres</Th>
                <Th color="gray.400">Time</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {songData.map((row) => {
                return (
                  <SongPlayList
                    name={row.songName}
                    logo={row.logo}
                    singer={row.singer}
                    // subdomain={songs[0].genres}
                    domain={row.album}
                    status={row.genres}
                    date={row.time}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
      <UserComment />
      {/* <Card
        my="22px"
        overflowX={{ sm: "scroll", xl: "hidden" }}
      >
        <CardHeader p="6px 0px 22px 0px">
          <Flex direction="column">
            <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
              Projects Table
            </Text>
          </Flex>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px">
                <Th pl="0px" color="gray.400">
                  Companies
                </Th>
                <Th color="gray.400">Budget</Th>
                <Th color="gray.400">Status</Th>
                <Th color="gray.400">Completion</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesProjectData.map((row) => {
                return (
                  <TablesProjectRow
                    name={row.name}
                    logo={row.logo}
                    status={row.status}
                    budget={row.budget}
                    progression={row.progression}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card> */}
    </Flex>
  );
}

export default PlayList;

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
import { songData } from "variables/general";
import AlbumBanner from "components/Banner/AlbumBanner";

function Album() {
  const textColor = useColorModeValue("gray.700", "white");

  return (

    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <AlbumBanner />
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
    </Flex>
  );
}

export default Album;

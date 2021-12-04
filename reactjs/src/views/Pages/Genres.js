import React, {useState, useEffect} from "react";
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
import GenresBanner from "components/Banner/GenresBanner";
import axios from 'axios';

function Genres(props) {
  const [songs, setSongs] = useState(null);
  const textColor = useColorModeValue("gray.700", "white");

  //get songs
  useEffect(() => {
    if (!songs) {
        getGenresSong();
    }
  }, []);

  const getGenresSong = async (genreId) => {
    const data = {
      genreId: genreId,
    }

    const res = await axios.post('/api/getGenresSong', data);
    console.log(res.data);
    setSongs(res.data);
    console.log(songs);
  }
  // ('songId', 'imagePath', 'songPath', 'duration','title','genreName')

  return (

    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <GenresBanner
        genres="V-POP"
        imgURL="https://firebasestorage.googleapis.com/v0/b/zingstm-645aa.appspot.com/o/Images%2FGenreImages%2Fvpop.jpg?alt=media&token=8b3b545e-1da3-4253-b73b-f1cd793a83d9"
      />
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
              {
                !songs ? "Loading..." :
                songs.map((row) => {
                  return (
                    <SongPlayList
                      name={row.title}
                      logo={row.imagePath}
                      songPath={row.songPath}
                      genreName={row.genreName}
                      duration={row.duration}
                    />
                  );
                })
              }
              {/* {songs.map((row) => {
                return (
                  <SongPlayList
                    name={row.title}
                    logo={row.imagePath}
                    songPath={row.songPath}
                    genreName={row.genreName}
                    duration={row.duration}
                  />
                );
              })} */}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Genres;

import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
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
import axios from 'axios';

import ArtistBanner from "components/Banner/ArtistBanner";
import SongGenres from "components/SongTable/SongGenres";

function Artist() {
  const { artistId } = useParams();
  const [artist, setArtist] = useState(null);
  const [songs, setSongs] = useState(null);
  const textColor = useColorModeValue("gray.700", "white");

  // Get artist info
  useEffect(() => {
    if (!artist) {
      getArtistInfo(artistId);
    }
  }, []);

  const getArtistInfo = async (artistId) => {
    const data = {
      artistId: artistId,
    }

    const res = await axios.post('/api/getOneArtistInfo', data);
    if (res.data.status === 200) setArtist(res.data.artist);
  }

  // Get songs
  useEffect(() => {
    if (!songs) {
        getArtistSong(artistId);
    }
  }, []);

  const getArtistSong = async (artistId) => {
    const data = {
      artistId: artistId,
    }

    const res = await axios.post('/api/getArtistsSong', data);
    console.log(res);
    if (res.data.status === 200) setSongs(res.data.songs);
  }
  // ('songId', 'imagePath', 'songPath', 'duration','title','genreName')

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      {artist == null ? "Loading ..." :
        <ArtistBanner
            artistName={artist.artistName}
            imgURL={artist.artistImage}
        />
      }
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
                <Th color="gray.400"></Th>
                <Th color="gray.400"></Th>
                <Th color="gray.400">Genre</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                !songs ? "Loading..." :
                songs.map((row) => {
                  return (
                    <SongGenres
                      songId={row.songId}
                      title={row.title}
                      logo={row.imagePath}
                      songPath={row.songPath}
                      genreName={row.genreName}
                      artistName={row.artistName}
                      duration={row.duration}
                      status="x"
                    />
                  );
                })
              }
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Artist;

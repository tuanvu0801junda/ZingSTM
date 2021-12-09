// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Portal,
  Spacer,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import LineChart from "components/Charts/LineChart";

import DashboardTableRow from "components/Tables/DashboardTableRow";
import TimelineRow from "components/Tables/TimelineRow";
import React, { useState, useEffect } from "react";
// react icons
import { BsArrowRight } from "react-icons/bs";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { dashboardTableData, timelineData } from "variables/general";
import SlickCarousel from 'components/Carousel/HomeCarousel';
import TopSong from 'components/Song/TopSong';
import TopAlbums from 'components/Albums/TopAlbums';
import AlbumsCarousel from 'components/Carousel/AlbumsCarousel'

// Axios
import axios from 'axios';

export default function Dashboard() {
  // Chakra Color Mode
  const textColor = useColorModeValue("gray.700", "white");
  const overlayRef = React.useRef();

  // Get top 3 songs
  const [topSong, setTopSong] = useState(null)

  useEffect(() => {
    if (!topSong) {
      getTopSongs();
    }
  }, []);

  const getTopSongs = async () => {
    const data = {}
    const res = await axios.post('/api/getTopView', data);
    console.log(res.data);
    setTopSong(res.data.songs)
  }

  // Get Albums
  const [albums, setAlbums] = useState(null)

  useEffect(() => {
    if (!albums) {
      getAlbums();
    }
  }, []);

  const getAlbums = async () => {
    const data = {}
    const res = await axios.post('/api/getAllAlbumInfo', data);
    console.log(res.data);
    setAlbums(res.data.albums)
  }

  // Onclick Album

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <SlickCarousel />
      <Grid //TODO
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap="24px"
        mb={{ lg: "26px" }}
      >
        <Card p="16px">
          <CardBody>
            {topSong == null ?
              <Text fontSize="2xl" color="green.400" fontWeight="bold" as="i" mb="6px">
                Loading top songs...
              </Text>
              :
              <Flex direction="column" w="100%">
                <Text fontSize="2xl" color="green.400" fontWeight="bold" as="i" mb="6px">
                  Top songs
                </Text>
                <Grid
                  templateRows="repeat(3, 1fr)"
                  gap={2}
                >
                  <TopSong top={1} title={topSong[0].title}
                    imgURL={topSong[0].imagePath}
                    views={topSong[0].playTimes}
                    songId={topSong[0].songId}
                  />
                  <TopSong top={2} title={topSong[1].title}
                    imgURL={topSong[1].imagePath}
                    views={topSong[1].playTimes}
                    songId={topSong[1].songId}
                  />
                  <TopSong top={3} title={topSong[2].title}
                    imgURL={topSong[2].imagePath}
                    views={topSong[2].playTimes}
                    songId={topSong[2].songId}
                  />
                </Grid>
              </Flex>
            }
          </CardBody>
        </Card>
        <Card p="28px 10px 16px 0px" mb={{ sm: "26px", lg: "0px" }}>
          <CardHeader mb="20px" pl="22px">
            <Flex direction="column" alignSelf="flex-start">
              <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px">
                Zing STM Realtime
              </Text>
              <Text fontSize="md" fontWeight="medium" color="gray.400">
                <Text as="span" color="green.400" fontWeight="bold">
                  Views
                </Text>{" "}
                in 2021
              </Text>
            </Flex>
          </CardHeader>
          <Box w="100%" h={{ sm: "300px" }} ps="8px">
            <LineChart />
          </Box>
        </Card>
      </Grid>
      <Card p="16px">
        <CardBody>
          <Flex direction="column" w="100%">
            <Text fontSize="2xl" color="green.400" fontWeight="bold" as="i" mb="6px">
              Recommended albums:
            </Text>
            {albums == null ? "Loading albums..." :
              <AlbumsCarousel albums={albums}/>
            }
          </Flex>
        </CardBody>
      </Card>
      <Grid pt="16px" templateColumns="repeat(2, 1fr)" gap={3}>
        <Card>
          <CardBody>
            Genres...
          </CardBody>
        </Card>
        <Card pl="20px">
          <CardBody pl="20px">
            Artist...
          </CardBody>
        </Card>
      </Grid>
    </Flex>
  );
}

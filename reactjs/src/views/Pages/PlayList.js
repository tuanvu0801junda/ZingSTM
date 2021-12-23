import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// Chakra imports
import {
	Flex,
	Text,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import PlaylistOwner from "components/Playlist/PlaylistOwner";
import PlaylistOther from "components/Playlist/PlaylistOther";

export default function Playlist() {
	const { playlistId } = useParams();
  const history = useHistory();
	const [state, setstate] = useState(
    {
      status: null,
      playlist: null,
      songs: [],
    }
  )
  const userInfo = useSelector((state) => state.reducerLogin).userInfo;

  if (userInfo === undefined) {
    return (
      <>
        <Flex height="100px">
          <div></div>
        </Flex>
        <Text color="teal" fontSize="40px" fontWeight="bold" align="center">
          Login needed,
          <Button colorScheme="red" fontSize="40px" fontWeight="bold"  variant="ghost" onClick={() => {
            history.push("/auth/signin")
          }}>Go</Button>
        </Text>
      </>
    )
  }

	useEffect(() => {
		if (!state.status) {
			getData(playlistId, userInfo.userId)
		}
	}, []);

	const getData = async (playlistId, userId) => {
		const data = {
			playlistId: playlistId,
      userId: userId,
		};

		const res = await axios.post("/api/getPlaylistInfo", data);
    console.log(res.data);
		setstate(res.data);
	};

  switch (state.status) {
    case null:
      return (
        <>
          <Flex height="100px"></Flex>
          <Text color="teal" fontSize="30px" fontWeight="bold" align="center">Loading...</Text>
        </>
      );
    
    case 404:
      return (
        <>
          <Flex height="100px"></Flex>
          <Text color="teal" fontSize="30px" fontWeight="bold" align="center">Playlist not found !</Text>
        </>
      )
    case 200:
      return (
        <PlaylistOwner data={state} userInfo={userInfo}/>
      )

    case 201:
      return (
        <PlaylistOther data={state} userInfo={userInfo}/>
      )

    case 100:
      history.push("/zingstm/enter-verifycode/" + playlistId);
      return (
        <></>
      )

    default:
      break;
  }
}
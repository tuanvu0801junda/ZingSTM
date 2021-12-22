import axios from "axios";
import { useState, useEffect } from "react";
import {
	Table,
	Tbody,
	FormControl,
	FormLabel,
	Input,
	Button,
	useColorModeValue,
} from "@chakra-ui/react";

import PlaylistComment from "components/Comment/PlaylistComment";

export default function PlaylistCommentContainer(props) {
	const textColor = useColorModeValue("gray.700", "white");
	const [comments, setComments] = useState(null);
    const [content, setContent] = useState("")

	useEffect(() => {
		if (!comments) getComments();
	}, []);

	const getComments = async () => {
		const data = {
			playlistId: props.playlistId,
		};

		const res = await axios.post("/api/getAllPlaylistComment", data);

		if (res.data.status === 200) {
			setComments(res.data.comments);
		} else if (res.data.status === 404) {
			setComments([]);
		}
	};

    const handleChange = (e) => setContent(e.target.value);

	const submitComment = async () => {
        const data = {
            playlistId: props.playlistId,
            userId: props.userInfo.userId,
            userComment: content,
        }
        const res = await axios.post("api/postPlaylistComment", data);

        if (res.data.status === 200) {
            setComments(comments.concat(res.data.comment));
            setContent("");
        }
    };

	return (
		<Table variant="simple" color={textColor}>
			<Tbody>
				{comments === null
					? "Loading..."
					: comments.map((row) => {
							return (
								<>
									<PlaylistComment
										name={row.fullname}
										userAvatar={row.profilePic}
										date={row.createdDate}
										comment={row.userComment}
									/>
								</>
							);
					  })}

				<FormControl isRequired>
					<FormLabel>Leave a comment </FormLabel>
					<Input placeholder="Enter your comment here" onChange={handleChange} value={content}/>
                    <Button mt={4} colorScheme="teal" onClick={submitComment}>
					    Send
				    </Button>
				</FormControl>
			</Tbody>
		</Table>
	);
}

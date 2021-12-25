import { Button, Text } from "@chakra-ui/react";
import "assets/css/banner.css";
import AddGenreToPlay from "functions/AddGenreToPlay";

export default function GenresBanner(props) {
	return (
		<div className="playlist">
			<div className="playlist-info">
				<img src={props.imgURL} />
				<div>
					<Text color="teal" fontWeight="bold" fontSize="5xl">
						{props.genres}
					</Text>
					<br />
					<Button
						variant="outline"
						colorScheme="blue"
						size="lg"
						minWidth="200px"
                        onClick={() => AddGenreToPlay(props.genreId)}
					>
						<i className="fas fa-play"></i>
						<span style={{ margin: "0px 10px 0px 10px" }}>
							Phát lần lượt
						</span>
					</Button>
				</div>
			</div>
		</div>
	);
}
import { Button, Text } from "@chakra-ui/react";
import "assets/css/banner.css"
import AddAlbumToPlay from "functions/AddAlbumToPlay";

export default function AlbumBanner(props) {
    return (
        <div className="playlist">
			<div className="playlist-info">
				<img src={props.imgURL} />
				<div>
					<Text color="teal" fontWeight="bold" fontSize="5xl">
						{props.title}
					</Text>
					<br />
					<Button
						variant="outline"
						colorScheme="blue"
						size="lg"
						minWidth="200px"
                        onClick={() => AddAlbumToPlay(props.albumId)}
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
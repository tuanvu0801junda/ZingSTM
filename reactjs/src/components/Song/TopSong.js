import { Box, Badge, Image, Flex, Spacer, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import defaultThumbnail from "assets/img/default_thumbnail.png";

export default function TopSong(props) {
    const history = useHistory();
	const property = {
		imageUrl: props.imgURL,
		imageAlt: props.title,
		title: props.title,
		views: props.views,
		top: props.top,
	};

	const goToSongPage = () => {
		history.push("/zingstm/song/" + props.songId);
	};

	return (
		<Flex
			as="button"
			direction="row"
			w="100%"
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
			align="center"
            onClick={goToSongPage}
		>
			<Image
				ml="0"
				src={property.imageUrl}
				alt={property.imageAlt}
				boxSize="120px"
				alignSelf="flex-start"
				fallbackSrc={defaultThumbnail}
				fallback={true}
			/>
			<Box p="6" ml="20px">
				<Box d="flex" alignItems="center">
					<Badge
						borderRadius="full"
						px="10"
						colorScheme="teal"
						fontSize="sm"
						color="black.400"
						as="i"
					>
						Top {property.top}
					</Badge>
				</Box>
				<Box
					mt="5"
					fontWeight="semibold"
					as="h4"
					lineHeight="tight"
					isTruncated
					fontSize="xl"
					align="left"
				>
					{property.title}
				</Box>
			</Box>
			<Spacer />
			<Box mr="20px" as="i">
				<Text color="cyan" fontSize="md">
					<i class="fas fa-headphones-alt"></i>
					{" "}{property.views}
				</Text>
			</Box>
		</Flex>
	);
}

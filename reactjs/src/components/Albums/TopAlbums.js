import { Box, Badge, Image, Spacer, Flex } from "@chakra-ui/react"
import { useHistory } from "react-router-dom"

export default function TopAlbums(props) {
    const history = useHistory();
    const property = {
        imageUrl: props.imgURL,
        imageAlt: props.title,
        title: props.title,
        category: props.category,
    }

    const goToAlbumPage = () => {
        history.push("/zingstm/album/" + props.albumId);
    }

    return (
        <Flex as="button" direction="column" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" onClick={goToAlbumPage}>
            <Image src={property.imageUrl} alt={property.imageAlt} w="280px"/>
            <Spacer />
            <Box p="6" w="100%">
                <Box d="flex" alignItems="baseline">
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                    </Box>
                </Box>
                
                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    fontSize="sm"
                    height="30px"
                >
                    {property.title}
                </Box>
                <Badge borderRadius="full" px="2" colorScheme="teal">
                        {property.category}
                </Badge>
            </Box>
        </Flex>
    )
}
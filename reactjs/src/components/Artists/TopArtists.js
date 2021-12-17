import { Box, Image, Spacer, Flex } from "@chakra-ui/react"
import { useHistory } from 'react-router-dom'

export default function TopArtists(props) {
    const history = useHistory();

    const property = {
        imageUrl: props.imgURL,
        imageAlt: props.artistName,
        title: props.artistName,
    }

    const goToArtistPage = () => {
        history.push('/zingstm/artist/'+props.artistId);
    }

    return (
        <Flex as="button" direction="column" maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" onClick={goToArtistPage}>
            <Image src={property.imageUrl} alt={property.imageAlt} w="230px"/>
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
                    fontSize="md"
                    height="20px"
                >
                    {property.title}
                </Box>
            </Box>
        </Flex>
    )
}
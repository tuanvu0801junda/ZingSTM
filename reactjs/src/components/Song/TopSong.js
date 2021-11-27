import { Box, Badge, Image, Flex, Spacer } from "@chakra-ui/react"

export default function TopSong(props) {
    const property = {
        imageUrl: props.imgURL,
        imageAlt: props.title,
        title: props.title,
        views: props.views,
        top: props.top,
    }

    return (
        <Flex as="Button" direction="row" w="100%" borderWidth="1px" borderRadius="lg" overflow="hidden" align="center">
            <Image ml="0" src={property.imageUrl} alt={property.imageAlt} boxSize="120px" alignSelf="flex-start"/>
            <Box p="6" ml="20px">
                <Box d="flex" alignItems="center">
                    <Badge borderRadius="full" px="10" colorScheme="teal" fontSize="sm" color="black.400" as="i">
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
                >
                    {property.title}
                </Box>
            </Box>
            <Spacer />
            <Box mr="20px" as="i">
                <Box color="red.300">
                        {property.views} views
                </Box>
            </Box>
        </Flex>
    )
}
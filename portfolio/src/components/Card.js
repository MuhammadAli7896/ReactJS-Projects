import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
	return (
		<VStack
			maxW="sm"
			bg="white"
			shadow="md"
			borderRadius="md"
			p={4}
			spacing={4}
		>
			<Image src={imageSrc} alt={title} borderRadius="md" boxSize="250px" />

			<VStack spacing={1}>
				<Heading as="h3" size="md">
					{title}
				</Heading>
				<Text color="gray.500">{description}</Text>
			</VStack>

			<HStack alignSelf="flex-end" mt="auto">
				<Text fontWeight="bold">View Project</Text>
				<FontAwesomeIcon icon={faArrowRight} size="1x" />
			</HStack>
		</VStack>
	);
};

export default Card;

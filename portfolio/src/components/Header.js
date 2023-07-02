import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faF } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faLinkedin,
	faFacebook,
	faHackerrank,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
	{
		icon: faEnvelope,
		url: "mailto:muhammadali30804@gmail.com",
	},
	{
		icon: faGithub,
		url: "https://github.com/MuhammadAli7896",
	},
	{
		icon: faLinkedin,
		url: "https://linkedin.com/in/muhammad-ali-a772a025b/",
	},
	{
		icon: faHackerrank,
		url: "https://www.hackerrank.com/muhammadali30804?hr_r=1",
	},
	{
		icon: faFacebook,
		url: "https://www.facebook.com/profile.php?id=100068656174632",
	},
];

const Header = () => {
	const handleClick = (anchor) => (event) => {
		event.preventDefault();
		const id = `${anchor}-section`;
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	const headerRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;
			const headerHeight = headerRef.current.offsetHeight;

			if (prevScrollPos > currentScrollPos && currentScrollPos < headerHeight) {
				setVisible(true);
			} else if (
				prevScrollPos < currentScrollPos &&
				currentScrollPos > headerHeight
			) {
				setVisible(false);
			}

			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [prevScrollPos]);

	return (
		<Box
			ref={headerRef}
			position="fixed"
			top={0}
			left={0}
			right={0}
			translateY={visible ? 0 : -200}
			transitionProperty="transform"
			transitionDuration=".5s"
			transitionTimingFunction="ease-in-out"
			backgroundColor="#18181b"
		>
			<Box color="white" maxWidth="1280px" margin="0 auto">
				<HStack
					px={16}
					py={4}
					justifyContent="space-between"
					alignItems="center"
				>
					<nav style={{ padding: "4px" }}>
						{socials.map((social, index) => (
							<a
								key={index}
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								style={{ margin: "8px" }}
							>
								<FontAwesomeIcon icon={social.icon} size="2x" px={0} />
							</a>
						))}
					</nav>
					<nav>
						<HStack spacing={8}>
							<a href="/#projects-section" onClick={handleClick("projects")}>
								Projects
							</a>
							<a href="/#contactme-section" onClick={handleClick("contact")}>
								Contact me
							</a>
						</HStack>
					</nav>
				</HStack>
			</Box>
		</Box>
	);
};

export default Header;

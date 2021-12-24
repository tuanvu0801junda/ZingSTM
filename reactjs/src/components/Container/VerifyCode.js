import { useRef, useState } from "react";
import {
	InputGroup,
	Input,
	InputRightElement,
	Button,
	InputLeftElement,
} from "@chakra-ui/react";
import { CheckIcon, CopyIcon } from "@chakra-ui/icons";

export default function VerifyCode(props) {
	const [show, setShow] = useState(false);
	const [copied, setCopied] = useState(false);
	const verifyCodeRef = useRef();
	const handleClick = () => setShow(!show);

	const copy = async () => {
		await navigator.clipboard.writeText(props.verifyCode);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 1000);
	};

	return (
		<InputGroup size="md" w="fit-content">
			<InputLeftElement>
				<Button
					size="sm"
					height="100%"
					onClick={copy}
					borderRadius="5px"
					colorScheme="gray"
					color="teal"
				>
					{copied ? <CheckIcon color="cyan" /> : <CopyIcon />}
				</Button>
			</InputLeftElement>
			<Input
				ref={verifyCodeRef}
				pr="4.5rem"
				type={show ? "text" : "password"}
				placeholder="Verify Code"
				value={props.verifyCode}
				disabled
			/>
			<InputRightElement width="4.5rem">
				<Button
					h="1.75rem"
					size="sm"
					onClick={handleClick}
					colorScheme="gray"
					color="teal"
				>
					{show ? "Hide" : "Show"}
				</Button>
			</InputRightElement>
		</InputGroup>
	);
}

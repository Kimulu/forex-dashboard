import { HStack, Image, Spacer, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeToggle from "./ColorModeToggle";

function Navbar() {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <Text>FxDash</Text>
      <Spacer />
      <ColorModeToggle />
    </HStack>
  );
}

export default Navbar;

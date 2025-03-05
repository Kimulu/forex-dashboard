"use client";

import { HStack, IconButton, Text } from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useColorMode } from "@/components/ui/color-mode";

const ColorModeToggle = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <IconButton onClick={toggleColorMode} variant="outline" size="sm">
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeToggle;

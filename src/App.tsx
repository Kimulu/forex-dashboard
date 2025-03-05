import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

function App() {
  // Check if screen size is "lg" or larger
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`,
      }}
      gridTemplateColumns={{ base: "1fr", lg: "250px 1fr" }} // Column sizes
      gridTemplateRows="auto 1fr auto" // Footer stays at the bottom
      minH="100vh"
    >
      {/* Navbar */}
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>

      {/* Aside - Conditionally Rendered */}
      {isLargeScreen && (
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      )}

      {/* Main Content */}
      <GridItem area="main" bg="blue">
        Main
      </GridItem>
      {/* Footer */}
      <GridItem area="footer" bg="gray.700" color="white" textAlign="center">
        © 2025 Forex Dashboard. All Rights Reserved.
      </GridItem>
    </Grid>
  );
}

export default App;

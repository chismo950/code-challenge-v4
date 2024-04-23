import {
  Box,
  Button,
  Icon,
  useColorModeValue,
  useTheme,
} from "@interchain-ui/react";

export function Header() {
  const { theme, setTheme } = useTheme();

  const toggleColorMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Box display="flex" justifyContent="end" mb="$8">
      <Button
        intent="secondary"
        size="sm"
        attributes={{
          paddingX: 0,
        }}
        onClick={toggleColorMode}
      >
        <Icon name={useColorModeValue("moonLine", "sunLine")} />
      </Button>
    </Box>
  );
}

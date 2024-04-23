import { Box, Divider, Stack, Text, Link } from "@interchain-ui/react";

export default function Footer() {
  return (
<Box my="$6">
  <Box mb="$6">
    <Divider />
  </Box>
  <Stack
    direction="horizontal"
    space="$2"
    attributes={{
      justifyContent: "center",
      opacity: 0.5,
      fontSize: "$sm",
    }}
  >
    <Text>Built with</Text>
    <Link href="https://cosmology.zone/" target="_blank">
      Cosmology
    </Link>
  </Stack>
</Box>
  )
}
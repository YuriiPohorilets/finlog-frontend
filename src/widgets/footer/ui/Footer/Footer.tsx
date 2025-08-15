import { Box, Container, Stack } from '@mui/material';

export const Footer = () => {
  return (
    <Box component="footer" paddingBlock="0.5rem">
      <Container maxWidth="xl">
        <Stack direction="row" gap="1rem" alignItems="center">
          Footer
        </Stack>
      </Container>
    </Box>
  );
};

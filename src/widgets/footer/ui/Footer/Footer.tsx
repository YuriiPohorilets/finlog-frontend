import { Box, Container, Stack } from '@mui/material';

export const Footer = () => {
  return (
    <Box component="footer" paddingBlock="0.5rem">
      <Container maxWidth="xl">
        <Stack direction="row" gap="1rem" alignItems="center">
          <Box>
            Created by{' '}
            <a href="https://github.com/YuriiPohorilets" target="_blank" rel="noopener noreferrer">
              Yurii Pohorilets
            </a>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

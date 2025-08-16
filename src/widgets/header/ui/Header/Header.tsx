import { Box, Container, Stack } from '@mui/material';
import { Logo } from '@/shared/ui';
import { ThemeToggle } from '@/features/theme-toggle/ui';

export const Header = () => {
  return (
    <Box component="header" paddingBlock="0.5rem">
      <Container maxWidth="xl">
        <Stack direction="row" gap="1rem" alignItems="center">
          <Logo variant="text" />
          <ThemeToggle />
        </Stack>
      </Container>
    </Box>
  );
};

import { Footer } from '@/widgets/footer/ui';
import { Header } from '@/widgets/header/ui';
import { Box, Container, Stack } from '@mui/material';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack minHeight="100vh">
      <Header />
      <Box component="main" flex={1}>
        <Container maxWidth="xl" disableGutters>
          {children}
        </Container>
      </Box>
      <Footer />
    </Stack>
  );
}

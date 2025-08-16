'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { LoginForm } from '@/features/login-form/ui';
import { Box, Stack, styled, Typography } from '@mui/material';
import PreviewImage from '@/shared/assets/images/business_report_1.jpg';
import { Link } from '@/shared/config/i18n';

const StyledPreviewWrapper = styled(Box)(({ theme }) => ({
  aspectRatio: 1,
  overflow: 'hidden',

  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },

  '& > img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

export default function LoginPage() {
  const t = useTranslations('auth.login');

  return (
    <Stack direction="row" alignItems="center" flexWrap="wrap">
      <Box flex={1}>
        <Stack paddingInline="8rem" paddingBlock="3rem" useFlexGap spacing="2rem">
          <Box>
            <Typography component="h1" variant="h3">
              {t('title')}
            </Typography>
            <Typography>{t('subtitle')}</Typography>
          </Box>

          <LoginForm />

          <Typography variant="body2" align="center">
            Don&apos;t have an account? <Link href={'/register'}>Sign up</Link>
          </Typography>
        </Stack>
      </Box>

      <StyledPreviewWrapper flex={1}>
        <Image
          src={PreviewImage}
          width={2048}
          height={2048}
          alt="Preview"
          quality={100}
          priority
          loading="eager"
        />
      </StyledPreviewWrapper>
    </Stack>
  );
}

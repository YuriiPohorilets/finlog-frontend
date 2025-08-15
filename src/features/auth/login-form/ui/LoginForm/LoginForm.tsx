'use client';

import { useTranslations } from 'next-intl';
import { Box, Button, TextField } from '@mui/material';

export const LoginForm = () => {
  const t = useTranslations('auth.login');

  return (
    <Box component="form" display="flex" flexDirection="column" gap="2rem">
      <Box display="flex" flexDirection="column" gap="1rem">
        <TextField id="email" label={t('email-label')} name="email" type="email" required />

        <TextField
          id="password"
          label={t('password-label')}
          name="password"
          type="password"
          required
        />
      </Box>

      <Button type="submit" variant="contained" size="large">
        {t('submit-button')}
      </Button>
    </Box>
  );
};

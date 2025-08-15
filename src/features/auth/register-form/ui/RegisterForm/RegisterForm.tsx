'use client';

import { TextField } from '@mui/material';

export const RegisterForm = () => {
  return (
    <form>
      <TextField id="email" label="Email" name="email" type="email" variant="standard" required />

      <TextField
        id="password"
        label="Password"
        name="password"
        type="password"
        variant="standard"
        required
      />

      <TextField
        id="confirm-password"
        label="Confirm password"
        name="confirm-password"
        type="password"
        variant="standard"
        required
      />
    </form>
  );
};

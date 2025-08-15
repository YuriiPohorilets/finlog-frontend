'use client';

import { styled } from '@mui/material';
import { blue } from '@mui/material/colors';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  variant: 'icon' | 'text';
}

const StyledLogo = styled('div')({
  fontSize: '1.5rem',
  fontWeight: 500,

  '& > span': {
    color: blue[700],
  },
});

export const Logo: React.FC<LogoProps> = ({ size = 'medium' }) => {
  return (
    <StyledLogo>
      📈Fin<span>log</span>
    </StyledLogo>
  );
};

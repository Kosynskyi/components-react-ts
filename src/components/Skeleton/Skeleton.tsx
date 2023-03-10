import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { Box } from '@mui/material';

export const Skeleton: React.FC = () => {
  return (
    <Box
      sx={{
        paddingTop: 2,
      }}
    >
      <RotatingLines />
    </Box>
  );
};

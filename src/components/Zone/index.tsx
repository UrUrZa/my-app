import React, { PropsWithChildren } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import styled from '@emotion/styled';

export interface IZoneProps extends PropsWithChildren {
  isAcceptableDrop: boolean;
  isAcceptableNew: boolean;
}

export const Zone: React.FC<IZoneProps> = ({ children, isAcceptableDrop, isAcceptableNew }) => {
  

  const StyledBox = styled(Box)`
    margin: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;

  const StyledBoxDropHere = styled(Box)`
    margin: 5px;
    border: 2px dashed #999;
    border-radius: 4px;
    cursor: pointer;
    `;

  return (
    <Paper elevation={3} sx={{ p: 2, backgroundColor: isAcceptableDrop ? '#b2fab4' : 'grey' }}>
      <Box display={'flex'} alignItems={'center'} justifyContent={'space-around'}>
        <StyledBox>
          {children}
        </StyledBox>
        {isAcceptableNew && (
            <StyledBoxDropHere>
              <Typography color="#999" margin={1} align='center'>Drop here</Typography>
            </StyledBoxDropHere>
          )}
      </Box>
    </Paper>
  );
};

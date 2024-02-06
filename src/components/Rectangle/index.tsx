import React, { PropsWithChildren } from 'react';
import { Paper, IconButton, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DrillDownIcon from '@mui/icons-material/KeyboardArrowDown';

export interface IRectangleProps extends PropsWithChildren {
  cardId: string;
  title: string;
  color: string;
  onClear?: () => void;
  onDrillDownClick?: () => void;
}

export const Rectangle: React.FC<IRectangleProps> = ({
  cardId,
  title,
  color,
  onClear,
  onDrillDownClick,
  children
}) => {


  const style = {
    backgroundColor: color,
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  return (
    <Paper elevation={3} style={style}>
      <Typography padding={1} >{title}</Typography>
      <Box display={'flex'} alignItems={'center'}>
        {children}
        {onDrillDownClick && (
          <IconButton onClick={onDrillDownClick} size="small" edge="end">
            <DrillDownIcon />
          </IconButton>
        )}
        {onClear && (
          <IconButton onClick={onClear} size="small">
            <DeleteIcon />
          </IconButton>
        )}
      </Box>
    </Paper>
  );
};

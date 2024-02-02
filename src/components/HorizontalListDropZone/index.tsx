import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Box, Paper, Typography } from '@mui/material';
import { DraggableRectangle, IDraggableRectangleProps } from '../DraggableRectangle';

export interface IHorizontalListDropZoneProps {
  onAcceptDrop: () => void;
  isAcceptableDrop: boolean;
  dropZoneContent: IDraggableRectangleProps[];
  isAcceptableNew: boolean;
}

export const HorizontalListDropZone: React.FC<IHorizontalListDropZoneProps> = ({
  onAcceptDrop,
  isAcceptableDrop,
  dropZoneContent,
  isAcceptableNew,
}) => {
  const { setNodeRef } = useDroppable({
    id: 'dropzone',
  });

  return (
    <Paper ref={setNodeRef} elevation={3} sx={{ p: 2, backgroundColor: isAcceptableDrop ? '#b2fab4' : 'grey' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {dropZoneContent.map((content, index) => (
          <DraggableRectangle key={index} {...content} />
        ))}
        {isAcceptableNew && (
          <Box sx={{ mt: 2, p: 2, border: '2px dashed #999', borderRadius: '4px', cursor: 'pointer' }} onClick={onAcceptDrop}>
            <Typography color="#999">Drop here</Typography>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

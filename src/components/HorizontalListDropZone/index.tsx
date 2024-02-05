import React from 'react';
import { DndContext, useDroppable, useSensor, useSensors, PointerSensor, DragEndEvent } from '@dnd-kit/core';
import { Box, Paper, Typography } from '@mui/material';
import { DraggableRectangle, IDraggableRectangleProps } from '../DraggableRectangle';
import styled from '@emotion/styled';

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
    disabled: isAcceptableDrop!,
  });

  const sensors = useSensors(
    useSensor(PointerSensor, {
      // Настройки для PointerSensor
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { over } = event;
    if (over && over.id === 'dropzone') {
      onAcceptDrop();
      console.log(`HorizontalListDropZone onAcceptDrop: ${over.id}`);
    }
  };

  const StyledBox = styled(Box)`
    margin: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;

  const StyledBoxDropHere = styled(Box)`
    border: 2px dashed #999;
    border-radius: 4px;
    cursor: pointer;
    `;

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <Paper ref={setNodeRef} elevation={3} sx={{ p: 2, backgroundColor: isAcceptableDrop ? '#b2fab4' : 'grey' }}>
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-around'}>
          <StyledBox>
            {dropZoneContent.map((content, index) => (
              <Box margin={1}>
                <DraggableRectangle key={index} {...content} />
              </Box>
            ))}
          </StyledBox>
          {isAcceptableNew && (
              <StyledBoxDropHere>
                <Typography color="#999" margin={1} align='center'>Drop here</Typography>
              </StyledBoxDropHere>
            )}
        </Box>
      </Paper>
    </DndContext>
  );
};

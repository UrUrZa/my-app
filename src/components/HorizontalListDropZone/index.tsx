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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;

  const StyledBoxDropHere = styled(Box)`
    margin-top: 2;
    padding: 2;
    border: 2px dashed #999;
    border-radius: 4px;
    cursor: pointer;
    `;

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <Paper ref={setNodeRef} elevation={3} sx={{ p: 2, backgroundColor: isAcceptableDrop ? '#b2fab4' : 'grey' }}>
        <StyledBox>
          {dropZoneContent.map((content, index) => (
            <DraggableRectangle key={index} {...content} />
          ))}
          {isAcceptableNew && (
            <StyledBoxDropHere>
              <Typography color="#999">Drop here</Typography>
            </StyledBoxDropHere>
          )}
        </StyledBox>
      </Paper>
    </DndContext>
  );
};

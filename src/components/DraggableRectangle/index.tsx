import React from 'react';
import { DndContext, DragEndEvent, DragStartEvent, useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Paper, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DrillDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { HorizontalListDropZone, IHorizontalListDropZoneProps } from '../HorizontalListDropZone';

export interface IDraggableRectangleProps {
  cardId: string;
  title: string;
  color: string;
  onDragStart: () => void;
  onDragEnd: () => void;
  onClear?: () => void;
  onDrillDownClick?: () => void;
  dropZone?: IHorizontalListDropZoneProps;
}

export const DraggableRectangle: React.FC<IDraggableRectangleProps> = ({
  cardId,
  title,
  color,
  onDragStart,
  onDragEnd,
  onClear,
  onDrillDownClick,
  dropZone,
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: cardId,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    backgroundColor: color,
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const DndWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
            {children}
        </DndContext>
    );
};

const handleDragEnd = (event: DragEndEvent) => {
    onDragEnd();
    console.log(`DraggableRectangle onDragEnd: ${event?.over?.id}`);
};

const handleDragStart = (event: DragStartEvent) => {
    onDragStart();
    console.log(`DraggableRectangle onDragStart: ${event?.active?.id}`);
};

  return (
    <DndWrapper>
      <Paper ref={setNodeRef} elevation={3} style={style} {...listeners} {...attributes}>
        <Typography >{title}</Typography>
        <div>
          {dropZone &&  (
            <HorizontalListDropZone {...dropZone} />
          )}
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
        </div>
      </Paper>
    </DndWrapper>
  );
};

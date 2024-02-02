import React from 'react';
import { useDraggable, useDroppable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { Paper, IconButton } from '@mui/material';
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

  const { setNodeRef: setDropZoneRef } = useDroppable({
    id: `${cardId}-dropzone`,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    backgroundColor: color,
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  return (
    <Paper ref={setNodeRef} elevation={3} style={style} {...listeners} {...attributes}>
      <div onClick={onDragStart}>{title}</div>
      <div>
        {dropZone &&  (
          <div ref={setDropZoneRef} /* style and className for drop zone */>
            <HorizontalListDropZone {...dropZone} />
          </div>
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
  );
};

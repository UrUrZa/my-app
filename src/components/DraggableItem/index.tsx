import React, { PropsWithChildren } from 'react';
import { UniqueIdentifier, useDndMonitor, useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

export interface IDraggableItemProps extends PropsWithChildren {
  cardId: string;
  onDragStart: (id: UniqueIdentifier) => void;
  onDragEnd: (id: UniqueIdentifier) => void;
}

export const DraggableItem: React.FC<IDraggableItemProps> = ({
  cardId,
  onDragStart,
  onDragEnd,
  children

}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: cardId,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  useDndMonitor({
    onDragStart(event) {
      if ( event.active.id === cardId) {
        onDragStart(cardId);
      }
    },
    onDragEnd(event) {
      if ( event.active.id === cardId) {
        onDragEnd(cardId);
      }
    },
  });



  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>   
  );
};

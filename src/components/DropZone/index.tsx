import React, { PropsWithChildren } from 'react';
import { useDroppable, UniqueIdentifier, useDndMonitor } from '@dnd-kit/core';

export interface IDropZoneProps extends PropsWithChildren {
  zoneId: UniqueIdentifier;
  onAcceptDrop: (id: UniqueIdentifier) => void;
  isAcceptableDrop: boolean;
}

export const DropZone: React.FC<IDropZoneProps> = ({
  zoneId,
  onAcceptDrop,
  isAcceptableDrop,
  children
}) => {
  const { setNodeRef } = useDroppable({
    id: zoneId,
    disabled: !isAcceptableDrop,
  });

  useDndMonitor({
    onDragEnd(event) {
      if ( event?.over?.id === zoneId) {
        onAcceptDrop(event.active.id);
      }
    },
  });


  return (
    <div ref={setNodeRef}>
      {children}
    </div>
  );
};

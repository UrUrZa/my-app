
import React, { PropsWithChildren } from 'react';
import {useDroppable} from '@dnd-kit/core';
import { DraggableType } from './Draggable';

interface IDroppableProps extends PropsWithChildren {
  id: string;
  acceptsTypes: DraggableType[];
};

export const Droppable: React.FC<IDroppableProps> = ({ id, acceptsTypes, children }) => {
  const {isOver, setNodeRef} = useDroppable({
    id: id,
    data: acceptsTypes,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}

export const DroppableComponent: React.FC<IDroppableProps> =({ id, acceptsTypes }) => {
  const {isOver, setNodeRef} = useDroppable({
    id: id,
    data: acceptsTypes,
  });

  return (
    <div ref={setNodeRef} style={{ backgroundColor: isOver ? 'green' : 'grey' }}>
      Droppable {id}
    </div>
  );
}


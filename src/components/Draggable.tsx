
import React, { PropsWithChildren } from 'react';
import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

export enum DraggableType {
  a = 'a',
  b = 'b',
  c = 'c',
}

interface IDraggableProps extends PropsWithChildren {
  id: string;
  type: DraggableType;
};

export const Draggable:React.FC <IDraggableProps> = ({id, type, children}) => {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: id,
    data: {type: type},
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </button>
  );
}

export const DraggableComponent: React.FC<IDraggableProps> = ({ id, type }) => {
  return (
    <Draggable id={id} type={type}>
      <div>Draggable {type}</div>
    </Draggable>
  );
}


import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
    data: {acceptsTypes: props.acceptsTypes}
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}

export function DroppableComponent({ id, acceptsTypes }) {
  const {isOver, setNodeRef} = useDroppable({
    id: id,
    data: {acceptsTypes}
  });

  return (
    <div ref={setNodeRef} style={{ backgroundColor: isOver ? 'green' : 'grey' }}>
      Droppable {id}
    </div>
  );
}


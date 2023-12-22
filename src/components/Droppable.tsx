
import React, { PropsWithChildren } from 'react';
import {useDroppable} from '@dnd-kit/core';
import { DraggableType } from './Draggable';

interface IDroppableProps extends PropsWithChildren {
  id: string;
  acceptsTypes: DraggableType[];
  activeType?: DraggableType;
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

export const DroppableComponent: React.FC<IDroppableProps> =({ id, acceptsTypes, activeType }) => {

  const isHold: boolean = !activeType ? true : false;
  const isAcceptable: boolean = activeType? acceptsTypes.includes(activeType) : false;


  const {isOver, setNodeRef} = useDroppable({
    id: id,
    data: acceptsTypes,
    disabled: !isAcceptable,
  });

  const isUnacceptable = !isHold && !isAcceptable;

   const activStyle = { backgroundColor: isUnacceptable ? 'red' : 'green' };
    const holdStyle = { backgroundColor: 'grey'};

  return (
    <div ref={setNodeRef} style={isHold? holdStyle : activStyle}>
      Droppable {id}
    </div>
  );
}


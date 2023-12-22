
import React, {useState} from 'react';
import {DndContext, DragEndEvent, DragOverEvent, DragStartEvent, UniqueIdentifier} from '@dnd-kit/core';
import {Draggable, DraggableComponent, DraggableType} from './Draggable';
import {Droppable, DroppableComponent} from './Droppable';

export function Example() {
  const [parent, setParent] = useState<UniqueIdentifier|null>(null);
  const draggable = (
    <Draggable id="draggable" type={DraggableType.a}>
      Go ahead, drag me.
    </Draggable>
  );

  return (
    <DndContext onDragEnd={simpleHandleDragEnd}>
      {!parent ? draggable : null}
      <Droppable id="droppable" acceptsTypes={[DraggableType.a]}>
        {parent === "droppable" ? draggable : 'Drop here'}
      </Droppable>
    </DndContext>
  );

  function simpleHandleDragEnd(event: DragOverEvent) {
    const {over} = event;
    setParent(over ? over.id : null);
  }
}

function handleDragOver(event: DragOverEvent) {

  console.log("Drag Over Event: ", event);

  const { active, over } = event;

  // Проверяем, существует ли over и его свойства data и current
  if (!over || !over.data || !over.data.current) {
    return;
  }

  const { acceptsTypes } = over.data.current;

  // Теперь безопасно проверяем, соответствует ли тип draggable элемента принимаемым типам
  // if (active.data && active.data.current && !acceptsTypes.includes(active.data.current.type)) {
  //   event.active = null;
  // }
}



export function MyDndComponent() {

  const [activeType, setActiveType] = useState<DraggableType|undefined>(undefined);

  function handleDragStart(event: DragStartEvent) {
  
    console.log("Drag Start Event: ", event);
  
    const { active } = event;
  
    // Проверяем, существует ли active и его свойства data и current
    if (!active || !active.data || !active.data.current) {
      return;
    }
  
    const { type } = active.data.current;
    setActiveType(type);
  
    // Теперь безопасно проверяем, соответствует ли тип draggable элемента принимаемым типам
    if (type === DraggableType.a) {
      console.log("Draggable A is being dragged");
    } else if (type === DraggableType.b) {
      console.log("Draggable B is being dragged");
    } else if (type === DraggableType.c) {
      console.log("Draggable C is being dragged");
    }
  }

const handleDragEnd = (event: DragEndEvent) => {

  console.log("Drag End Event: ", event);

  const { active, over } = event;

  // Добавляем проверку на существование объектов и их свойств
  if (!active || !active.data || !active.data.current || 
      !over || !over.data || !over.data.current) {
    return;
  }

  // После проверки безопасно обращаемся к свойствам
  if (over.data.current.includes(active.data.current.type)) {
    console.log("Acceptable", `${active.id} is dropped on ${over.id}`);
  } else {
    console.log("Unacceptable", `${active.id} is dropped on ${over.id}`);
  }
};


  return (
    <DndContext onDragOver={handleDragOver} onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
      <DraggableComponent id="draggable-a" type={DraggableType.a} />
      <DraggableComponent id="draggable-b" type={DraggableType.b} />
      <DraggableComponent id="draggable-c" type={DraggableType.c}/>

      <DroppableComponent 
        id="droppable-A,B,C" 
        acceptsTypes={[DraggableType.a, DraggableType.b, DraggableType.c]} 
        activeType={activeType}
      />
      <DroppableComponent 
        id="droppable-A" 
        acceptsTypes={[DraggableType.a]} 
        activeType={activeType}
      />
      <DroppableComponent 
        id="droppable-B" 
        acceptsTypes={[DraggableType.b]} 
        activeType={activeType}
      />
      <DroppableComponent 
        id="droppable-C" 
        acceptsTypes={[DraggableType.c]}
        activeType={activeType} 
      />
      <DroppableComponent 
        id="droppable-B,C" 
        acceptsTypes={[DraggableType.b, DraggableType.c]}
        activeType={activeType} 
      />
      <DroppableComponent 
        id="droppable-A,C" 
        acceptsTypes={[DraggableType.a, DraggableType.c]}
        activeType={activeType} 
      />
    </DndContext>
  );
}

  
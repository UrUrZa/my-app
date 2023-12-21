
import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';
import {Draggable, DraggableComponent} from './Draggable';
import {Droppable, DroppableComponent} from './Droppable';

export function Example() {
  const [parent, setParent] = useState(null);
  const draggable = (
    <Draggable id="draggable">
      Go ahead, drag me.
    </Draggable>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!parent ? draggable : null}
      <Droppable id="droppable">
        {parent === "droppable" ? draggable : 'Drop here'}
      </Droppable>
    </DndContext>
  );

  function handleDragEnd({over}) {
    setParent(over ? over.id : null);
  }
}

function myDnDhandleDragOver(event) {

  console.log("Drag Over Event: ", event);

  const { active, over } = event;

  // Проверяем, существует ли over и его свойства data и current
  if (!over || !over.data || !over.data.current) {
    return;
  }

  const { acceptsTypes } = over.data.current;

  // Теперь безопасно проверяем, соответствует ли тип draggable элемента принимаемым типам
  if (active.data && active.data.current && !acceptsTypes.includes(active.data.current.type)) {
    event.active = null;
  }
}

export function MyDndComponent() {

const handleDragEnd = (event) => {

  console.log("Drag End Event: ", event);

  const { active, over } = event;

  // Добавляем проверку на существование объектов и их свойств
  if (!active || !active.data || !active.data.current || 
      !over || !over.data || !over.data.current) {
    return;
  }

  // После проверки безопасно обращаемся к свойствам
  if (over.data.current.acceptsTypes.includes(active.data.current.type)) {
    console.log("Acceptable", `${active.id} is dropped on ${over.id}`);
  }
};


  return (
    <DndContext onDragOver={myDnDhandleDragOver} onDragEnd={handleDragEnd} onDragStart={console.log}>
      <DraggableComponent id="draggable-a" type="A" />
      <DraggableComponent id="draggable-b" type="B" />
      <DraggableComponent id="draggable-c" type="C" />
      <DroppableComponent id="droppable1" acceptsTypes={["A", "B", "C"]} />
      <DroppableComponent id="droppable2" acceptsTypes={["A", "B", "C"]} />
      <DroppableComponent id="droppable3" acceptsTypes={["A", "B", "C"]} />
      <DroppableComponent id="droppable-A,B,C" acceptsTypes={["A", "B", "C"]} />
      <DroppableComponent id="droppable-A" acceptsTypes={["A"]} />
      <DroppableComponent id="droppable-B" acceptsTypes={["B"]} />
      <DroppableComponent id="droppable-C" acceptsTypes={["C"]} />
      <DroppableComponent id="droppable-B,C" acceptsTypes={["B", "C"]} />
      <DroppableComponent id="droppable-A,C" acceptsTypes={["A", "C"]} />
    </DndContext>
  );
}

  
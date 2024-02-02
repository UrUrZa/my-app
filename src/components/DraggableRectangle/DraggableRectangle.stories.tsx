import React from 'react';
import { Meta } from '@storybook/react';
import { DraggableRectangle, IDraggableRectangleProps } from '.';

export default {
    title: 'Component/DraggableRectangle',
} as Meta;

const componentDefaultProps: IDraggableRectangleProps = {
    onDragStart: () => console.log("DraggableRectangle onDragStart"),
    onDragEnd: () => console.log("DraggableRectangle onDragEnd"),
    title: "DraggableRectangle",
    color: "red",
    cardId: "1",
    dropZone: {
        onAcceptDrop: () => console.log("HorizontalListDropZone onAcceptDrop"),
        isAcceptableDrop: true,
        dropZoneContent: ["HorizontalListDropZone"],
        isAcceptableNew: true,
    } 
}

export const DraggableRectangleStory = () => {
    const componentProps: IDraggableRectangleProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <DraggableRectangle {...componentProps}/>
        </>
    );
}

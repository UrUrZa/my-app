import React from 'react';
import { Meta } from '@storybook/react';
import { HorizontalListDropZone, IHorizontalListDropZoneProps } from '.';

export default {
    title: 'Component/HorizontalListDropZone',
} as Meta;

const componentDefaultProps: IHorizontalListDropZoneProps = {
    onAcceptDrop: () => console.log("HorizontalListDropZone clicked"),
    isAcceptableDrop: true,
    dropZoneContent: [{
        onDragStart: () => console.log("DraggableRectangle onDragStart"),
        onDragEnd: () => console.log("DraggableRectangle onDragEnd"),
        title: "DraggableRectangle",
        color: "red",
        cardId: "1",
        dropZone: {
            onAcceptDrop: () => console.log("HorizontalListDropZone onAcceptDrop"),
            isAcceptableDrop: true,
            dropZoneContent: [],
            isAcceptableNew: true,
        } 
    }],
    isAcceptableNew: true,
}

export const DraggableRectangleStory = () => {
    const componentProps: IHorizontalListDropZoneProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <HorizontalListDropZone {...componentProps}/>
        </>
    );
}

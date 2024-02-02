import React from 'react';
import { Meta } from '@storybook/react';
import { HorizontalListDropZone, IHorizontalListDropZoneProps } from '.';

export default {
    title: 'Component/HorizontalListDropZone',
} as Meta;

const componentDefaultProps: IHorizontalListDropZoneProps = {
    onAcceptDrop: () => console.log("HorizontalListDropZone clicked"),
    isAcceptableDrop: false,
    dropZoneContent: [],
    isAcceptableNew: false,
}

export const HorizontalListDropZoneStory = () => {
    const componentProps: IHorizontalListDropZoneProps = {
        ...componentDefaultProps,
    }
    return (
        <>
            <HorizontalListDropZone {...componentProps}/>
        </>
    );
}

export const HorizontalListDropZoneWithAcceptableDropStory = () => {
    const componentProps: IHorizontalListDropZoneProps = {
        onAcceptDrop: () => console.log("HorizontalListDropZone clicked"),
        isAcceptableDrop: true,
        dropZoneContent: [],
        isAcceptableNew: false,
    }
    return (
        <>
            <HorizontalListDropZone {...componentProps}/>
        </>
    );
}

export const HorizontalListDropZoneWithAcceptableNewStory = () => {
    const componentProps: IHorizontalListDropZoneProps = {
        onAcceptDrop: () => console.log("HorizontalListDropZone clicked"),
        isAcceptableDrop: false,
        dropZoneContent: [],
        isAcceptableNew: true,
    }
    return (
        <>
            <HorizontalListDropZone {...componentProps}/>
        </>
    );
}

export const HorizontalListDropZoneWithContentStory = () => {
    const componentProps: IHorizontalListDropZoneProps = {
        onAcceptDrop: () => console.log("HorizontalListDropZone clicked"),
        isAcceptableDrop: true,
        dropZoneContent: [
            {
                onDragStart: () => console.log("DraggableRectangle onDragStart"),
                onDragEnd: () => console.log("DraggableRectangle onDragEnd"),
                title: "DraggableRectangle",
                color: "red",
                cardId: "cardId",
            }
        ],
        isAcceptableNew: true,
    }
    return (
        <>
            <HorizontalListDropZone {...componentProps}/>
        </>
    );
}

export const HorizontalListDropZoneWithContentDropZoneStory = () => {
    const componentProps: IHorizontalListDropZoneProps = {
        onAcceptDrop: () => console.log("HorizontalListDropZone clicked"),
        isAcceptableDrop: true,
        dropZoneContent: [
            {
                onDragStart: () => console.log("DraggableRectangle onDragStart"),
                onDragEnd: () => console.log("DraggableRectangle onDragEnd"),
                title: "DraggableRectangle",
                color: "red",
                cardId: "cardId",
                dropZone: {
                    onAcceptDrop: () => console.log("HorizontalListDropZone clicked"),
                    isAcceptableDrop: false,
                    dropZoneContent: [],
                    isAcceptableNew: false,
                },
                onClear: () => console.log("DraggableRectangle onClear"),
            }
        ],
        isAcceptableNew: true,
    }
    return (
        <>
            <HorizontalListDropZone {...componentProps}/>
        </>
    );
}

export const HorizontalListDropZoneWithContentDropZoneAcceptableStory = () => {
    const componentProps: IHorizontalListDropZoneProps = {
        onAcceptDrop: () => console.log("HorizontalListDropZone clicked"),
        isAcceptableDrop: true,
        dropZoneContent: [
            {
                onDragStart: () => console.log("DraggableRectangle onDragStart"),
                onDragEnd: () => console.log("DraggableRectangle onDragEnd"),
                title: "DraggableRectangle",
                color: "red",
                cardId: "cardId",
                dropZone: {
                    onAcceptDrop: () => console.log("HorizontalListDropZone clicked"),
                    isAcceptableDrop: true,
                    dropZoneContent: [],
                    isAcceptableNew: true,
                },
                onClear: () => console.log("DraggableRectangle onClear"),
            }
        ],
        isAcceptableNew: true,
    }
    return (
        <>
            <HorizontalListDropZone {...componentProps}/>
        </>
    );
}

export const HorizontalListDropZoneWithContentDropZoneAcceptableNewStory = () => {
    const componentProps: IHorizontalListDropZoneProps = {
        onAcceptDrop: () => console.log("HorizontalListDropZone clicked"),
        isAcceptableDrop: true,
        dropZoneContent: [
            {
                onDragStart: () => console.log("DraggableRectangle onDragStart"),
                onDragEnd: () => console.log("DraggableRectangle onDragEnd"),
                title: "DraggableRectangle",
                color: "red",
                cardId: "cardId",
                dropZone: {
                    onAcceptDrop: () => console.log("HorizontalListDropZone clicked"),
                    isAcceptableDrop: true,
                    dropZoneContent: [{
                        onDragStart: () => console.log("DraggableRectangle onDragStart"),
                        onDragEnd: () => console.log("DraggableRectangle onDragEnd"),
                        title: "DraggableRectangle",
                        color: "red",
                        cardId: "cardId",
                        onClear: () => console.log("DraggableRectangle onClear"),
                    }],
                    isAcceptableNew: false,
                },
            }
        ],
        isAcceptableNew: true,
    }
    return (
        <>
            <HorizontalListDropZone {...componentProps}/>
        </>
    );
}
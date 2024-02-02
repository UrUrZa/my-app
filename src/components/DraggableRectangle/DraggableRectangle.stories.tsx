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

export const DraggableRectangleWithOnClearStory = () => {
    const componentProps: IDraggableRectangleProps = {
        onClear: () => console.log("DraggableRectangle onClear"),
        ...componentDefaultProps,
    }
    return (
        <>
            <DraggableRectangle {...componentProps}/>
        </>
    );
}

export const DraggableRectangleWithOnDrillDownClickStory = () => {
    const componentProps: IDraggableRectangleProps = {
        onDrillDownClick: () => console.log("DraggableRectangle onDrillDownClick"),
        ...componentDefaultProps,
    }
    return (
        <>
            <DraggableRectangle {...componentProps}/>
        </>
    );
}

export const DraggableRectangleWithBothOnClearAndOnDrillDownClickStory = () => {
    const componentProps: IDraggableRectangleProps = {
        onClear: () => console.log("DraggableRectangle onClear"),
        onDrillDownClick: () => console.log("DraggableRectangle onDrillDownClick"),
        ...componentDefaultProps,
    }
    return (
        <>
            <DraggableRectangle {...componentProps}/>
        </>
    );
}

export const DraggableRectangleWithDropZoneStory = () => {
    const componentProps: IDraggableRectangleProps = {
        dropZone: {
            onAcceptDrop: () => console.log("HorizontalListDropZone clicked"),
            isAcceptableDrop: true,
            dropZoneContent: [],
            isAcceptableNew: true,
        },
        ...componentDefaultProps,
    }
    return (
        <>
            <DraggableRectangle {...componentProps}/>
        </>
    );
}

export const DraggableRectangleWithDropZoneAndOnClearStory = () => {
    const componentProps: IDraggableRectangleProps = {
        dropZone: {
            onAcceptDrop: () => console.log("HorizontalListDropZone clicked"),
            isAcceptableDrop: true,
            dropZoneContent: [],
            isAcceptableNew: true,
        },
        onClear: () => console.log("DraggableRectangle onClear"),
        ...componentDefaultProps,
    }
    return (
        <>
            <DraggableRectangle {...componentProps}/>
        </>
    );
}

export const DraggableRectangleWithDropZoneAndOnDrillDownClickStory = () => {
    const componentProps: IDraggableRectangleProps = {
        dropZone: {
            onAcceptDrop: () => console.log("HorizontalListDropZone clicked"),
            isAcceptableDrop: true,
            dropZoneContent: [],
            isAcceptableNew: true,
        },
        onDrillDownClick: () => console.log("DraggableRectangle onDrillDownClick"),
        ...componentDefaultProps,
    }
    return (
        <>
            <DraggableRectangle {...componentProps}/>
        </>
    );
}

export const DraggableRectangleWithDropZoneAndBothOnClearAndOnDrillDownClickStory = () => {
    const componentProps: IDraggableRectangleProps = {
        dropZone: {
            onAcceptDrop: () => console.log("HorizontalListDropZone clicked"),
            isAcceptableDrop: true,
            dropZoneContent: [],
            isAcceptableNew: true,
        },
        onClear: () => console.log("DraggableRectangle onClear"),
        onDrillDownClick: () => console.log("DraggableRectangle onDrillDownClick"),
        ...componentDefaultProps,
    }
    return (
        <>
            <DraggableRectangle {...componentProps}/>
        </>
    );
}

export const DraggableRectangleWithDropZoneWithContentStory = () => {
    const componentProps: IDraggableRectangleProps = {
        dropZone: {
            onAcceptDrop: () => console.log("HorizontalListDropZone clicked"),
            isAcceptableDrop: true,
            dropZoneContent: [
                {
                    onDragStart: () => console.log("DraggableRectangle onDragStart"),
                    onDragEnd: () => console.log("DraggableRectangle onDragEnd"),
                    title: "DraggableRectangle",
                    color: "red",
                    cardId: "1",
                    onClear: () => console.log("DraggableRectangle onClear"),
                }
            ],
            isAcceptableNew: true,
        },
        ...componentDefaultProps,
    }
    return (
        <>
            <DraggableRectangle {...componentProps}/>
        </>
    );
}

export const DraggableRectangleWithDropZoneWithTwoContentStory = () => {
    const componentProps: IDraggableRectangleProps = {
        dropZone: {
            onAcceptDrop: () => console.log("HorizontalListDropZone clicked"),
            isAcceptableDrop: true,
            dropZoneContent: [
                {
                    onDragStart: () => console.log("DraggableRectangle onDragStart"),
                    onDragEnd: () => console.log("DraggableRectangle onDragEnd"),
                    title: "DraggableRectangle",
                    color: "red",
                    cardId: "1",
                    onClear: () => console.log("DraggableRectangle onClear"),
                },
                {
                    onDragStart: () => console.log("DraggableRectangle onDragStart"),
                    onDragEnd: () => console.log("DraggableRectangle onDragEnd"),
                    title: "DraggableRectangle",
                    color: "red",
                    cardId: "2",
                    onClear: () => console.log("DraggableRectangle onClear"),
                }
            ],
            isAcceptableNew: true,
        },
        ...componentDefaultProps,
    }
    return (
        <>
            <DraggableRectangle {...componentProps}/>
        </>
    );
}

export const DraggableRectangleWithDropZoneWithContentDropZoneStory = () => {
    const componentProps: IDraggableRectangleProps = {
        dropZone: {
            onAcceptDrop: () => console.log("HorizontalListDropZone clicked"),
            isAcceptableDrop: true,
            dropZoneContent: [
                {
                    onDragStart: () => console.log("DraggableRectangle onDragStart"),
                    onDragEnd: () => console.log("DraggableRectangle onDragEnd"),
                    title: "DraggableRectangle",
                    color: "red",
                    cardId: "1",
                    onClear: () => console.log("DraggableRectangle onClear"),
                    dropZone: {
                        onAcceptDrop: () => console.log("HorizontalListDropZone clicked"),
                        isAcceptableDrop: true,
                        dropZoneContent: [],
                        isAcceptableNew: true,
                    },
                }
            ],
            isAcceptableNew: true,
        },
        ...componentDefaultProps,
    }
    return (
        <>
            <DraggableRectangle {...componentProps}/>
        </>
    );
}
export const DraggableRectangleWithDropZoneWithContentDropZoneWithContentStory = () => {
    const componentProps: IDraggableRectangleProps = {
        dropZone: {
            onAcceptDrop: () => console.log("HorizontalListDropZone clicked"),
            isAcceptableDrop: true,
            dropZoneContent: [
                {
                    onDragStart: () => console.log("DraggableRectangle onDragStart"),
                    onDragEnd: () => console.log("DraggableRectangle onDragEnd"),
                    title: "DraggableRectangle",
                    color: "red",
                    cardId: "1",
                    onClear: () => console.log("DraggableRectangle onClear"),
                    dropZone: {
                        onAcceptDrop: () => console.log("HorizontalListDropZone clicked"),
                        isAcceptableDrop: true,
                        dropZoneContent: [{
                            onDragStart: () => console.log("DraggableRectangle onDragStart"),
                            onDragEnd: () => console.log("DraggableRectangle onDragEnd"),
                            title: "DraggableRectangle",
                            color: "red",
                            cardId: "2",
                            onClear: () => console.log("DraggableRectangle onClear"),
                        }],
                        isAcceptableNew: true,
                    },
                }
            ],
            isAcceptableNew: true,
        },
        ...componentDefaultProps,
    }
    return (
        <>
            <DraggableRectangle {...componentProps}/>
        </>
    );
}


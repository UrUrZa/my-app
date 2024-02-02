import React from 'react';
import { Meta } from '@storybook/react';
import { HorizontalListDropZone, IHorizontalListDropZoneProps } from '.';

export default {
    title: 'Component/HorizontalListDropZone',
} as Meta;

const componentDefaultProps: IHorizontalListDropZoneProps = {
    onAcceptDrop: () => console.log("HorizontalListDropZone clicked"),
    isAcceptableDrop: true,
    dropZoneContent: ["HorizontalListDropZone"],
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

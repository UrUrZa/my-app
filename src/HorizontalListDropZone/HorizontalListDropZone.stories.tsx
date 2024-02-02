import React from 'react';
import { Meta } from '@storybook/react';
import { HorizontalListDropZone, IHorizontalListDropZoneProps } from '.';

export default {
    title: 'Component/HorizontalListDropZone',
} as Meta;

const componentDefaultProps: IHorizontalListDropZoneProps = {
    onClick: () => console.log("HorizontalListDropZone clicked")
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

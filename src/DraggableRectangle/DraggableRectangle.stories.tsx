import React from 'react';
import { Meta } from '@storybook/react';
import { DraggableRectangle, IDraggableRectangleProps } from '.';

export default {
    title: 'Component/DraggableRectangle',
} as Meta;

const componentDefaultProps: IDraggableRectangleProps = {
    onClick: () => console.log("DraggableRectangle clicked")
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

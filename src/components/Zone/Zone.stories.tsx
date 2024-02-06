import React from 'react';
import { Meta } from '@storybook/react';
import { Zone, IZoneProps } from '.';
import { Rectangle } from '../Rectangle';

export default {
    title: 'Component/Zone',
} as Meta;

const componentDefaultProps: IZoneProps = {
    isAcceptableDrop: false,
    isAcceptableNew: false,
}

export const ZoneStory = () => {
    const componentProps: IZoneProps = {
        ...componentDefaultProps,
    }
    return (
        <Zone {...componentProps}/>
    );
}

export const ZoneWithAcceptableDropStory = () => {
    const componentProps: IZoneProps = {
        isAcceptableDrop: true,
        isAcceptableNew: false,
    }
    return (
        <Zone {...componentProps}/>
    );
}

export const ZoneWithAcceptableNewStory = () => {
    const componentProps: IZoneProps = {
        isAcceptableDrop: false,
        isAcceptableNew: true,
    }
    return (
        <Zone {...componentProps}/>
    );
}

export const ZoneWithContentStory = () => {
    const componentProps: IZoneProps = {
        isAcceptableDrop: true,
        isAcceptableNew: true,
    }
    return (
        <Zone {...componentProps}>
            <Rectangle
                onClear={() => console.log("DraggableRectangle onClear")}
                title="DraggableRectangle"
                color="red"
                cardId="cardId"
            />
        </Zone>
    );
}

export const ZoneWithContentZoneStory = () => {
    const componentProps: IZoneProps = {
        isAcceptableDrop: true,
        isAcceptableNew: true,
    }
    return (
        <Zone {...componentProps}>
            <Rectangle
                onClear={() => console.log("DraggableRectangle onClear")}
                title="DraggableRectangle"
                color="red"
                cardId="cardId1"
            >
                <Zone
                    isAcceptableDrop={true}
                    isAcceptableNew={true}
                >
                    <Rectangle
                        onClear={() => console.log("DraggableRectangle onClear")}
                        title="DraggableRectangle"
                        color="blue"
                        cardId="cardId2"
                    /> 
                </Zone>
            </Rectangle>
        </Zone>
    );
}
export const ZoneWithContenithTwoButtonStory = () => {
    const componentProps: IZoneProps = {
        isAcceptableDrop: true,
        isAcceptableNew: true,
    }
    return (
        <Zone {...componentProps}>
            <Rectangle
                onClear={() => console.log("DraggableRectangle onClear1")}
                title="DraggableRectangle"
                color="red"
                cardId="cardId1"
                onDrillDownClick={() => console.log("DraggableRectangle onDrillDownClick1")}
            >
                <Zone
                    isAcceptableDrop={true}
                    isAcceptableNew={true}
                >
                    <Rectangle
                        onClear={() => console.log("DraggableRectangle onClear2")}
                        onDrillDownClick={() => console.log("DraggableRectangle onDrillDownClick2")}
                        title="DraggableRectangle"
                        color="blue"
                        cardId="cardId2"
                    /> 
                </Zone>
            </Rectangle>
        </Zone>
    );
}

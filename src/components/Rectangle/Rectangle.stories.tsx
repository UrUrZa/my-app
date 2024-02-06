import React from 'react';
import { Meta } from '@storybook/react';
import { Rectangle, IRectangleProps } from '.';
import { Box } from '@mui/material';
import { Zone } from '../Zone';


export default {
    title: 'Component/Rectangle',
} as Meta;

const componentDefaultProps: IRectangleProps = {
    title: "Rectangle",
    color: "red",
    cardId: "1", 
}


export const RectangleStory = () => {
    const componentProps: IRectangleProps = {
        ...componentDefaultProps,
    }
    return (
        <Box height={'300px'} width={`500px`} bgcolor={'darkgrey'}>   
            <Rectangle {...componentProps}/>
        </Box>
    );
}
export const RectangleWithOnClearStory = () => {
    const componentProps: IRectangleProps = {
        onClear: () => console.log("DraggableRectangle onClear"),
        ...componentDefaultProps,
    }
    return (
        <Rectangle {...componentProps}/>
    );
}

export const RectangleWithOnDrillDownClickStory = () => {
    const componentProps: IRectangleProps = {
        onDrillDownClick: () => console.log("DraggableRectangle onDrillDownClick"),
        ...componentDefaultProps,
    }
    return (
        <Rectangle {...componentProps}/>
    );
}

export const RectangleWithBothOnClearAndOnDrillDownClickStory = () => {
    const componentProps: IRectangleProps = {
        onClear: () => console.log("DraggableRectangle onClear"),
        onDrillDownClick: () => console.log("DraggableRectangle onDrillDownClick"),
        ...componentDefaultProps,
    }
    return (
        <Rectangle {...componentProps}/>
    );
}

export const RectangleWithDropZoneStory = () => {
    const componentProps: IRectangleProps = {
        ...componentDefaultProps,
        onClear: () => console.log("DraggableRectangle onClear"),
        onDrillDownClick: () => console.log("DraggableRectangle onDrillDownClick"),
    }
    return (
      <Rectangle {...componentProps}>
        <Zone 
          isAcceptableDrop={true}
          isAcceptableNew={true}
        >
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
      </Rectangle>
    );
}

import React from 'react';
import { Meta } from '@storybook/react';
import { DraggableItem, IDraggableItemProps } from '.';
import { Box } from '@mui/material';
import { DndContext, UniqueIdentifier } from '@dnd-kit/core';
import { DropZone } from '../DropZone';
import styled from '@emotion/styled';


export default {
  title: 'Component/DraggableRectangle',
} as Meta;

const componentDefaultProps: IDraggableItemProps = {
  onDragStart: (id: UniqueIdentifier) => console.log(`DraggableRectangle onDragStart: ${id}`),
  onDragEnd: (id: UniqueIdentifier) => console.log(`DraggableRectangle onDragEnd: ${id}`),
  cardId: "1", 
}


  

export const DraggableleStory = () => {
  const componentProps: IDraggableItemProps = {
    ...componentDefaultProps,
  }
  return (
    <DndContext>  
      <Box height={'300px'} width={'400px'} bgcolor={'darkgray'}>
        <DraggableItem {...componentProps}>
          <Box bgcolor={'chocolate'}>DraggableRectangle</Box>
        </DraggableItem>
      </Box>
    </DndContext>
  );
}
export const DraggableWithDropZoneStory = () => {
  const componentProps: IDraggableItemProps = {
    ...componentDefaultProps,
    cardId: "2",
  }
  return (
    <DndContext>  
      <Box height={'300px'} width={'400px'} bgcolor={'darkgray'}>
        <DraggableItem {...componentDefaultProps}>
          <Box bgcolor={'chocolate'}>DraggableRectangle1</Box>
        </DraggableItem>
        <DraggableItem {
          ...componentProps
          }>
          <Box bgcolor={'chocolate'}>DraggableRectangle2</Box>
        </DraggableItem>
        <DropZone
          zoneId="dropZone1"
          onAcceptDrop={(id) => console.log(`HorizontalListDropZone onAcceptDrop: ${id}`)}
          isAcceptableDrop={true}
        >
          <Box bgcolor={'lightblue'}>HorizontalListDropZone</Box>
        </DropZone>
      </Box>
    </DndContext>
  );
}

export const DraggableWithDropZoneAndAcceptableDropStory = () => {
  const componentProps: IDraggableItemProps = {
    ...componentDefaultProps,
    cardId: "2",
  }
  const component2Props: IDraggableItemProps = {
    ...componentDefaultProps,
    cardId: "3",
  }

  const component3Props: IDraggableItemProps = {
    ...componentDefaultProps,
    cardId: "4",
  }

  const component4Props: IDraggableItemProps = {
    ...componentDefaultProps,
    cardId: "5",
  }

  const StyleDropBox = styled(Box)`
    padding: 10px;
    border: 1px solid black;
    width: 200px;
    height: 100px;
    background-color: lightblue;
    align-items: center;
    display: flex;
  `;

  const StyleDragBox = styled(Box)`
    background-color: #45e80a;
    align-items: center;
    display: flex;
  `;


  return (
    <DndContext>  
      <Box bgcolor={'darkgray'}>
        <DraggableItem {...componentDefaultProps}>
          <StyleDragBox bgcolor={'chocolate'}>DraggableRectangle1</StyleDragBox>
        </DraggableItem>
        <DropZone
          zoneId="dropZone1"
          onAcceptDrop={(id) => console.log(`HorizontalListDropZone1 onAcceptDrop: ${id}`)}
          isAcceptableDrop={true}
        >
          <StyleDropBox>
            <DraggableItem {
            ...componentProps
            }>
              <StyleDragBox>DraggableRectangle2</StyleDragBox>
            </DraggableItem>
          </StyleDropBox>
        </DropZone>
        <DropZone
          zoneId="dropZone2"
          onAcceptDrop={(id) => console.log(`HorizontalListDropZone2 onAcceptDrop: ${id}`)}
          isAcceptableDrop={true}
        >
          <StyleDropBox>
            HorizontalListDropZone2
          </StyleDropBox>
        </DropZone>
        <DraggableItem {...component2Props}>
          <StyleDragBox>
            <>
            {`DraggableRectangle3`}
            <DropZone
              zoneId="dropZone3"
              onAcceptDrop={(id) => console.log(`HorizontalListDropZone3 onAcceptDrop: ${id}`)}
              isAcceptableDrop={true}
            >
              <StyleDropBox>
                HorizontalListDropZone3
              </StyleDropBox>
            </DropZone>
            </>
          </StyleDragBox>
        </DraggableItem>
        <DraggableItem {...component3Props}>
          <StyleDragBox>
            <>
            {`DraggableRectangle3`}
            <DropZone
              zoneId="dropZone3"
              onAcceptDrop={(id) => console.log(`HorizontalListDropZone4 onAcceptDrop: ${id}`)}
              isAcceptableDrop={true}
            >
              <StyleDropBox>
                HorizontalListDropZone4
                <DraggableItem {...component4Props}>
                  <StyleDragBox>
                    <>
                    {`DraggableRectangle3`}
                    <DropZone
                      zoneId="dropZone3"
                      onAcceptDrop={(id) => console.log(`HorizontalListDropZone5 onAcceptDrop: ${id}`)}
                      isAcceptableDrop={true}
                    >
                      <StyleDropBox>
                        HorizontalListDropZone5
                      </StyleDropBox>
                    </DropZone>
                    </>
                  </StyleDragBox>
                </DraggableItem>
              </StyleDropBox>
            </DropZone>
            </>
          </StyleDragBox>
        </DraggableItem>
      </Box>
    </DndContext>
  );
}
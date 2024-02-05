import { Meta } from '@storybook/react';
import { DropZone, IDropZoneProps } from '.';
import { DndContext } from '@dnd-kit/core';
import { Box } from '@mui/material';
import { DraggableItem } from '../DraggableItem';
export default {
    title: 'Component/DropZone',
} as Meta;

const componentDefaultProps: IDropZoneProps = {
    onAcceptDrop: (id) => console.log(`DropZone onAcceptDrop: ${id}`),
    isAcceptableDrop: true,
    zoneId: "dropZone1",
}

export const DropZoneStory = () => {
    const componentProps: IDropZoneProps = {
        ...componentDefaultProps,
    }
    return (
        <DndContext>
          <Box height={'300px'} width={'400px'} bgcolor={'darkgray'}>
            <DraggableItem
              cardId={'draggableItem1'}
              onDragStart={(id) => console.log(`DraggableItem onDragStart: ${id}`)}
              onDragEnd={(id) => console.log(`DraggableItem onDragEnd: ${id}`)} 
            >
              <Box bgcolor={'chocolate'}>DraggableRectangle</Box>
            </DraggableItem>
            <br />
            <DropZone {...componentProps}>
                <div style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }}>HorizontalListDropZone</div>
            </DropZone>
          </Box>
        </DndContext>
    );
}
import React from 'react';
import { IHorizontalListDropZoneProps } from '../HorizontalListDropZone';

export interface IDraggableRectangleProps {
  cardId: string;
  title: string;
  color: string;
  onDragStart: () => void;
  onDragEnd: () => void;

  onClear?: () => void;
  onDrillDownClick?: () => void;

  dropZone?: IHorizontalListDropZoneProps;
}



export const DraggableRectangle: React.FC<IDraggableRectangleProps> = ({onDragStart, ...rest}) => {
    return (
        <div 
            {...rest}
        >
            <div onClick={onDragStart}>
                {'DraggableRectangle'}
            </div>
        </div>
    );
}

import React from 'react';

export interface IDraggableRectangleProps {
    onClick: () => void;
}



export const DraggableRectangle: React.FC<IDraggableRectangleProps> = ({onClick, ...rest}) => {
    return (
        <div 
            {...rest}
        >
            <div onClick={onClick}>
                {'DraggableRectangle'}
            </div>
        </div>
    );
}

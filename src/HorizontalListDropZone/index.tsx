import React from 'react';

export interface IHorizontalListDropZoneProps {
    onClick: () => void;
}



export const HorizontalListDropZone: React.FC<IHorizontalListDropZoneProps> = ({onClick, ...rest}) => {
    return (
        <div 
            {...rest}
        >
            <div onClick={onClick}>
                {'HorizontalListDropZone'}
            </div>
        </div>
    );
}

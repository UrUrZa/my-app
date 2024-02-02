import React from 'react';

export interface IHorizontalListDropZoneProps {
    onAcceptDrop: ()=> void,
    isAcceptableDrop: boolean,
    dropZoneContent: string[ ],
    isAcceptableNew: boolean,}



export const HorizontalListDropZone: React.FC<IHorizontalListDropZoneProps> = ({onAcceptDrop, ...rest}) => {
    return (
        <div 
            {...rest}
        >
            <div onClick={onAcceptDrop}>
                {'HorizontalListDropZone'}
            </div>
        </div>
    );
}

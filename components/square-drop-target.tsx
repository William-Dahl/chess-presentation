/** @jsxRuntime classic */
/** @jsxImportSource @emotion/react */
import { ReactNode, useEffect, useRef, useState } from 'react';

import { css, jsx } from '@emotion/react';
import invariant from 'tiny-invariant';

import { dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/adapter/element';

import { Coord } from './chessboard-draggable';

interface SquareProps {
    location: Coord;
    children: ReactNode;
}

const squareStyles = css({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

function getColor(isDraggedOver: boolean, isDark: boolean): string {
    if (isDraggedOver) {
        return 'skyblue';
    }
    return isDark ? 'lightgrey' : 'white';
}

function Square({ location, children }: SquareProps) {
    const ref = useRef(null);
    const [isDraggedOver, setIsDraggedOver] = useState(false);

    useEffect(() => {
        const el = ref.current;
        invariant(el);

        return dropTargetForElements({
            element: el,
            onDragEnter: () => setIsDraggedOver(true),
            onDragLeave: () => setIsDraggedOver(false),
            onDrop: () => setIsDraggedOver(false),
        });
    }, []);

    const isDark = (location[0] + location[1]) % 2 === 1;

    return (
        <div
            css={squareStyles}
            style={{ backgroundColor: getColor(isDraggedOver, isDark) }}
            ref={ref}
        >
            {children}
        </div>
    );
}

export default Square;

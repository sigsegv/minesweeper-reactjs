import { useEffect, useState, useCallback, createRef } from 'react';
import Square from './Square';

export default function Board(props) {
    const squares = (Array.from(Array(props.rows * props.cols).keys())).map((id) => <Square key={id}/>)
    const rowIds = Array.from(Array(props.rows).keys());
    const rows = Array(props.rows).fill(null);
    for(var r = 0; r < props.rows; ++r)
    {
        var squaresForRow = [];
        for(var c = 0; c < props.cols; ++c)
        {
            squaresForRow[c] = squares[(r * props.cols) + c];
        }
        rows[r] = <div key={r}>{squaresForRow}</div>
    }

    useEffect(() => {
    });

    return (
        <div 
        className='board'
        >{rows}
        </div>
    )
}
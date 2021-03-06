import { useEffect, useState, useCallback, createRef } from 'react';
import Square from './Square';
import './Board.css';

export default function Board(props) {    
    const rowIds = Array.from(Array(props.rows).keys());
    const rows = Array(props.rows).fill(null);
    for(var r = 0; r < props.rows; ++r)
    {
        var squaresForRow = [];
        for(var c = 0; c < props.cols; ++c)
        {
            const id = (r * props.cols) + c;
            squaresForRow[c] = <Square key={props.squares[id].key} id={props.squares[id].key} value={props.squares[id]} onLeftClick={props.onLeftClick} onRightClick={props.onRightClick} />
        }
        rows[r] = <div key={r}>{squaresForRow}</div>
    }

    useEffect(() => {
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
          });
    });

    return (
        <div 
        className='board'
        >{rows}
        </div>
    )
}
import { useEffect, useState, useCallback, createRef } from 'react';
import Square from './Square';
import './Board.css';

export default function Board(props) {
    let squares = Array(props.rows * props.cols).fill(null);
    squares.forEach(function(element, index, arr) {
        arr[index] = { key:index, mine:false, state:null }
    });
    
    const rowIds = Array.from(Array(props.rows).keys());
    const rows = Array(props.rows).fill(null);
    for(var r = 0; r < props.rows; ++r)
    {
        var squaresForRow = [];
        for(var c = 0; c < props.cols; ++c)
        {
            const id = (r * props.cols) + c;
            squaresForRow[c] = <Square id={squares[id].key} value={squares[id]} />
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
import { useEffect, useState, useCallback, createRef } from 'react';
import Board from './Board';

export default function Game(props) {
    const rows=9;
    const cols=9;
    const mines=33;
    var squares = Array(rows * cols).fill(null);
    squares.forEach(function(element, index, arr) {
        arr[index] = { key:index, mine:false, state:null}
    });

    return (
        <Board rows={rows} cols={cols} squares={squares} mines={mines}/>
    )
}
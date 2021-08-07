import { useEffect, useState, useCallback, createRef } from 'react';
import Board from './Board';

export default function Game(props) {
    return (
        <Board rows="9" cols="9"/>
    )
}
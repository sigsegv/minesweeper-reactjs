import { useEffect, useState, useCallback, createRef } from 'react';
import './Square.css';

export default function Square(props) {
    return (
        <button 
        className="square"
        onClick={()=>console.log('click')}
        ></button>
    )
}
import { useEffect, useState, useCallback, createRef } from 'react';
import './Square.css';

export default function Square(props) {
    return (
        <button 
        className="square"
        onClick={(event)=>{
            props.onLeftClick(props.id);
        }}
        onContextMenu ={(event)=>{
            props.onRightClick(props.id);
        }}
        
        ></button>
    )
}
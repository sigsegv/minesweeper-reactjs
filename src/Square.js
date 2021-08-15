import { useEffect, useState, useCallback, createRef } from 'react';
import './Square.css';

export default function Square(props) {
    return (
        <button 
        className="square"
        onClick={(event)=>{
            console.log('onClick id=' + props.id + ' state=' + props.value.state);   
        }}
        onContextMenu ={(event)=>{
            console.log('onContextMenu ');
        }}
        
        ></button>
    )
}
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';


const generateBoard = (size) => {
    const newBoard = [];
    for (let i = 0; i < size; i++) {
        newBoard.push([...Array(size)])
    }
    return newBoard;
}

const TicTacSoh = () => {
    const [board, setBoard] = useState(generateBoard(5));
    const [currPlayer, setCurrPlayer] = useState('x')

    const handleClick = (row, col) => {
        board[row][col] = currPlayer;
        setBoard([...board])
        if(currPlayer === 'x') setCurrPlayer('o');
        if(currPlayer === 'o') setCurrPlayer('x');

    }

    return (
        <div>
            {
                board.map((row, r) => {
                    return (
                        <div key={r} style = {{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {
                                row.map((cell, c) => {
                                    return <div key={c} onClick = {() => handleClick(r, c)} style={{
                                        border: 'solid white 1px',
                                        height: '50px',
                                        width: '50px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>{cell}</div>
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}




const root = createRoot(document.querySelector('#root'));
root.render(<TicTacSoh />);
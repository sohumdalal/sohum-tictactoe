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
    const [board, setBoard] = useState(generateBoard(3));
    console.log(board);
    return (
        <div>
            {
                board.map((row, r) => {
                    return (
                        <div key={r} style = {{
                            display: 'flex',
                        }}>
                            {
                                row.map((cell, c) => {
                                    return <div key={c} style={{
                                        border: 'solid white 1px',
                                        height: '50px',
                                        width: '50px'
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
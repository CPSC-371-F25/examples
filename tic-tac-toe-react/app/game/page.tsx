'use client';

let boardState = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-'],
];
let turn = 'O';

function handleClick(row, col) {
    if (boardState[row][col] == '-') {
        boardState[row][col] = 'O';
    }
}

function Board( { rows, cols } ) {
    let board = [];
    let i = 0;
    for (let row = 0; row < rows; row++) {
        let rowElt = [];
        for (let col = 0; col < cols; col++) {
            rowElt.push((<Space key={i} row={row} col={col} token="-" clickHandler={handleClick} />))
            i++;
        }
        board.push((<div key={row} className="flex">{rowElt}</div>));
    }
    return (
        <div>
            {board}
        </div>
    )
}


function Space( { token, row, col } ) {
    return (
        <div className="m-5 p-2">
            <button onClick={(evt) => handleClick(row, col)} className="w-20 h-20 p-2 text-4xl border rounded bg-blue-100">
                {token}
            </button>
        </div>
    )
}


export default function Game() {

    return (
        <>
        <h1>Play Tic Tac Toe!</h1>


        {/* <Space token="O"/> */}
        <Board rows={3} cols={3}/>

        </>
    )
}
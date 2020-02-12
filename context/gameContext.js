import { createContext } from 'react'
import { randomNumber } from '../utils/utils'

export const defaultContext = {

    createBoard: () => {
        let board = []
        const boardSize = 5;
        const imageRange = 10;
        let i = 0;
        for (i; i < boardSize; i++) {
            let j = 0;
            board = [];
            for (j; j < boardSize; j++) {
                board[i][j] = randomNumber(imageRange);
            }
        }
        console.log(board)
        return board
    },

    initialState: {
        board: [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5],[1, 2, 3, 4, 5],[1, 2, 3, 4, 5],[1, 2, 3, 4, 5]]
    },

    dispatch: () => {},
    reducer: (state, action) => {

        switch (action.type) {
          case "updateBoard":
            const { startX, startY, dX, dY } = action.payload;

            let newBoard = state.board;

            const swapStart = state.board[startX][startY];
            const swapEnd = state.board[startX + dX][startY + dY];

            newBoard[startX][startY] = swapEnd;
            newBoard[startX + dX][startY + dY] = swapStart;

            let i = 0;
            for (i; i < 5; i++) {
              console.log(
                state.board[i][0],
                state.board[i][1],
                state.board[i][2],
                state.board[i][3],
                state.board[i][4]
              );
            }

            return {
              board: newBoard
            };
        }
    }
};

export default createContext(defaultContext)

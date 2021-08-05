
import { createContext, useReducer, Dispatch } from 'react'
import { generatePieceLegalRandomPosition } from '../core/challenge';
import { movementToFEN } from '../core/pieces/movementHelpers';

export interface PieceCoord {
    x: number;
    y: number;
    piece: string
}

type State = {
    boardConfiguration: string;
    selected: PieceCoord;
}


export const initialValues: State = {
    boardConfiguration: '8/2p5/8/8/8/8/8/8 w KQkq - 0 1',
    selected: {
        x: 0,
        y: 0,
        piece: ''
    }
}

const AppContext = createContext<{ state: State; dispatch: Dispatch<Actions>; }>({ state: initialValues, dispatch: () => null });



type Actions =
    | { type: 'add'; }
    | { type: 'select'; value: PieceCoord }
    | { type: 'deselect' }
    | { type: 'resetBoard' }
    | { type: 'move', value: { from: PieceCoord, to: PieceCoord } };

const reducer = (state: State, action: Actions): State => {
    /* 
        console.log("action type:", action.type)
        if ('value' in action) console.log("action value:", action.value)
        console.log("state", state)
     */

    switch (action.type) {
        case 'add':
            return {
                ...state,
                boardConfiguration: generatePieceLegalRandomPosition(),
                selected: initialValues.selected
            }
        case 'resetBoard':
            return {
                ...initialValues
            }
        case 'select':
            return {
                ...state,
                selected: action.value,
            }
        case 'deselect':
            return {
                ...state,
                selected: initialValues.selected,
            }
        case 'move':
            const { from, to } = action.value;
            return {
                ...state,
                boardConfiguration: movementToFEN(state.boardConfiguration, from, to.x, to.y),
                selected: initialValues.selected
            }
        default:
            return state
    }
}


export const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValues)

    return <AppContext.Provider
        value={{ state, dispatch }}>
        {children}
    </AppContext.Provider>
}


export default AppContext;
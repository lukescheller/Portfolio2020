import React, { createContext, useReducer } from 'react'
import PokeReducer from '../reducer/PokeReducer'

export const PokeContext = createContext()

export const PokeProvider = (props) => {
    const InitialState = []
    const [state, dispatch] = useReducer(PokeReducer, InitialState)

    return (
        <PokeContext.Provider value={{ state, dispatch }}>
            {props.children}
        </PokeContext.Provider>
    )
}
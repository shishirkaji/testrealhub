import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'
import callingApi from './../data'
const initialState = {
    loading: true,
    comments: null
};
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const getCommentData = (value) => {
        // making api call
        callingApi().then(res => {
            dispatch({
                type: "SET_COMMENT",
                payload: res
            });
        })

    };
    return (
        <GlobalContext.Provider
            value={{
                state: state,
                getCommentData
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
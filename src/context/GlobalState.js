import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'
import callingApi from './../data'
const initialState = {
    loading: true,
    comments: null,
    unseen: 0
};
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const getCommentData = () => {
        // making api call
        callingApi().then(res => {
            let noOfUnseen = () => {
                let total = 0;
                res.map(comment => {

                    if (comment.acknowledged === false) {
                        ++total
                    }
                });
                return total
            }
            console.log(noOfUnseen())
            dispatch({
                type: "SET_COMMENT",
                payload: {
                    comments: res,
                    unseen: 2
                }
            });
        })

    };
    const markSeen = (id) => {
        // making api call
        dispatch({
            type: "MARKSEEN",
            payload: id
        });


    };
    return (
        <GlobalContext.Provider
            value={{
                state: state,
                getCommentData,
                markSeen
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
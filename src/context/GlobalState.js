import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'
import callingApi from './../data'
const initialState = {
    loading: true,
    comments: null,
    unseen: 0,
    showComment: false,
};
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const clearMasterstate = () => {
        dispatch({
            type: "CLEAR"
        })
    }
    const getCommentData = () => {
        // making api call
        if (state.comments === null) {
            callingApi().then(res => {
                let noOfUnseen = () => {
                    let total = 0;
                    res.map(comment => {

                        if (comment.acknowledged === false) {
                            ++total
                        }
                        return null
                    });
                    return total
                }
                let un = noOfUnseen();
                dispatch({
                    type: "SET_COMMENT",
                    payload: {
                        comments: res,
                        unseen: un
                    }
                });
            })
        } 
        
    };
    const markSeen = (id) => {
        // making api call
        let comments = new Array(...state.comments)
        for (let i = 0; i < comments.length; i++) {
            if (comments[i].id === id) {
                comments[i].acknowledged = true
            }
        }
        dispatch({
            type: "MARKSEEN",
            payload: { id, comments }
        });


    };
    const toggleComments = () => {
        // making api call
        dispatch({
            type: "TOGGLE_COMMENTS",
        });


    };
    return (
        <GlobalContext.Provider
            value={{
                state: state,
                getCommentData,
                clearMasterstate,
                markSeen,
                toggleComments
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
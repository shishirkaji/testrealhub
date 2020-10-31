export default (state, action) => {
    switch (action.type) {
        case "SET_COMMENT":
            return {
                ...state,
                comments: action.payload.comments,
                loading: false,
                unseen: action.payload.unseen
            };
        case "MARKSEEN":
            const  noOfUnseen = state.unseen -1 ;
            return {
                ...state,
                unseen: noOfUnseen
            };
        default:
            return state;
    }
};
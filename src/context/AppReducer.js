export default (state, action) => {
    switch (action.type) {
        case "SET_COMMENT":
            return {
                ...state,
                comments: action.payload,
                loading: false
            };
        default:
            return state;
    }
};
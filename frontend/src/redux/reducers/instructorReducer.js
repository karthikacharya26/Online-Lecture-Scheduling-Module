const initialState = {
    lectures: [],
    error: null,
};

const instructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_LECTURES_SUCCESS':
            return { ...state, lectures: action.payload, error: null };
        case 'FETCH_LECTURES_FAIL':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default instructorReducer;

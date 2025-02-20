const initialState = {
    instructors: [],
    courses: [],
    error: null,
};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_INSTRUCTORS_SUCCESS':
            return { ...state, instructors: action.payload, error: null };
        case 'SCHEDULE_LECTURE_FAIL':
            return { ...state, error: action.payload };
        case 'ADD_INSTRUCTOR_SUCCESS':
            return { ...state, instructors: [...state.instructors, action.payload], error: null };
        case 'ADD_COURSE_SUCCESS':
            return { ...state, courses: [...state.courses, action.payload], error: null };
        case 'SCHEDULE_LECTURE_SUCCESS':
            return { ...state, error: null };
        default:
            return state;
    }
};

export default adminReducer;

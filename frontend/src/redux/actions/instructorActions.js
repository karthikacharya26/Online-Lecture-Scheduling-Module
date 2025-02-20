import axios from "axios";

// Fetch lectures assigned to instructor
export const fetchInstructorLectures = (instructorId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/instructor/lectures/${instructorId}`);
    dispatch({ type: "FETCH_LECTURES_SUCCESS", payload: data });
  } catch (error) {
    console.error(error);
  }
};

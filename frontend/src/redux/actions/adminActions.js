import axios from "axios";

// Fetch all instructors
export const fetchInstructors = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/admin/instructors");
    dispatch({ type: "FETCH_INSTRUCTORS_SUCCESS", payload: data });
  } catch (error) {
    console.error(error);
  }
};

// Add a new instructor
export const addInstructor = (instructorData, navigate) => async (dispatch) => {
  try {
    const { data } = await axios.post("http://localhost:4000/api/admin/add-instructor", instructorData);
    dispatch({ type: "ADD_INSTRUCTOR_SUCCESS", payload: data });
    navigate("/admin-dashboard");
  } catch (error) {
    console.error(error);
  }
};

// Add a new course
export const addCourse = (courseData, navigate) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/admin/add-course", courseData);
    dispatch({ type: "ADD_COURSE_SUCCESS", payload: data });
    navigate("/admin-dashboard");
  } catch (error) {
    console.error(error);
  }
};

// Schedule a lecture
export const scheduleLecture = (lectureData, navigate) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/admin/schedule-lecture", lectureData);
    dispatch({ type: "SCHEDULE_LECTURE_SUCCESS", payload: data });
    navigate("/admin-dashboard");
  } catch (error) {
    console.error(error);
  }
};

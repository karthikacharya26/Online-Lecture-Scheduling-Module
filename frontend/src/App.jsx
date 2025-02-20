import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import InstructorDashboard from "./pages/InstructorDashboard";
import AddInstructor from "./pages/AddInstructor";
import AddCourse from "./pages/AddCourse";
import ScheduleLecture from "./pages/ScheduleLecture";

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/admin"
            element={<ProtectedRoute isAuthenticated={isAuthenticated} allowedRole="admin"><AdminDashboard /></ProtectedRoute>}
          />
          <Route
            path="/instructor"
            element={<ProtectedRoute isAuthenticated={isAuthenticated} allowedRole="instructor"><InstructorDashboard /></ProtectedRoute>}
          />
          <Route
            path="/add-instructor"
            element={<ProtectedRoute isAuthenticated={isAuthenticated} allowedRole="admin"><AddInstructor /></ProtectedRoute>}
          />
          <Route
            path="/add-course"
            element={<ProtectedRoute isAuthenticated={isAuthenticated} allowedRole="admin"><AddCourse /></ProtectedRoute>}
          />
          <Route
            path="/schedule-lecture"
            element={<ProtectedRoute isAuthenticated={isAuthenticated} allowedRole="admin"><ScheduleLecture /></ProtectedRoute>}
          />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;

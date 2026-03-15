import { useState, useEffect } from "react";
import axios from "axios";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";

function App() {

const [students, setStudents] = useState([]);

const fetchStudents = async () => {
  const res = await axios.get("http://localhost:8080/students");
  setStudents(res.data);
};

useEffect(() => {
  fetchStudents();
}, []);

return (
<div>
<h1>Student Management System</h1>

<AddStudent fetchStudents={fetchStudents} />

<StudentList students={students} fetchStudents={fetchStudents} />

</div>
);
}

export default App;
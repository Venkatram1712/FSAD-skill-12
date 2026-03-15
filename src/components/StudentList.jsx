import axios from "axios";

function StudentList({ students, fetchStudents }) {

const deleteStudent = async (id) => {
  await axios.delete(`http://localhost:8080/students/${id}`);
  fetchStudents();
};

return (
<div>

<h2>Students List</h2>

<table border="1">
<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Course</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{students.map((s) => (
<tr key={s.id}>
<td>{s.name}</td>
<td>{s.email}</td>
<td>{s.course}</td>

<td>
<button onClick={() => deleteStudent(s.id)}>Delete</button>
</td>

</tr>
))}

</tbody>
</table>

</div>
);
}

export default StudentList;
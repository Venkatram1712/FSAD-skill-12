import React, { useState } from "react";
import axios from "axios";

function AddStudent({ fetchStudents }) {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [course, setCourse] = useState("");

const handleSubmit = async (e) => {
e.preventDefault();

await axios.post("http://localhost:8080/students", {
name: name,
email: email,
course: course
});

setName("");
setEmail("");
setCourse("");

fetchStudents();
};

return (

<div>

<h2>Add Student</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="Name"
value={name}
onChange={(e) => setName(e.target.value)}
/>

<input
type="text"
placeholder="Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>

<input
type="text"
placeholder="Course"
value={course}
onChange={(e) => setCourse(e.target.value)}
/>

<button type="submit">Add Student</button>

</form>

</div>
);
}

export default AddStudent;
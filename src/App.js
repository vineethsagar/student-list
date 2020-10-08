import React from "react";
import "./styles.css";
import StudentList from "./studentlist";

import Details from "./details";
export default function App() {
  const list_of_students = [
    {
      name: "mvs",
      id: 0,
      age: 24,
      gpa: 10
    },
    {
      name: "kiran",
      id: 1,
      age: 24,
      gpa: 9
    },
    {
      name: "abd",
      id: 2,
      age: 24,
      gpa: 8
    }
  ];
  const [filtervalue, setStudentFilter] = React.useState("");
  const [student, setStudent] = React.useState({});
  const handleClick = (student) => setStudent(student);
  const handleChange = (event) => {
    setStudentFilter(event.target.value);
    setStudent({});
  };
  return (
    <div className="App">
      <StudentList
        list={list_of_students.filter((student) =>
          student.name.toLowerCase().includes(filtervalue.toLowerCase())
        )}
        onClick={handleClick}
        onChange={handleChange}
      />

      <Details student={student} />
    </div>
  );
}

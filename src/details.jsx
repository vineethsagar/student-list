import React from "react";
import "./styles.css";

export default function Details({ student = {} }) {
  return (
    <div className="details">
      <div>{student.name}</div>
      <div>{student.id}</div>
      <div>{student.age}</div>
      <div>{student.gpa}</div>
    </div>
  );
}

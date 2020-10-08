import React from "react";
import "./styles.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";

export default function studentList({ list, onClick, onChange }) {
  return (
    <div className="student_coloumn">
      <input type="text" placeholder="search" onChange={onChange}></input>
      <List component="nav" aria-label="main mailbox folders">
        <div>
          {list.map((student, index) => (
            <ListItem button key={student.id} onClick={() => onClick(student)}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={student.name} />
            </ListItem>
          ))}
        </div>
      </List>
    </div>
  );
}

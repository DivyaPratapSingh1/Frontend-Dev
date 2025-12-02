import React from 'react';

const StudentList = ({ students, onLoadStudents, onAddStudent, onEdit, onDelete, onViewDetails }) => {
  return (
    <div>
      <h2>Student List</h2>
      <div style={{ marginBottom: '15px' }}>
        <button onClick={onLoadStudents} className="btn-primary">Load Students</button>
        <button onClick={onAddStudent} className="btn-success">Add Student</button>
      </div>

      {students.length === 0 ? (
        <p>No students found. Click 'Load Students' to fetch data.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Section</th>
              <th>Marks</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.section}</td>
                <td>{student.marks}</td>
                <td>{student.grade}</td>
                <td>
                  <button onClick={() => onEdit(student)} className="btn-warning">Edit</button>
                  <button onClick={() => onDelete(student.id)} className="btn-danger">Delete</button>
                  <button onClick={() => onViewDetails(student)} className="btn-info">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentList;

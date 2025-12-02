import React from 'react';

const StudentDetails = ({ student, onBack }) => {
  return (
    <div className="details-card">
      <h2>Student Details</h2>
      <p><strong>ID:</strong> {student.id}</p>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Section:</strong> {student.section}</p>
      <p><strong>Marks:</strong> {student.marks}</p>
      <p><strong>Grade:</strong> {student.grade}</p>
      <button onClick={onBack} className="btn-primary" style={{ marginTop: '15px' }}>Back to List</button>
    </div>
  );
};

export default StudentDetails;

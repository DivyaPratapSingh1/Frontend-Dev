import React, { useState } from 'react';

const StudentForm = ({ onSave, initialData, onCancel }) => {
  const [student, setStudent] = useState(
    initialData || { name: '', section: '', marks: '', grade: '' }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(student);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{student.id ? 'Edit Student' : 'Add New Student'}</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={student.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="section">Section:</label>
        <input
          type="text"
          id="section"
          name="section"
          value={student.section}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="marks">Marks:</label>
        <input
          type="number"
          id="marks"
          name="marks"
          value={student.marks}
          onChange={handleChange}
          required
          min="0"
          max="100"
        />
      </div>
      <div>
        <label htmlFor="grade">Grade:</label>
        <input
          type="text"
          id="grade"
          name="grade"
          value={student.grade}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn-success">Save Student</button>
      <button type="button" onClick={onCancel} className="btn-danger">Cancel</button>
    </form>
  );
};

export default StudentForm;

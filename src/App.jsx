import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import { getStudents, createStudent, updateStudent, deleteStudent } from './services/studentService';

const MODE = {
  LIST: 'LIST',
  ADD: 'ADD',
  EDIT: 'EDIT',
  DETAILS: 'DETAILS',
};

const App = () => {
  const [students, setStudents] = useState([]);
  const [currentMode, setCurrentMode] = useState(MODE.LIST);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const loadStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
      alert('Students loaded successfully!');
    } catch (error) {
      console.error('Load Error:', error);
      alert('Failed to load students.');
    }
  };

  const handleSaveStudent = async (studentData) => {
    try {
      if (studentData.id) {
        // Edit
        await updateStudent(studentData.id, studentData);
        alert('Student updated successfully! Click "Load Students" to see changes.');
      } else {
        // Add
        await createStudent(studentData);
        alert('Student added successfully! Click "Load Students" to see the new entry.');
      }
      setCurrentMode(MODE.LIST);
      setSelectedStudent(null);
    } catch (error) {
      console.error('Save Error:', error);
      alert(`Failed to save student: ${error.message}`);
    }
  };

  const handleDeleteStudent = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await deleteStudent(id);
        alert('Student deleted successfully! Click "Load Students" to update the list.');
      } catch (error) {
        console.error('Delete Error:', error);
        alert('Failed to delete student.');
      }
    }
  };

  const renderContent = () => {
    switch (currentMode) {
      case MODE.LIST:
        return (
          <StudentList
            students={students}
            onLoadStudents={loadStudents}
            onAddStudent={() => setCurrentMode(MODE.ADD)}
            onEdit={(student) => {
              setSelectedStudent(student);
              setCurrentMode(MODE.EDIT);
            }}
            onDelete={handleDeleteStudent}
            onViewDetails={(student) => {
              setSelectedStudent(student);
              setCurrentMode(MODE.DETAILS);
            }}
          />
        );
      case MODE.ADD:
        return (
          <StudentForm
            onSave={handleSaveStudent}
            onCancel={() => setCurrentMode(MODE.LIST)}
          />
        );
      case MODE.EDIT:
        return (
          <StudentForm
            initialData={selectedStudent}
            onSave={handleSaveStudent}
            onCancel={() => setCurrentMode(MODE.LIST)}
          />
        );
      case MODE.DETAILS:
        return (
          <StudentDetails
            student={selectedStudent}
            onBack={() => setCurrentMode(MODE.LIST)}
          />
        );
      default:
        return <StudentList students={[]} onLoadStudents={loadStudents} onAddStudent={() => setCurrentMode(MODE.ADD)} />;
    }
  };

  return (
    <div>
      <h1>Student Result Management App</h1>
      {renderContent()}
    </div>
  );
};

export default App;

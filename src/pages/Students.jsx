import React from 'react';
import StudentForm from '../components/StudentForm';
import StudentCard from '../components/StudentCard';

function Students() {
  function handleAddStudent(newStudent) {
    console.log("New student added:", newStudent);
  }

  return (
    <div className="container py-4 text-start">
      <StudentForm onAddStudent={handleAddStudent} />

      <h2 className="fw-normal text-dark mb-4">Student List</h2>
      <div className="row">
        <StudentCard
          id={101}
          name="Jane Doe"
          program="Computer Science"
          semester={2}
          email="jane@example.com"
          phone="0300-1111111"
        />
        <StudentCard
          id={102}
          name="Mary Doe"
          program="Software Engineering"
          semester={4}
          email="mary@example.com"
          phone="0300-2222222"
        />
        <StudentCard
          id={103}
          name="Gant Doe"
          program="Computer Science"
          semester={3}
          email="gant@example.com"
          phone="0300-3333333"
        />
        <StudentCard
          id={104}
          name="Amm Doe"
          program="Information Technology"
          semester={2}
          email="amm@example.com"
          phone="0300-4444444"
        />
      </div>
    </div>
  );
}

export default Students;
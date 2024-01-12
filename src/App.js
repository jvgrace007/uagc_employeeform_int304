import React, {useState} from 'react';
import './App.css';
import EmployeeForm from './Components/EmployeeForm';
import EmployeeList from './Components/EmployeeList';

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };


  return (
    <BrowserRouter>
      <div>
        <EmployeeForm onSubmit={addEmployee} />
        <EmployeeList employees={employees} />
      
      </div>
    </BrowserRouter>
  );
}

export default App;

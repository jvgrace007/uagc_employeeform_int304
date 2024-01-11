import React from 'react';
import '../EmployeeForm.css';

class EmployeeForm extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            name: '',
            email: '',
            title: '',
            department: ''
        };
    }
    
    // Event handler for input field changes
    handleInputChange = (event) => 
    {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    // Event handler for form submission
    handleFormSubmit = (event) => 
    {
        event.preventDefault();
    
        // Log the current state to the console
        console.log('Form submitted:', this.state);

        // Save the data to Local Storage
        this.saveDataToLocalStorage();
    
        // Reset the state to clear the input fields
        this.setState({
          name: '',
          email: '',
          title: '',
          department: ''
        });
    };

    // Function to save the data to Local Storage
    saveDataToLocalStorage = () => 
    
    {
        // Get existing data from Local Storage
        const existingData = JSON.parse(localStorage.getItem('employeeData')) || [];

        // Add the current form data to the existing data
        const newData = [...existingData, this.state];

        // Save the updated data back to Local Storage
        localStorage.setItem('employeeData', JSON.stringify(newData));
    };

    render() 
    {
        return (
        <div>
            <form onSubmit={this.handleFormSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />  
                </label>
                <br />

                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />

                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />

                <label>
                    Department:
                    <input
                        type="text"
                        name="department"
                        value={this.state.department}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
        );
    }
}

export default EmployeeForm;

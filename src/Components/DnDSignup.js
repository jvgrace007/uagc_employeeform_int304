import React, { useState } from 'react';
import '../Content/EmployeeForm.css';

function DnDSignup(props) {
  const [name, setName] = useState('');
  const [characterName, setCharacterName] = useState('');
  const [characterClass, setCharacterClass] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const playerInfo = {
      name,
      characterName,
      characterClass,
      phoneNumber,
      email,
    };
    props.onSubmit(playerInfo);
    // Reset the form fields
    setName('');
    setCharacterName('');
    setCharacterClass('');
    setPhoneNumber('');
    setEmail('');
  };

  return (
    <div className="dnd-signup">
      <h2>D&D Sign-up</h2>
      <form className="employee-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="characterName">Character Name: </label>
          <input
            type="text"
            id="characterName"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="characterClass">Class: </label>
          <input
            type="text"
            id="characterClass"
            value={characterClass}
            onChange={(e) => setCharacterClass(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number: </label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Sign-up</button>
      </form>
    </div>
  );
}

export default DnDSignup;

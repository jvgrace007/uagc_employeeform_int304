// DnDPlayerDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../Content/EmployeeForm.css'; // Assuming you reuse the styling from EmployeeForm.css

function DnDPlayerDetail(props) {
  // grab the id from the URL
  const { id } = useParams();
  
  // find that player by id
  const player = props.players.find((player) => player.PlayerId === parseInt(id));
  const { PlayerId, playerName, characterName, dndClass, phoneNumber, email } = player || {}; // Provide fallback object if player is undefined

  // render an HTML with that player's information
  return (
    <div className="dnd-player-detail">
      <table>
        <tbody>
          <tr>
            <td><label>Player ID: </label></td>
            <td>{PlayerId}</td>
          </tr>
          <tr>
            <td><label>Player Name: </label></td>
            <td>{playerName}</td>
          </tr>
          <tr>
            <td><label>Character Name: </label></td>
            <td>{characterName}</td>
          </tr>
          <tr>
            <td><label>Class: </label></td>
            <td>{dndClass}</td>
          </tr>
          <tr>
            <td><label>Phone Number: </label></td>
            <td>{phoneNumber}</td>
          </tr>
          <tr>
            <td><label>Email: </label></td>
            <td>{email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DnDPlayerDetail;

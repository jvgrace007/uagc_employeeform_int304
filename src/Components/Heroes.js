// Heroes.js
import React from 'react';

function Heroes(props) {
  const { players } = props;

  if (!players) {
    // Handle the case when players is undefined
    return <div>No heroes available</div>;
  }

  return (
    <div className="heroes">
      <h2>Heroes</h2>
      <table>
        <tbody>
          {players.map((player) => (
            <tr key={player.id}>
              <td>{player.characterName}</td>
              <td>the {player.characterClass}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {players.length > 0 && (
        <button onClick={props.onSaveData}>Save Data</button>
      )}
    </div>
  );
}

export default Heroes;

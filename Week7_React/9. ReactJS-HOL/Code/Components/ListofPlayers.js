
import React from "react";

const ListofPlayers = () => {
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 45 },
    { name: "KL Rahul", score: 70 },
    { name: "Shubman Gill", score: 55 },
    { name: "Suresh Raina", score: 95 },
    { name: "Hardik Pandya", score: 68 },
    { name: "Rishabh Pant", score: 40 },
    { name: "Ravindra Jadeja", score: 78 },
    { name: "Kuldeep Yadav", score: 33 },
    { name: "Mohammed Shami", score: 88 },
    { name: "Jasprit Bumrah", score: 64 },
  ];

  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players:</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with Score Below 70:</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;

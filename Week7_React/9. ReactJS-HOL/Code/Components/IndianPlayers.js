
import React from "react";

const IndianPlayers = () => {
  
  const oddTeam = ["Virat Kohli", "KL Rahul", "Hardik Pandya", "Mohammed Shami", "Jasprit Bumrah"];
  const evenTeam = ["Rohit Sharma", "Shubman Gill", "Suryakumar Yadav", "Rishabh Pant", "Ravindra Jadeja", "Kuldeep Yadav"];


  const [oddCaptain, ...oddMembers] = oddTeam;
  const [evenCaptain, ...evenMembers] = evenTeam;

  
  const T20players = ["Kohli", "Rohit", "Gill"];
  const RanjiTrophyPlayers = ["Rahul", "Pant", "Jadeja"];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <p><strong>Captain:</strong> {oddCaptain}</p>
      <ul>
        {oddMembers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <p><strong>Captain:</strong> {evenCaptain}</p>
      <ul>
        {evenMembers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged Players (T20 + Ranji Trophy)</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;

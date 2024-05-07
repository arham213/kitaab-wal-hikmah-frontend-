import React, { useState, useEffect } from "react";
import axios from "axios";

function Dummy() {
  const [teams, setTeams] = useState([]);
  console.log("Dummy Page loaded");
  useEffect(() => {
    console.log("Use Effect Called");
    axios.get("/api/getAll")
      .then(response => setTeams(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>RANK</th>
          <th className="Mar">TEAM NAME</th>
          <th className="Mar">TOTAL GAMES PLAYED</th>
          <th className="Mar">SCORE</th>
          </tr>
            {teams.map(team => (
            <tr>
              <td>{team.rank} </td>
              <td><img src={team.team_icon} alt='icon'></img>  {team.team_name}</td>
              <td>{team.total_games_played}</td>
              <td>{team.score}</td>
            </tr>
            ))}
        </table>
  </div>
);}

export default Dummy;
import React, { useEffect, useState } from "react";

function App() {

  const [teams, setTeams] = useState([]);

  useEffect(() => {

    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")

      .then((response) => response.json())

      .then((data) => {

        const sortedData = data.sort((a, b) => a.NRR - b.NRR);

        setTeams(sortedData);
      });

  }, []);

  return (

    <div style={{ padding: "20px" }}>

      <h2>IPL 2022 Points Table</h2>

      <table border="1" cellPadding="10">

        <thead>

          <tr>
            <th>No</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Points</th>
            <th>NRR</th>
          </tr>

        </thead>

        <tbody>

          {teams.map((team, index) => (

            <tr key={index}>

              <td>{index + 1}</td>
              <td>{team.Team}</td>
              <td>{team.Matches}</td>
              <td>{team.Won}</td>
              <td>{team.Lost}</td>
              <td>{team.Points}</td>
              <td>{team.NRR}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default App;
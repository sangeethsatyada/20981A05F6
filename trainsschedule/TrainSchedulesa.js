import React, { useState } from "react";

const TrainSchedule = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const trainData = [
    { id: 2344, trainName: "Chennai Exp", departureTime: "08:00 AM", price: 50 },
    { id: 2341, trainName: "Hyderabad", departureTime: "09:30 AM", price: 60 },
    { id: 2343, trainName: "Delhi DoorHai Exp", departureTime: "10:45 AM", price: 70 },
    
  ];
  function handleSearch(e) {
        setSearchTerm(e.target.value);
        const filteredTrains = trainData.filter((train) => train.trainName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredTrains);
    }

  return (
    <div>
      <h1>Train Schedule</h1>
      <div>
        <input
          type="text"
          placeholder="Search by train name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Train Name</th>
            <th>Departure Time</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((train) => (
            <tr key={train.id}>
                
              <td>{train.trainName}</td>
              <td>{train.departureTime}</td>
              <td>${train.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainSchedule;
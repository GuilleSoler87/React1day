import React from "react";
import PersonClass from "./components/PersonClass/PersonClass";
import PersonFunc from "./components/PersonFunc/PersonFunc";

function App() {
  const usersData = [
    {
      name: "Guillermo",
      surname: "Soler",
      age: 35
    },
    {
      name: "Victoria",
      surname: "Cortés",
      age: 30
    },
    {
      name: "Gala",
      surname: "Soler",
      age: 21
    }
  ];

  return (
    <div>
      {usersData.map((userData, index) => (
        <div key={index}>
          <PersonFunc key={`func-${index}`} usersData={userData} />
          <PersonClass key={`class-${index}`} usersData={userData} />
        </div>
      ))}
    </div>
  );
}

export default App;

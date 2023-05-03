import React from "react";

const PersonFunc = (props) => {
  return (
    <div>
      <span>Nombre: {props.usersData.name}</span><br />
      <span>Apellido: {props.usersData.surname}</span><br />
      <span>Edad: {props.usersData.age}</span>
    </div>
  );
};

export default PersonFunc;

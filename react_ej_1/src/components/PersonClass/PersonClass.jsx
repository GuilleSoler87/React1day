import React from "react";

class PersonClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
   
    return (
      <div>
        <span>Nombre: {this.props.usersData.name}</span><br />
        <span>Apellido: {this.props.usersData.surname}</span><br />
        <span>Edad: {this.props.usersData.age}</span>
      </div>
    );
  }
}

export default PersonClass;






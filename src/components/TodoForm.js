import React, { Component } from 'react';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      carnet: '',
      schedule: 'Lunes de 9:00 a 11.00',
      tarde: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      carnet: '',
      schedule: 'Lunes de 9:00 a 11.00',
      tarde: ''
    });
  }

  handleInputChange(e) {
    const { value, name } = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="jumbotron">
          <h1>
            Registro de laboratorio.
            </h1>
          <div className="form-group">
            <label for="carnet" class="col-sm-2 col-form-label">Ingrese el carnet: </label><br></br>
            <input
              type="text"
              name="carnet"
              className="form-control"
              value={this.state.carnet}
              onChange={this.handleInputChange}
              placeholder="Carnet"
            />
          </div>
          <div className="form-group">
            <label for="schedule">Seleccione el horario:</label>
            <select
              name="schedule"
              className="form-control"
              value={this.state.schedule}
              onChange={this.handleInputChange}
            >
              <option>Lunes de 9:00 a 11.00</option>
              <option>Martes de 13:30 a 15:30</option>
              <option>Miércoles de 9:00 a 11.00</option>
              <option>Jueves de 13:30 a 15:30</option>
              <option>Viernes de 9:00 a 11.00</option>
              <option>Viernes de 15:30 a 17:30</option>
            </select>
          </div>
          <div className="form-group">
            <label for="schedule">Tarde?</label>
            <select
              name="tarde"
              className="form-control"
              value={this.state.tarde}
              onChange={this.handleInputChange}
            >
              <option>A tiempo</option>
              <option>Tardisimo</option>
            </select>
          </div>

          <div class="form-group">
            <button type="submit" className="btn btn-primary">
              Guardar
          </button>
          </div>

        </form>
      </div>
    )
  }

}

export default TodoForm;

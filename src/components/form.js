import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addContact } from '../actions';

class Form extends Component {
  state = {
      name: '',
      phone: ''
  }
  _add(event){
    event.preventDefault();
    this.props.addContact(this.state);
    this.setState({name: '', phone: ''});
  }
  render() {
    return (
      <form onSubmit={this._add.bind(this)}>
        <div className="form-group">
          <label for="exampleInputEmail1">Nombre</label>
          <input type="text" value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}} className="form-control" id="exampleInputEmail1"/>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Telefono</label>
          <input type="text" value={this.state.phone} onChange={(e) => {this.setState({phone: e.target.value})}} className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    );
  }
}

function mapStateToProps (state) {
  return {
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addContact: (contact) => dispatch(addContact(contact))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form)

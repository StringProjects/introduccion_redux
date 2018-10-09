import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {

  _filter(list, search) {
    return list.filter(contact => contact.name.includes(search));
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {
            this._filter(this.props.list, this.props.search).map((contact) => {
              return (
                <tr>
                  <td>{contact.name}</td>
                  <td>{contact.phone}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps (state) {
  return {
    list: state.contacts.list,
    search: state.contacts.search
  }
}

function mapDispatchToProps (dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List)

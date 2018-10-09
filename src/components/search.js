import React, { Component } from 'react';
import { connect } from 'react-redux';

import { search } from '../actions';

class Search extends Component {
  render() {
    return (
      <div className="form-group">
        <input value={this.props.search} className="form-control" onChange={(e) => this.props.searchValue(e.target.value)} placeholder={"Buscar"}/>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    search: state.contacts.search
  }
}

function mapDispatchToProps (dispatch) {
  return {
    searchValue: (value) => dispatch(search(value))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search)

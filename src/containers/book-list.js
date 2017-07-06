import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class Booklist extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item" >
          {book.title}
        </li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  //This will show up  inside of BookList
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Booklist);

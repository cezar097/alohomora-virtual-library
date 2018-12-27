import React, { Component } from 'react';
import Book from './Book'

class BooksContainer extends Component {
  
  getBooks = (books)=>{
    let result=[];
    let i=0;
    books.forEach((elem)=>{
      let img = elem.volumeInfo.imageLinks!=null ? elem.volumeInfo.imageLinks.thumbnail : "https://read.macmillan.com/wp-content/uploads/2016/04/book-cover-placeholder.png";
      let desc = elem.volumeInfo.description!= null ? elem.volumeInfo.description : "There's no description for this book.";
      result.push(<Book key={i++} modalId={i} userId={this.props.userId} image={img} title={elem.volumeInfo.title} author={elem.volumeInfo.authors} description={desc}/>);
    });
    return result;
  }
  
  render() {
    return (
      <div className="container">
        <h2>Results</h2>
        <div className="row">
            {this.getBooks(this.props.books)}
        </div>
      </div>
    );
  }
  
  
}

export default BooksContainer;
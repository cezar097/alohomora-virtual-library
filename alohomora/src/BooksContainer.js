import React, { Component } from 'react';
import Book from './Book'

class BooksContainer extends Component {
  render() {
    return (
      <div className="container">
        <h2>Results</h2>
        <div className="row">
            <Book image="https://about.canva.com/wp-content/uploads/sites/3/2015/01/art_bookcover.png" title="The World of Abstract Art" author="Lorem Ipsum"/>
            <Book image="https://about.canva.com/wp-content/uploads/sites/3/2015/01/art_bookcover.png" title="The World" author="Lorem Ipsum"/>
            <Book image="https://about.canva.com/wp-content/uploads/sites/3/2015/01/art_bookcover.png" title="The World of Abstract Art of Today" author="Lorem Ipsum"/>
            <Book image="https://about.canva.com/wp-content/uploads/sites/3/2015/01/art_bookcover.png" title="The World of Abstract Art" author="Lorem Ipsum Dolor sit Amet bla bla"/>
            <Book image="https://about.canva.com/wp-content/uploads/sites/3/2015/01/art_bookcover.png" title="The World of Abstract Art" author="Lorem Ipsum"/>
            <Book image="https://about.canva.com/wp-content/uploads/sites/3/2015/01/art_bookcover.png" title="The World of Abstract Art" author="Lorem Ipsum"/>
        </div>
        <div className="row">
            <Book image="https://about.canva.com/wp-content/uploads/sites/3/2015/01/art_bookcover.png" title="The World of Abstract Art" author="Lorem Ipsum"/>
            <Book image="https://about.canva.com/wp-content/uploads/sites/3/2015/01/art_bookcover.png" title="The World" author="Lorem Ipsum"/>
            <Book image="https://about.canva.com/wp-content/uploads/sites/3/2015/01/art_bookcover.png" title="The World of Abstract Art of Today" author="Lorem Ipsum"/>
            <Book image="https://about.canva.com/wp-content/uploads/sites/3/2015/01/art_bookcover.png" title="The World of Abstract Art" author="Lorem Ipsum"/>
            <Book image="https://about.canva.com/wp-content/uploads/sites/3/2015/01/art_bookcover.png" title="The World of Abstract Art" author="Lorem Ipsum"/>
            <Book image="https://about.canva.com/wp-content/uploads/sites/3/2015/01/art_bookcover.png" title="The World of Abstract Art" author="Lorem Ipsum"/>
        </div>
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 className="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div className="modal-body">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. 
      </div>
      <div className="modal-footer">
        <div className="left-side">
            <button type="button" className="btn btn-default btn-simple" data-dismiss="modal">Never mind</button>
        </div>
        <div className="divider"></div>
        <div className="right-side">
            <button type="button" className="btn btn-danger btn-simple">Delete</button>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    );
  }
  
  
}

export default BooksContainer;
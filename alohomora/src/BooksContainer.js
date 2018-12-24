import React, { Component } from 'react';
import Book from './Book'
import $ from 'jquery'

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
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. 
      </div>
      <div class="modal-footer">
        <div class="left-side">
            <button type="button" class="btn btn-default btn-simple" data-dismiss="modal">Never mind</button>
        </div>
        <div class="divider"></div>
        <div class="right-side">
            <button type="button" class="btn btn-danger btn-simple">Delete</button>
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
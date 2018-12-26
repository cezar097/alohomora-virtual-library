import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
  render() {
    return (
        <div>
      <div className="col-md-2">
        <img className="cover" src={this.props.image} alt="Cover"/>
        <h4>{this.props.title}</h4>
        <h5>{this.props.author}</h5>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Read more</button>
      </div>
      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 className="modal-title" id="myModalLabel">{this.props.title}</h4>
                    </div>
                    <div className="modal-body">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. 
                    </div>
                    <div className="modal-footer">
                        <div className="left-side">
                            <button type="button" className="btn btn-default btn-simple" data-dismiss="modal">Close</button>
                        </div>
                        <div className="divider"></div>
                        <div className="right-side">
                            <button type="button" className="btn btn-danger btn-simple">Add to favorites</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
  }
  
  
}

export default Book;
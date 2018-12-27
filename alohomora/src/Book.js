import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
  render() {
    return (
        <div>
      <div className="col-md-2 book">
        <img className="cover" src={this.props.image} alt="Cover"/>
        <h4 className="title">{this.props.title}</h4>
        <h5 className="author">{this.props.author}</h5>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target={'#'+this.props.modalId}>Read more</button>
      </div>
      <div className="modal fade" id={this.props.modalId} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 className="modal-title" id="myModalLabel">{this.props.title}</h4>
                    </div>
                    <div className="modal-body">
                        {this.props.description}
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
import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import axios from 'axios';
import BooksContainer from './BooksContainer';
import ReactDOM from 'react-dom';

const SERVER = "https://alohomora-virtual-library-cezar097.c9users.io";

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      user: null,
      books: null,
    }
  }
  
  postUser=(e)=>{
    e.preventDefault();
    let email = $("#email").val();
    let pass = $("#pass").val();
    axios.post(SERVER+'/users',{
      email: email,
      pass: pass
    }).then((response)=>{
      alert('User created!');
      this.setState({user: response.data[0]});
      this.setState({user: {email: email}});
      $("#loginBtn").text('Welcome '+email);
      this.getFavs();
    }).catch(function(err){
      console.log(err);
    });
    return false;
  }
  
  getUser=()=>{
    let email = $("#email").val();
    let pass = $("#pass").val();
    axios.get(SERVER+'/users/'+email)
    .then((response)=>{
      if(email === response.data[0].email && pass === response.data[0].pass){
        this.setState({user: response.data[0]});
        $("#loginBtn").text('Welcome '+email);
        this.getFavs();
      }
      else alert('Email or password incorrect!');
    }).catch(function(err){
      console.log(err);
    });
    return false;
  }
  
  getBooks=()=>{
    let type = $('#type').text().trim().toLowerCase();
    let search = $('#searchBar').val().trim().toLowerCase();
    if(type === 'title'){
      axios.get(SERVER+'/googlebooks/'+search)
      .then((response)=>{
        this.setState({books: response.data});
        ReactDOM.render(<BooksContainer userId={this.state.user.email} books={response.data.items}/>, document.getElementById('bksContainer'));
      }).catch(function(err){
        console.log(err);
      });
    }
    else if(type === 'author'){
      axios.get(SERVER+'/googleauthors/'+search)
      .then((response)=>{
        this.setState({books: response.data});
        ReactDOM.render(<BooksContainer userId={this.state.user.email} books={response.data.items}/>, document.getElementById('bksContainer'));
      }).catch(function(err){
        console.log(err);
      });
    }
  }
  
  modalType=()=>{
    if(this.state.user===null) return "#loginmodal";
    else return "#favsmodal";
  }
  
  getFavs=()=>{
    let body = $('#favsBody');
    body.empty();
    let i=1;
    this.state.user.books.forEach(elem=>{
        let row = $('<tr></tr>');
        let id = $('<td></td>').text(i++);
        let title = $('<td></td>').text(elem.title);
        let author = $('<td></td>').text(elem.author);
        row.append(id).append(title).append(author);
        body.append(row);
    });
  }
  
  componentDidMount(){
    $(".dropdown-menu li a").click(function(){
      var selText = $(this).text();
      $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
    });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-ct-transparent" id="demo-navbar">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="logo-container">
                <div className="logo">
                    <img src="assets/img/favicon.png" alt="Alohomora Logo"/>
                </div>
                <div className="brand">
                    Alohomora Library
                </div>
              </div>
            </div>

            <div className="collapse navbar-collapse" id="navigation-example-2">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <button id="loginBtn" type="button" className="btn btn-primary" data-toggle="modal" data-target={this.modalType()} style={{backgroundColor: '#D22335', border: 'none', color: 'white'}}>Login</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="wrapper">
          <div className="demo-header demo-header-image">
              <div className="motto">
                  <h1 className="title-uppercase">Alohomora</h1>
                  <h3>The magic of books at one click away</h3>
              </div>
              <div className="container" style={{padding: "4em"}}>
                <div className="row justify-content-center vcenter">
                  <div className="col-md-3">
                    <div className="btn-group" style={{float: 'right'}}>
                      <button id="type" className="btn dropdown-toggle" data-toggle="dropdown" style={{color: 'white', backgroundColor: '#D22335', border: 'none'}}>
                        Search book by <span className="caret"></span>
                      </button>
                      <ul className="dropdown-menu">
                      {/*eslint-disable-next-line*/ }
                        <li><a href="#">Title</a></li>
                        {/*eslint-disable-next-line*/}
                        <li><a href="#">Author</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <input id="searchBar" type="text" placeholder="Type here" className="form-control" />
                  </div>
                  <div className="col-md-3">
                    <button href="https://www.google.com" className="btn btn-danger btn-fill" style={{backgroundColor: '#D22335', border: 'none'}} onClick={this.getBooks}>Search</button>
                  </div>
                </div>
              </div>
           </div>
         </div>
         <div id="bksContainer">
        </div>
         <div className="modal fade" id="loginmodal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content" style={{backgroundColor: '#D22335'}}>
                    <div className="modal-body">
                      <div className="register-card">
                          <form className="register-form">
                              <label style={{color: 'white'}}>Email</label>
                              <input type="text" className="form-control" placeholder="Email" id="email"/>
                              <label style={{color: 'white'}}>Password</label>
                              <input type="password" className="form-control" placeholder="Password" id="pass"/>
                              <button className="btn btn-block" style={{marginTop: '1em', marginRight: '1em', float: 'left', backgroundColor: 'white', border: 'none', width: '45%', display: 'inline-block'}} onClick={this.getUser} data-dismiss="modal">Log in</button>
                              <button className="btn btn-block" style={{marginTop: '1em', marginLeft: '1em', float: 'right', backgroundColor: 'white', border: 'none', width: '45%', display: 'inline-block'}} onClick={this.postUser} data-dismiss="modal">Register</button>
                              <button style={{visibility: 'hidden'}}></button>
                              <button style={{visibility: 'hidden'}}></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade" id="favsmodal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" aria-hidden="true" onClick={this.getUser}>refresh</button>
                      <h4 className="modal-title" id="myModalLabel">Favorites</h4>
                    </div>
                    <div className="modal-body">
                      <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Author</th>
                            </tr>
                        </thead>
                        <tbody id="favsBody">
                            
                        </tbody>
                    </table>
                  </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
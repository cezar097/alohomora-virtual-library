import React, { Component } from 'react';
import './App.css';
import $ from 'jquery'
import BooksContainer from './BooksContainer';

class App extends Component {
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
                  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#loginmodal" style={{backgroundColor: '#D22335', border: 'none', color: 'white'}}>Login</button>
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
                      <a className="btn dropdown-toggle" data-toggle="dropdown" href="#" style={{color: 'white', backgroundColor: '#D22335', border: 'none'}}>
                        Search book by <span className="caret"></span>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a href="#">Title</a></li>
                        <li><a href="#">Author</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <input type="text" placeholder="Type here" className="form-control" />
                  </div>
                  <div className="col-md-3">
                    <a href="https://www.google.com" className="btn btn-danger btn-fill" style={{backgroundColor: '#D22335', border: 'none'}}>Search</a>
                  </div>
                </div>
              </div>
           </div>
         </div>
         <BooksContainer/>
         <div className="modal fade" id="loginmodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content" style={{backgroundColor: '#D22335'}}>
                    <div className="modal-body">
                      <div className="register-card">
                          <form className="register-form">
                              <label style={{color: 'white'}}>Email</label>
                              <input type="text" className="form-control" placeholder="Email"/>
                              <label style={{color: 'white'}}>Password</label>
                              <input type="password" className="form-control" placeholder="Password"/>
                              <button className="btn btn-block" style={{marginTop: '1em', marginRight: '1em', float: 'left', backgroundColor: 'white', border: 'none', width: '45%', display: 'inline-block'}}>Log in</button>
                              <button className="btn btn-block" style={{marginTop: '1em', marginLeft: '1em', float: 'right', backgroundColor: 'white', border: 'none', width: '45%', display: 'inline-block'}}>Register</button>
                              <button style={{visibility: 'hidden'}}></button>
                              <button style={{visibility: 'hidden'}}></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  componentDidMount(){
    $(".dropdown-menu li a").click(function(){
      var selText = $(this).text();
      $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
    });
  }
}

export default App;
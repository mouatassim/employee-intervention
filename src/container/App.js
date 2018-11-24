import React, { Component } from 'react';
import './App.css';
import * as API from './service'
import User from '../components/Users/User'
import Header from '../components/Header/Header'
import ErrorMessage from '../components/Error/ErrorMessage';
class App extends Component {

    constructor(props){
      super(props)
      this.state ={
        users : []
      }
    }

  componentDidMount(){
    API.fetchLinks().then(res =>{
        
      this.setState({
        users : this.state.users.concat(res.data)
      })
      
      
    }).catch(err =>{
      this.setState=(()=>({
        error: err 
      }))
      
    });
  }

  componentDidCatch(err,info){
    console.log(err);
    console.log(info)

    this.setState =(()=>({
      error: err
    }))
    
    
  }
  render() {

    if(this.state.error){
      return(
        <ErrorMessage error={this.state.error}/>
      );
    }
    
    return (
      
      <div className="App">
        <Header title="Emplpyee"/>
        <br/>
        <div className="container">
            <div className="row">
              <div className="col-md-12">
                  <h4>Liste des Employee</h4> 
                </div>

          <div className="row">
                
                {this.state.users.map(user=>
                      <User key={user.id} user={user}/>
                )}
                
            </div>
        </div>  
        </div>     
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>Age: <span>{this.props.age}</span></div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        <hr></hr>
        <div>History:</div>
        <div>
          <ul>
            {
              this.props.history.map((element,i)=>{
                return(
                  <li key={i}>{element.age}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
  return{
    age:state.age,
    history:state.history
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    onAgeUp: ()=>{
      dispatch({type: 'AGE_UP', val: 4})
    },
    onAgeDown: ()=>{
      dispatch({type: 'AGE_DOWN', val:4})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

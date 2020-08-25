import React from 'react';
import './App.css';
import Table from './Table';
import Report from './Report';
import Popup from './Popup';

class App extends React.Component {
  constructor(){
      super();
      this.state = {
          arr: [],
          showPopup: false,
          row: null,
      };
  }
  onRowSelect = row => {
    console.log(row);
    this.setState({row});
  }
  offRowSelect = () => {
    this.setState({row: null})
  }
  inputForm = input =>{
    console.log(input)
    this.state.row.price = input.price;
    
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  async componentDidMount() {
      const response = await fetch(` http://www.filltext.com/?rows=10&id={number|100}&name={firstName}&country={country}&price={number|1000}&quantity={number|30}`)
      const arr = await response.json()
      this.setState({
          arr
      })
      console.log('this.state.arr', this.state.arr)
  }
  render(){
    return (
      <div className="App">
        <Table 
          closePopup={this.togglePopup.bind(this)}
          arr={this.state.arr}
          onRowSelect={this.onRowSelect}
        />
        <Report arr={this.state.arr} />
        {this.state.showPopup ? <Popup closePopup={this.togglePopup.bind(this)}/> : null}
        {this.state.row ? <Popup row={this.state.row} closePopup={this.offRowSelect.bind(this)} onInput={this.inputForm}/> : null}
      </div>
    );
  }  
}

export default App;

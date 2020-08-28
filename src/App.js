import React from 'react';
import './App.css';
import axios from 'axios';
/*import Table from './components/Table';
import Report from './components/Report';
import Popup from './components/Popup';
*/
import WishListView from './components/WishListView';
import { WishList } from './models/WishList';

/*const wishList = WishList.create({
  items:[]
})*/

/*class App extends React.Component {
  constructor(){
      super();
      this.state = {
          arr: [],
          showPopup: false,
          row: null,
      };
  }
  onRowSelect = row => {
    this.setState({row});
  }
  offRowSelect = () => {
    this.setState({row: null})
  }
  inputForm = input =>{
    this.setState(({row}) =>{ 
       Object.assign(row, input)
    });
    this.offRowSelect();
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
      const wishList = WishList.create({
        items: await response.json()
      })
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

        <WishListView wishList={wishList}/>
      </div>
    );
  }  
}*/

/*<WishListView wishList={wishList}/>*/
/*let wishList = [{id: 1, name: "доска", country: "50x50", quantity: 5, price: 175}];*/

/*const wishList = WishList.create({
  items: [{id: 1, name: "доска", country: "50x50", quantity: 5, price: 175}]
})
console.log(wishList);*/
function App () {
  const arr = async function loadJson() {
    const response = await axios.get(` http://www.filltext.com/?rows=10&id={number|100}&name={firstName}&country={country}&price={number|1000}&quantity={number|30}`)
    const json = await response.data;
    console.log(json);
    
  };
  
  console.log(arr())
  const wishList = WishList.create({
    items:  arr
  })
    return (
      <div className="App">
        <WishListView wishList={wishList}/>
      </div>
    );
}
export default App;

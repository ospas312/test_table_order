import React from 'react';
import './App.css';
import  Report from './components/Report';
import items from './order.json';
import WishListView from './components/WishListView';
import { WishList } from './models/WishList';

function App () {
  const wishList = WishList.create({
    items:  items
  })
    return (
      <div className="App">
        <WishListView wishList={wishList} />
        <Report wishList={wishList} />
      </div>
    );
}
export default App;

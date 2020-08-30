import React from "react"
import WishListItemView from "./WishListItemView"
import { observer } from "mobx-react"

const WishListView = ({ wishList }) =>(
    <div className="list">
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Character</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {(wishList.items).map((item, idx) => <WishListItemView key={idx} item={item} />)} 
            </tbody>
        </table>
        <h4> Итого: {wishList.totalQuantity} шт. на {wishList.totalPrice} рублей. </h4>
    </div>
)
export default observer(WishListView);
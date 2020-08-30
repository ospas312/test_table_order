import React, { Component } from "react"
import { observer } from "mobx-react"

import './WishListItemEdit.css'

class WishListItemEdit extends Component {
    render() {
        const { item } = this.props
        return (
            <div className="popup">
                <div className="popup__content">
                    <div className="close" onClick={this.props.closePopup}></div>
                    <table className="popup__table">
                        <thead>
                            <tr className="popup__table-tr">
                                <th className="popup__table-th">ID</th>
                                <th className="popup__table-th">Name</th>
                                <th className="popup__table-th">Character</th>
                                <th className="popup__table-th">Price</th>
                                <th className="popup__table-th">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                <tr key={item.id} className="popup__table-tr" >
                                    <td className="popup__table-td">{item.id}</td>
                                    <td className="popup__table-td">{item.name}</td>
                                    <td className="popup__table-td">{item.character}</td>
                                    <td className="popup__table-td"><input type="number" onChange={this.onPriceChange}  value={item.price}/></td>
                                    <td className="popup__table-td"><input type="number" onChange={this.onQuantityChange}  value={item.quantity}/></td>
                                </tr>
                            }
                        </tbody>
                    </table>
                    <button className="popup__button" onClick={this.props.onSaveEdit} >Ok</button>
                    <button className="popup__button" onClick={this.props.closePopup} >Cancel</button>
                </div>
            </div>
        )
    }
    onPriceChange = event => {
        let price = parseInt(event.target.value);
        if (!isNaN(price)) this.props.item.changePrice(price)
    };
    onQuantityChange = event => {
        let quantity = parseInt(event.target.value);
        if (!isNaN(quantity)) this.props.item.changeQuantity(quantity)
    };
}
export default observer(WishListItemEdit);
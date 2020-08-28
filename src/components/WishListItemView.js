import React from "react"

const WishListItemView = ({ item }) => (
    <ul className="item">
        <li>{item.id}</li>
        <li>{item.name}</li>
        <li>{item.country}</li>
        <li>{item.quantity}</li>
        <li>{item.price}</li>
    </ul>
)

export default WishListItemView;
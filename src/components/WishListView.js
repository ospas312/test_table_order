import React from "react"
import WishListItemView from "./WishListItemView"

const WishListView = ({ wishList }) =>(
    <div className="list">
        <ul>{(wishList.items).map((item, idx) => <WishListItemView key={idx} item={item} />)}</ul>
    </div>
)
export default WishListView;
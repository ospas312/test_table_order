import React from "react"
import { observer } from "mobx-react"
import WishListItemEdit from "./WishListItemEdit"
import { clone, getSnapshot, applySnapshot } from "mobx-state-tree"


class WishListItemView extends React.Component{
    constructor(){
        super()
        this.state = { showPopup: false }
    }
    render() {
        const { item } = this.props
        return this.state.showPopup ? (this.renderEditable()) : (
                <tr className="row" onClick={this.onTongleEdit}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.character}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td><button className="button__delete" onClick={item.remove}>Delete</button></td>
                </tr>
        )
    }
    onTongleEdit = (event) => {
        if (!event.target.classList.contains("button__delete") ){
            this.setState({
                showPopup: !this.state.showPopup,
                clone: clone(this.props.item)
            });
        }
    };
    onSaveEdit = () => {
        applySnapshot(this.props.item, getSnapshot(this.state.clone))
        this.setState({
            showPopup: !this.state.showPopup,
            clone: null
        })
    };
    renderEditable() {
        return (
            <tr>
                <WishListItemEdit item={this.state.clone} onSaveEdit={this.onSaveEdit} closePopup={this.onTongleEdit} />
            </tr>
            
        )
    };
}

export default observer(WishListItemView);
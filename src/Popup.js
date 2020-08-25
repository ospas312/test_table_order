import React, {useState} from 'react';
import './Popup.css';


function Popup (props) {
    //const {id, name, country } = props.row
    const [price, setPrice] = useState('')
    const valueInputForm = event => {
        setPrice(event.target.value !== "" ? event.target.value : event.target.value=props.row.price)
    }
    const [quantity, setQuantity] = useState('')
    const valueInput = event => {
        setQuantity(event.target.value !== "" ? event.target.value : event.target.value=props.row.quantity)
    }
    
        return(
            <div className="popup">
                <div className="popup__content">
                    <div className="close" onClick={props.closePopup}></div>
                    <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        <tr key={props.row.id} className="row" >
                            <td>{props.row.id}</td>
                            <td>{props.row.name}</td>
                            <td>{props.row.country}</td>
                            <td><input type={Number} onChange={valueInputForm}  defaultValue={props.row.price}/></td>
                            <td><input onChange={valueInput}  defaultValue={props.row.quantity}/></td>
                         </tr>
                    }
                </tbody>
            </table>
                    <button onClick={() => props.onInput({price, quantity})}>ok</button>
                    <button onClick={props.closePopup}>cancel</button>
                </div>
            </div>
        );
    
}

export default Popup;
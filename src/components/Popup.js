import React, {useState} from 'react';
import './Popup.css';


function Popup (props) {
    const {id, name, country } = props.row;
    
    let [price, setPrice] = useState(props.row.price)
    let valueInputForm = event => {
        setPrice(+event.target.value)
    }
    let [quantity, setQuantity] = useState(props.row.quantity)
    let valueInput = event => {
        setQuantity(+event.target.value)
    }
    
        return(
            <div className="popup">
                <div className="popup__content">
                    <div className="close" onClick={props.closePopup}></div>
                    <table className="popup__table">
                <thead>
                    <tr className="popup__table-tr">
                        <th className="popup__table-th">ID</th>
                        <th className="popup__table-th">Name</th>
                        <th className="popup__table-th">Country</th>
                        <th className="popup__table-th">Price</th>
                        <th className="popup__table-th">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        <tr key={props.row.id} className="popup__table-tr" >
                            <td className="popup__table-td">{props.row.id}</td>
                            <td className="popup__table-td">{props.row.name}</td>
                            <td className="popup__table-td">{props.row.country}</td>
                            <td className="popup__table-td"><input type="number" onChange={valueInputForm}  value={price}/></td>
                            <td className="popup__table-td"><input type="number" onChange={valueInput}  value={quantity}/></td>
                         </tr>
                    }
                </tbody>
            </table>
                    <button className="popup__button" onClick={() => props.onInput({id, name, country, price, quantity})}>ok</button>
                    <button className="popup__button" onClick={props.closePopup}>cancel</button>
                </div>
            </div>
        );
    
}

export default Popup;
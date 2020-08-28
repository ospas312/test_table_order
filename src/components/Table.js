import React from 'react';
import './Table.css';


class Table extends React.Component {
    summPrice(){
        return (this.props.arr).reduce((sum, current) => sum + current.price*current.quantity, 0);
    }
    summQuantity(){
        return (this.props.arr).reduce((sum, current) => sum + current.quantity, 0);
    }
    render(){
        return(
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Country</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        { (this.props.arr).map(item =>(
                            <tr key={item.id} className="row" onClick={this.props.onRowSelect.bind(null, item)}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.country}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h4> Итого: {this.summQuantity()} шт. {this.summPrice()} рублей. </h4>
            </div>
        );
    }
}

export default Table;
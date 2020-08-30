import React from 'react';
import './Report.css';
import { observer } from "mobx-react"

class Report extends React.Component {
    priceMax() {
        return Math.max.apply(null, (this.props.wishList.items).map(item => (item.price)));
    };
    maxRange(arr){
       let arrMax =  Math.max.apply(null, arr.map(item => (item.price)));
       return Math.ceil(arrMax/100)*100;
    };
    wishReport(){
        let content =[];
        let arr = this.props.wishList.items;
        for (let i=100; i<=(this.maxRange(arr)); i=i+100){
            let posNum = arr.filter(item => item.price <= i-1 && item.price >= i-100);
            let sumQuantity = posNum.reduce((sum, current) => sum + current.quantity, 0);
            let sumPrice = posNum.reduce((sum, current) => sum + current.quantity*current.price, 0);
            content.push(
                <tr key={i}>
                    <th>{i-100}...{i-1}</th>
                    <th>{posNum.length} позиции</th>
                    <th>{sumQuantity} шт.</th>
                    <th>{sumPrice} р.</th>
                </tr>
            )
        }
        return content;
    }
    render(){
        return(
            <div className="report">
                <p>Отчёт:</p>
                <table className="table">
                <thead>
                    <tr>
                        <th>Диапозон</th>
                        <th>Позиций</th>
                        <th>Колличество</th>
                        <th>Сумма</th>
                    </tr>
                </thead>
                <tbody> 
                        { this.wishReport() } 
                </tbody>
            </table>
            </div>
        );
    }
}

export default observer(Report);
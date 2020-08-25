import React from 'react';
import './Report.css';


class Report extends React.Component {
    priceMax() {
        return Math.max.apply(null, (this.props.arr).map(item => (item.price)));
    };
    pozNum(arr){
       let arrMax =  Math.max.apply(null, arr.map(item => (item.price)));
       return Math.ceil(arrMax/100)*100;
    };
    /*pozPer(){
        let mas = this.props.arr;
        let sto = mas.filter(item => item.price < 100); 
        console.log(sto.length);
        return sto.length;
    }*/
    /*pozSum(){
        let mas = this.props.arr;
        let sto = mas.filter(item => item.price < 200 && item.price > 100);
        console.log('sto', sto);
        let sum = sto.reduce((sum, current) => sum + current.quantity, 0);
        console.log('sum', sum);
        let sumSum = sto.reduce((sum, current) => sum + current.quantity*current.price, 0);
        console.log('sumSum', sumSum);
    };*/
    testOtchet(){
        let content =[];
        let arr = this.props.arr;
        for (let i=100; i<=(this.pozNum(arr)); i=i+100){
            let posNum = arr.filter(item => item.price < i && item.price > i-100);
            let sumQuantity = posNum.reduce((sum, current) => sum + current.quantity, 0);
            let sumPrice = posNum.reduce((sum, current) => sum + current.quantity*current.price, 0);
            content.push(<tr><th>{i-100}...{i}</th>
            <th>{posNum.length} позиции</th>
            <th>{sumQuantity} шт.</th>
            <th>{sumPrice} р.</th></tr>)
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
                        { this.testOtchet() } 
                </tbody>
            </table>
            </div>
        );
    }
}

export default Report;
import React from 'react'
import style from '../Elements/Elements.module.css';
import Earnings from '/src/assets/Earnings.png';
import Orders from '/src/assets/Orders.png';
import Balance from '/src/assets/Balance.png';
import TotalSales from '/src/assets/TotalSales.png';
import BarGraph from '/src/assets/BarGraph.png';
import PieGraph from '/src/assets/PieGraph.png';
import Table from '../Charts/Table'

function Elements() {
    return (
        <div className={style.element}>
            <div className={style.card}>
                <img className={style.cardimg}src={Earnings} alt="no img" />
                <div className={style.subdiv}>
                    <span>Earnings</span>
                    <h6>$198K</h6>
                    <span className={style.success}>37.8% </span><span>this month</span>
                </div>

            </div>
            <div className={style.card}>
            <img className={style.cardimg}src={Orders} alt="no img" />
                <div className={style.subdiv}>
                    <span>Orders</span>
                    <h6>$2.4K</h6>
                    <span className={style.failure}>2% </span><span>this month</span>
                </div>
            </div>
            <div className={style.card}>
            <img className={style.cardimg}src={Balance} alt="no img" />
                <div className={style.subdiv}>
                    <span>Balance</span>
                    <h6>2.4K</h6>
                    <span className={style.failure}>2% </span><span>this month</span>
                </div>
            </div>
            <div className={style.card}>
            <img className={style.cardimg}src={TotalSales} alt="no img" /> 
                <div className={style.subdiv}>
                    <span>Total Sales</span>
                    <h6>$89K</h6>
                    <span className={style.success}>11% </span><span>this week</span>
                </div>
            </div>
            <div className={style.bargraphcard}>
            <img className={style.bargraphimg}src={BarGraph} alt="no img" />
           
            </div>
            <div className={style.piegraphcard}>
            <img className={style.piegraph}src={PieGraph} alt="no img" />
           
            
            </div>
            <div className={style.tablecard}>
            <Table />
            </div>
        </div>
    )
}

export default Elements
import React from 'react'
import style from '../Sidebar/Sidebar.module.css';
import Hamburger from '/src/assets/Hamburger.png';
import Dashboard from '/src/assets/Dashboard.png';
import Product from '/src/assets/Product.png';
import Customer from '/src/assets/Customer.png';
import Income from '/src/assets/Income.png';
import Promote from '/src/assets/Promote.png';
import Help from '/src/assets/Help.png';
import arrow from '/src/assets/Arrow.png';



function Sidebar() {

  

  return (
    <div className={style.sidebar} id="sidebarnav">
      <img className={style.Dashboard} src={Dashboard} alt="no img" />
      <h6 className={style.Sidebarheader}>Dashboard</h6>
      <img className={style.Hamburger} src={Hamburger} alt="no img" id="hamburger-icon" />
      <ul>

        <li><img className={style.liimg} src={Product} alt="no img" /> Product<img className={style.arrow} src={arrow} alt="no img" /></li>
        <li><img className={style.liimg} src={Customer} alt="no img" />Customers <img className={style.arrow} src={arrow} alt="no img" /></li>
        <li><img className={style.liimg} src={Income} alt="no img" />Income<img className={style.arrow} src={arrow} alt="no img" /></li>
        <li><img className={style.liimg} src={Promote} alt="no img" />Promote<img className={style.arrow} src={arrow} alt="no img" /></li>
        <li><img className={style.liimg} src={Help} alt="no img" />Help<img className={style.arrow} src={arrow} alt="no img" /></li>
      </ul>
    </div>
  )
}

export default Sidebar;
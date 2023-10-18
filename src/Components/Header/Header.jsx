import React from 'react';
import style from '../Header/Header.module.css';
import HelloSign from '/src/assets/Hello.png';


function Header() {
    return (
        <div className={style.head}>
           <span className={style.name}>Hello Sanjay</span>
           <img className={style.hello}src={HelloSign} alt="no img" />
           <input type="text"className={style.search} placeholder="Search"></input>
        </div>
    );
}

export default Header;

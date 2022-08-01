import React from 'react'
import { NavLink } from 'react-router-dom'
import css from '../Header/Header.module.scss'

function Header() {
  return (
    <div className={css.MainHeader}>
    <h1 className={css.wrapper}>
    <div className={css.Header}>
    <NavLink className={css.NavLink} to={"/"}>
  <div className={css.FrontElement} > Tomas </div > 
  <div className={css.BackElement} > Tomas.ME </div > 
  </NavLink>
  </div>
  </h1>
  </div>
  )
}

export default Header
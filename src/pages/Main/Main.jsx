import React from 'react'
import css from "../Main/Main.module.scss";

function Main() {
  return (
    <div className={css.MainBox}>
        <div className={css.FElement}>
            <h1>
            <div className={css.BElement}> <span className={css.label}></span></div > 
            <div className={css.BElement}> <span className={css.labelnext}></span></div >
            <div className={css.BElement}> <span className={css.labelsecond}></span></div > 
            </h1>
        </div>

        </div>
  )
}


export default Main

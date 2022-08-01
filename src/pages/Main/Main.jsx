import React from 'react'
import { NavLink } from 'react-router-dom';
import css from "../Main/Main.module.scss";

function Main() {
  return (
    <div className={css.MainBox}>
        <div className={css.FElement}>
            <h1>
              <div className={css.wrap}>
                <div className={css.box}>
              <NavLink className={css.NavLink} to={"/About"}>
            <div className={css.BElement1} id={css.IDBElement1}> Hello! </div > 
            <div className={css.BElement2} > About </div > 
            </NavLink>
            </div>
            <div className={css.box}>
            <NavLink className={css.NavLink} to={"/Experience"}>
            <div className={css.BElement1} id={css.IDBElement2}> I am </div >
            <div className={css.BElement2}> Exp. </div >
            </NavLink>
            </div>
            <div className={css.box}>
            <NavLink className={css.NavLink} to={"/Contacts"}>
            <div className={css.BElement1} id={css.IDBElement3}> Tomas</div > 
            <div className={css.BElement2}> Contacts</div > 
            </NavLink>
            </div>
            </div>
            </h1>
        </div>

        </div>
  )
}


export default Main

// function Main() {
//   return (
//     <div className={css.MainBox}>
//         <div className={css.FElement}>
//             <h1>
//               <NavLink className={css.NavLink} to={"/About"}>
//             <div className={css.BElement}> <span className={css.label}></span></div > 
//             </NavLink>
//             <NavLink className={css.NavLink} to={"/Experience"}>
//             <div className={css.BElement}> <span className={css.labelnext}></span></div >
//             </NavLink>
//             <NavLink className={css.NavLink} to={"/Contacts"}>
//             <div className={css.BElement}> <span className={css.labelsecond}></span></div > 
//             </NavLink>
//             </h1>
//         </div>

//         </div>
//   )
// }

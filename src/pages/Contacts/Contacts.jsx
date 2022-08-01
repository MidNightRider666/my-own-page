import ClipboardJS from 'clipboard';
import React from "react";
import { NavLink } from "react-router-dom";
import css from "../Contacts/Contacts.module.scss";

function Contacts() {

  
	var clipboard = new ClipboardJS('.btn')

		clipboard.on('success', function(e) {
		console.log(e);
	});	
		clipboard.on('error', function(e) {
		console.log(e);
	});


  return (
   
    <div className={css.maxWidth}>
      <div className={css.maxWidthTopBottom}>
        <div className={css.TextBlock}>
          <h2 className={css.textColor}>
            {" "}
            <span>Let's</span> <span> Make</span> <span> Something</span>{" "}
            <span> Great</span> <span> Together!</span>
          </h2>
        </div>
        <div className={css.newTextBlock}>
          <h4 className={css.newTextColor}>Contacts</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aliquid esse vel. Facilis molestias vitae modi voluptate. Ratione expedita, id architecto amet voluptate cumque deleniti laudantium quas nihil magnam accusantium.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tenetur tempore explicabo sapiente quibusdam. Error veritatis fuga quis sunt aliquam nesciunt provident doloribus aspernatur ipsam odio, ipsa laudantium iusto ea!</p>
          <p> Feel free to contact me on any of these platorm (And check Github too!)</p>
          <div className={css.links}>
            <button className='btn'
            data-clipboard-text="tomas.dmit9807@gmail.com "
            >
          <NavLink className={`base-input-class ${css.hover} ${css.labelEmail}`}  to={{}}>
          </NavLink>
          </button>
        <NavLink className={css.hover} to={{pathname:"https://www.linkedin.com/in/tomas-dmitrenko/"}} target="_blank">
          Facebook
        </NavLink>
        <NavLink className={css.hover} to={{pathname:"https://www.linkedin.com/in/tomas-dmitrenko/"}} target="_blank">
          LinkedIn
        </NavLink>
        <NavLink className={css.hover} to={{pathname:"https://github.com/MidNightRider666"}} target="_blank">
          GitHub
        </NavLink>
        </div>

        </div>
      </div>
    </div>
  );
}

export default Contacts;

import { useEffect, useRef, useState } from "react";
import Type from "../../Components/type/type";
import css from "../About/About.module.scss";




 function About() {

  const myRef = useRef();
  const [myElementIsVisible, updateMyElementIsVisible] = useState();



  useEffect(() => {
    console.log('myRef', myRef.current);
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      console.log('entry', entry);
      console.log('entry.isIntersecting', entry.isIntersecting);
      updateMyElementIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);

  
  return (
    <div className={css.maxWidth}>
      <div className={css.maxWidthTopBottom}>
        <div className={css.TextBlock}>
          <h2 className={css.textColor}>
            {" "}
            <Type />
          </h2>
        </div>
        <div className={css.newTextBlock}>
          <h4 className={css.newtextColor}>Something about me!</h4>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, numquam delectus. Fugit, aspernatur vel optio corporis, quidem qui debitis sed aperiam quam voluptate velit quaerat, exercitationem animi inventore explicabo laborum? Ullam beatae modi, numquam maiores dolor saepe debitis. Pariatur, optio blanditiis? Autem mollitia libero consequatur minima nobis dolor fugiat nam, sit, labore ad voluptates esse inventore placeat voluptatibus perferendis explicabo! Id dolorem qui sunt, laboriosam eaque libero illum maxime quibusdam nisi, atque, at rem aliquam. Neque rem voluptatum excepturi nam tenetur quae exercitationem earum. Error quod delectus tempore reprehenderit quia in pariatur optio illum vel modi, sed saepe voluptatibus a? Laudantium quibusdam enim doloribus cupiditate nam commodi recusandae quo praesentium, fugit voluptatibus voluptatum rerum explicabo odit saepe amet dignissimos voluptates vero labore fugiat numquam pariatur non minus eveniet id. Enim nisi quibusdam deserunt quae dignissimos illum harum architecto ipsam modi voluptatem corporis, fugit in sequi accusamus vel esse. Dignissimos, at odit! Eum voluptatibus porro natus repudiandae, molestias provident quod veritatis, dicta consequuntur voluptate, doloremque deleniti! Ex est quidem qui voluptas cumque saepe nihil consequuntur ipsum optio molestias excepturi autem facilis ullam temporibus laboriosam iure eius assumenda dicta, placeat sint maxime? Quas consequatur et provident velit ducimus optio a, delectus illum, labore ipsa perspiciatis aspernatur esse culpa porro obcaecati quidem laborum sunt tempore ab quod nam natus voluptatibus. Autem ratione porro tempora, cupiditate consectetur iste, velit aspernatur adipisci praesentium, sequi odit perspiciatis veritatis quo nemo amet eligendi. Quae similique ipsam quia sunt animi aperiam nulla nostrum cum voluptates laudantium. Qui quas soluta vero et sit? Rem nemo fugiat nisi reiciendis tenetur est asperiores alias delectus. Esse mollitia iure assumenda illum harum ipsam at aperiam sint laboriosam illo facere, soluta id quisquam dicta voluptas doloremque fugiat porro ipsa corrupti? Aliquam atque eum sit cupiditate cum enim! Facere laborum expedita, ducimus nulla error sint cum atque non delectus. Reiciendis perferendis temporibus quaerat ullam tenetur numquam aut expedita, natus praesentium nemo distinctio voluptates quos commodi necessitatibus sed architecto accusantium aliquid quisquam sunt ipsum laudantium unde dolorum. Optio quasi ex exercitationem libero commodi temporibus quis! Earum, quos laborum, eaque pariatur nihil molestiae numquam vitae aliquam rerum, sint dolore inventore repellendus? Quam explicabo provident dolor doloremque omnis asperiores, dignissimos consectetur maiores eveniet maxime suscipit qui. Cumque ab corporis inventore provident aliquam voluptatibus mollitia quia quos nesciunt suscipit possimus soluta magnam expedita unde nemo autem, ut ad dolorem sunt, temporibus repellat, et accusantium ea! Culpa harum aperiam quibusdam ab? Atque unde maiores nostrum exercitationem tempora quod rem voluptates sint, ullam, provident asperiores deleniti sunt rerum dignissimos ipsa impedit id? Voluptatem nobis officia laudantium voluptatibus nihil ducimus accusantium nostrum architecto quas quidem. Minus architecto quis saepe quos fugiat nihil? Voluptatum delectus voluptatibus ex dicta minima id ullam doloremque laudantium eos laboriosam quisquam iure assumenda, minus ab eligendi reprehenderit ducimus! Porro quae dolor veniam necessitatibus quo minima blanditiis cumque alias voluptatibus tempora aliquam corrupti tempore labore, est, vero doloribus dolorum deserunt reiciendis. Odio consequuntur error nobis praesentium rem cumque, vel obcaecati mollitia ratione! Provident enim animi id, odit esse voluptates saepe soluta magni, sit ex officia voluptate atque, assumenda architecto error accusantium illu
          </p>
        </div>
        <div>
          <h2>Skills</h2>
        </div>
        <div className={css.skills}>
          <div className={css.skill}>
            <div className={css.skillname}>
              HTML
            </div>
            <div className={css.skillbar}>
            <input type="checkbox" id={css.skillcheck} style={{display:"none"}} />
              <div ref={myRef} className={`${css.skillper} ${myElementIsVisible ? css.skillperAnimate: ''}`} per={'100%'} style={{maxWidth:'100%'}}></div>
            </div>
          </div>
          <div className={css.skill}>
            <div className={css.skillname}>
              JavaScript
            </div>
            <div className={css.skillbar}>
              <div className={`${css.skillper} ${myElementIsVisible ? css.skillperAnimate: ''}`} per={'80%'} style={{maxWidth:'80%'}}></div>
            </div>
          </div>
          <div className={css.skill}>
            <div className={css.skillname}>
              Css
            </div>
            <div className={css.skillbar}>
              <div className={`${css.skillper} ${myElementIsVisible ? css.skillperAnimate: ''}`} per={'95%'} style={{maxWidth:'95%'}}></div>
            </div>
          </div>
          <div className={css.skill}>
            <div className={css.skillname}>
              Scss
            </div>
            <div className={css.skillbar}>
              <div className={`${css.skillper} ${myElementIsVisible ? css.skillperAnimate: ''}`} per={'95%'} style={{maxWidth:'95%'}}></div>
            </div>
          </div>
          <div className={css.skill}>
            <div className={css.skillname}>
              React
            </div>
            <div className={css.skillbar}>
              <div className={`${css.skillper} ${myElementIsVisible ? css.skillperAnimate: ''}`} per={'100%'} style={{maxWidth:'100%'}}></div>
            </div>
          </div>
          <div className={css.skill}>
            <div className={css.skillname}>
              Typescript
            </div>
            <div className={css.skillbar}>
              <div className={`${css.skillper} ${myElementIsVisible ? css.skillperAnimate: ''}`} per={'70%'} style={{maxWidth:'70%'}}></div>
            </div>
          </div>
        </div>
        <div className={css.hobies}>
          <h2>Hobies</h2>
        </div>
        <div className={css.mainflip}>
          <div class={css.flipcard}>
            <div class={css.flipcardinner}>
              <div class={css.flipcardfront}>
                <img
                  src={require("../../img/football.png")}
                  alt="Avatar"
                  style={{ width: 300, height: 300 }}
                />
              </div>
              <div class={css.flipcardback}>
                <h2>Football!</h2>
                <p></p>
                <p>
                  Every programmer needs something to keep themselfs in shape,
                  so what's a better way then a nice match of football with
                  friends?
                </p>
              </div>
            </div>
          </div>
          <div class={css.flipcard}>
            <div class={css.flipcardinner}>
              <div class={css.flipcardfront}>
                <img
                  src={require("../../img/videogame.jpg")}
                  alt="Avatar"
                  style={{ width: 300, height: 300 }}
                />
              </div>
              <div class={css.flipcardback}>
                <h2>Video games!</h2>
                <p></p>
                <p>
                  But of course Video games! A programmer without video games is
                  like...
                </p>
              </div>
            </div>
          </div>
          <div class={css.flipcard}>
            <div class={css.flipcardinner}>
              <div class={css.flipcardfront}>
                <img
                  src={require("../../img/programming.png")}
                  alt="Avatar"
                  style={{ width: 300, height: 300 }}
                />
              </div>
              <div class={css.flipcardback}>
                <h2>Programming!</h2>
                <p></p>
                <p>
                  And of couse programming! A new hobby of mine that I am
                  striving to make it into a profession!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

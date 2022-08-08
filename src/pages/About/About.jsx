import React from 'react'
import Type from '../../Components/type/type'
import css from '../About/About.module.scss'

function About() {
  return (
  <div className={css.maxWidth}>
   <div className={css.maxWidthTopBottom}>
      <div className={css.TextBlock}>
          <h2 className={css.textColor}>
            {" "}
            <Type/>
          </h2>
        </div>
        <div className={css.newTextBlock}>
            <h4 className={css.newtextColor}>Something about me!</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem animi fuga, quos libero cumque quisquam, placeat est eveniet, iure doloribus voluptates mollitia enim nihil sit fugiat assumenda inventore aspernatur deleniti?
            </p>
        </div>
        <div className={css.hobies}>
            <h2>Hobies</h2>
       </div>
    <div className={css.mainflip}>
    <div class={css.flipcard}>
  <div class={css.flipcardinner}>
    <div class={css.flipcardfront}>
      <img src={require('../../img/football.png')} alt="Avatar" style={{width:300, height:300}}/>
      </div>
    <div class={css.flipcardback}>
      <h2>FootBall!</h2>
      <p></p>
      <p>Every programmer needs something to keep themselfs in shape, so what's a better way then a nice match of football with friends?</p>
    </div>
  </div>
  </div>
  <div class={css.flipcard}>
  <div class={css.flipcardinner}>
    <div class={css.flipcardfront}>
      <img src={require('../../img/videogame.jpg')} alt="Avatar" style={{width:300, height:300}}/>
      </div>
    <div class={css.flipcardback}>
      <h2>Video games!</h2>
      <p></p>
      <p>But of course Video games! A programmer without video games is like...</p>
    </div>
  </div>
  </div>
  <div class={css.flipcard}>
  <div class={css.flipcardinner}>
    <div class={css.flipcardfront}>
      <img src={require('../../img/programming.png')} alt="Avatar" style={{width:300, height:300}}/>
      </div>
    <div class={css.flipcardback}>
      <h2>Programming!</h2>
      <p></p>
      <p>And of couse programming! A new hobby of mine that I am striving to make it into a profession!</p>
    </div>
  </div>
  </div>
</div>
          </div>

      </div>
  )

}

export default About
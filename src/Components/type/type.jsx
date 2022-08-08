import React from 'react'
import Typed from 'react-typed'

function Type() {
  return (
    <div>
    <Typed 
    strings={[
        "With a big passion for:&nbsp;"   
    ] 
    }
    showCursor={false}
    typeSpeed={80}
    />

    <Typed 
    strings={[
        " Programming!",
        " Web Developing!",
        " Front-End!"
    ]}
    startDelay={2500}
    typeSpeed={150}
    backSpeed={100}
    loop
    />
    </div>
  )
}


export default Type

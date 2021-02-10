import React from 'react'

export default function TextJumbotrons(props) {
     return (
          <div className=" textJumbotron d-flex justify-content-center align-items-center p-3  flex-column w-100">
               <div style={{zIndex : 2}}>
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>
               </div>
          </div>
     )
}

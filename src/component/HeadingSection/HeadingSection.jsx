import React from 'react'

export default function HeadingSection(props) {
     return (
          <div className="HeadingSection">
               <span className="sub_Heading">{props.subHeading}</span>
               <h2 className="title_Heading">{props.titleHeading}</h2>
               <p className="description_Heading">{props.description}</p>
          </div>
     )
}

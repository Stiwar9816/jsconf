import React from 'react'
// import {readMore } from './readMore'


export default function TalkEvent(props) {

  return (

      // Card con Materialize - Collapse
  //   <li className="page-schedule__li">
  //     <article className="page-card">
  //       <div className="page-card__time">
  //         <div className="page-card__time-start">{props.time}</div>
  //       </div>
  //       <div className="page-card__content-photo">
  //         <figure className="page-card__information-photo">
  //           {props.figure()}
  //         </figure>
  //       <div className="page-card__information">
  //         <div className="page-card__information-description">
  //           <h3 className="page-activity">{props.talkName}</h3>
  //           <h4 className="page-speaker-name">{props.name}</h4>
  //             <ul className="collapsible page-information">
  //               <li  dangerouslySetInnerHTML={{ __html: props.description }} />
  //             </ul>
  //           <div className="page-speaker-social">
  //             <a href={props.twitterUrl} target="__blank" rel="noopener noreferrer">{props.twitterName}</a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </article>
  // </li>


      // Card con JQuery button
    <li className="page-schedule__li">
      <article className="page-card">
        <div className="page-card__time">
          <div className="page-card__time-start">{props.time}</div>
        </div>
        <div className="page-card__content-photo">
          <figure className="page-card__information-photo">
            {props.figure()}
          </figure>
        <div className="page-card__information">
          <div className="page-card__information-description">
            <h3 className="page-activity">{props.talkName}</h3>
            <h4 className="page-speaker-name">{props.name}</h4>
              <div  className="page-information" dangerouslySetInnerHTML={{ __html: props.description }} />
            <div className="page-speaker-social">
              <a href={props.twitterUrl} target="__blank" rel="noopener noreferrer">{props.twitterName}</a>
            </div>
          </div>
        </div>
      </div>
    </article>
    </li>

  )
}

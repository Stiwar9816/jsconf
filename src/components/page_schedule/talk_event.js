import React from 'react'
import { ReadMore } from './readMore'



export default function TalkEvent(props) {


  return (

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
            <p className="page-information" dangerouslySetInnerHTML={{ __html: props.description }} />
            {/* <button onClick={ReadMore.readMore} id="myBtn">Read more</button> */}
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

import React from 'react'


export default function SingleEvent(props) {
  return (
    <li className="page-schedule__li">
      <article className="page-card">
        <div className="page-card__time">
            <div className="page-card__time-start">{props.time}</div>
        </div>
        <div className="page-card__information  event  start-event">
          <h3 className="page-activity">{props.activity}</h3>
        </div>
      </article>
    </li>
  )
}

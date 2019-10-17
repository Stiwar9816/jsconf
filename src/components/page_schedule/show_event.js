import React from "react";

export default function TalkEvent(props) {
  return (
    // Card con Materialize - Modal
    <li className="page-schedule__li">
      <article className="page-card">
        <div className="page-card__time">
          <div className="page-card__time-start">{props.time}</div>
        </div>
        <div className="page-card__contentainer">
          <div className="page-card__photo">
            <figure className="page-card__figure-photo">
              {props.figure()}
            </figure>
          </div>
          <div className="page-card__information">
            <div className="page-card__information-description">
              <h3 className="page-activity">{props.talkName}</h3>
              <h4 className="page-speaker-name">{props.name}</h4>
              <div className="page-information">
                <div dangerouslySetInnerHTML={{ __html: props.description }} />
              </div>
              <a
                className="waves-effect waves-light btn modal-trigger  toggle-modal"
                href={props.alias}
              >
                Read more...
              </a>
              <div className="page-speaker-social">
                <a
                  href={props.twitterUrl1}
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  {props.twitterName1}
                </a>{" "}
                -
                <a
                  href={props.twitterUrl2}
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  {props.twitterName2}
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}

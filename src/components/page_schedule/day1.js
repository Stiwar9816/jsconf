import React from "react";

import SingleEvent from "./single_event";
import TalkEvent from "./talk_event";
import ShowEvent from "./show_event";
import { speakers } from "../../constants/speakers";

export default function Day1() {
  return (
    // Mterialize - Modal
    <ul className="page-schedule__ul">
      <h2 className="page-schedule__day">October 18</h2>
      <SingleEvent time="08:00am" activity="Registration" />
      <ShowEvent time="09:00am" {...speakers.show} />
      <SingleEvent time="09:40am" activity="Welcome" />
      <TalkEvent time="10:05am" {...speakers.constanza} />
      <TalkEvent time="10:40am" {...speakers.sergio} />
      <SingleEvent time="11:00am" activity="Break" />
      <TalkEvent time="11:20am" {...speakers.luis_alejandro} />
      <TalkEvent time="11:55am" {...speakers.mayra} />
      <TalkEvent time="12:30pm" {...speakers.irina} />
      <TalkEvent time="01:05pm" {...speakers.melina} />
      <TalkEvent time="01:25pm" {...speakers.santiago} />
      <SingleEvent time="02:00pm" activity="Lunch" />
      <TalkEvent time="03:15pm" {...speakers.anton} />
      <TalkEvent time="03:50pm" {...speakers.vanessa} />
      <SingleEvent time="04:25pm" activity="break" />
      <TalkEvent time="04:45pm" {...speakers.lucas} />
      <TalkEvent time="05:20pm" {...speakers.jennifer} />
      <SingleEvent time="05:55pm" activity="Closing" />
    </ul>
  );
}

import React from 'react'

import SingleEvent from './single_event'
import TalkEvent from './talk_event'
import { speakers } from '../../constants/speakers'

export default function Day1() {
  return (
    <ul className="page-schedule__ul">
      <h2 className="page-schedule__day" id="schedule">October 19</h2>
      <SingleEvent
        time="08:15am"
        activity="Registration"
      />
      <SingleEvent
        time="09:00am"
        activity="Welcome"
      />
      <TalkEvent
        time="09:15am"
        {...speakers.kate}
      />
      <TalkEvent
        time="09:50am"
        {...speakers.alejandro}
      />
      <TalkEvent
        time="10:25am"
        {...speakers.maris}
      />
      <SingleEvent
        time="10:45am"
        activity="Break"
      />
      <TalkEvent
        time="11:05am"
        {...speakers.adrian}
      />
      <TalkEvent
        time="11:40am"
        {...speakers.jerome}
      />
      <TalkEvent
        time="12:15pm"
        {...speakers.daniel}
      />
      <SingleEvent
        time="12:50pm"
        activity="group photo"
      />
      <SingleEvent
        time="01:05pm"
        activity="Lunch"
      />
      <SingleEvent
        time="02:20pm"
        activity="Panel"
      />
      <TalkEvent
        time="03:05pm"
        {...speakers.colin}
      />
      <TalkEvent
        time="03:40pm"
        {...speakers.jessica}
      />
      <SingleEvent
        time="04:15pm"
        activity="break"
      />
      <TalkEvent
        time="04:35pm"
        {...speakers.luis_villalobos}
      />
      <TalkEvent
        time="04:55pm"
        {...speakers.bryan}
      />
      <TalkEvent
        time="05:30pm"
        {...speakers.eva}
      />
      <SingleEvent
        time="05:00pm"
        activity="Closing"
      />
      <SingleEvent
        time="07:00pm"
        activity="After Party"
      />
    </ul>
  )
}

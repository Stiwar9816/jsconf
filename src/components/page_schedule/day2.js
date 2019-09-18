import React from 'react'

import SingleEvent from './single_event'
import TalkEvent from './talk_event'
import { speakers } from '../../constants/speakers'

export default function Day1() {
  return (
    <ul className="page-schedule__ul">
      <h2 className="page-schedule__day">October 19</h2>
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
        time="12:15pm"
        {...speakers.daniel}
      />
      <SingleEvent
        time="12:50pm"
        activity="group foto"
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
      <SingleEvent
        time="04:15pm"
        activity="break"
      />
      <TalkEvent
        time="04:35pm"
        {...speakers.luis_villalobos}
      />


    </ul>
  )
}

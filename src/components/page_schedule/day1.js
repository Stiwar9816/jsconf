import React from 'react'

import SingleEvent from './single_event'
import TalkEvent from './talk_event'
import { speakers } from '../../constants/speakers'

export default function Day1() {



  return (
     // Mterialize - Modal
    <ul className="page-schedule__ul">
      <h2 className="page-schedule__day">October 18</h2>
      <SingleEvent
        time="08:00am"
        activity="Registration"
      />
      <SingleEvent
        time="09:00am"
        activity="Welcome"
      />
      <SingleEvent
        time="09:25am"
        activity="Show"
      />
      <TalkEvent
        time="10:05am"
        {...speakers.constanza}
      />
      <TalkEvent
        time="10:40am"
        {...speakers.sergio}
      />
       <SingleEvent
        time="11:00am"
        activity="Break"
      />
      <TalkEvent
        time="11:20am"
        {...speakers.luis_alejandro}
      />
      <TalkEvent
        time="11:55am"
        {...speakers.mayra}
      />
      <TalkEvent
        time="12:30pm"
        {...speakers.irina}
      />
       <SingleEvent
        time="01:05pm"
        activity="Lunch"
      />
      <TalkEvent
        time="02:20pm"
        {...speakers.melina}
      />
      <TalkEvent
        time="02:40pm"
        {...speakers.santiago}
      />
      <TalkEvent
        time="03:15pm"
        {...speakers.anton}
      />
      <TalkEvent
        time="03:50pm"
        {...speakers.vanessa}
      />
      <SingleEvent
        time="04:25pm"
        activity="break"
      />
      <TalkEvent
        time="04:45pm"
        {...speakers.lucas}
      />
      <TalkEvent
        time="05:20pm"
        {...speakers.jennifer}
      />
      <SingleEvent
        time="05:55pm"
        activity="Closing"
      />
    </ul>
  )
}

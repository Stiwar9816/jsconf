import React from 'react'
import Layout from '../components/layout'
import ScheduleComponent from '../components/page_schedule/schedule_day1'

class Schedule extends React.Component {


  render() {
    return (
      <Layout>
        <ScheduleComponent />
      </Layout>
      )
    }
  }

  export default  Schedule

import React from 'react'

import Layout from '../components/layout'
import '../components/layout.scss'
import ScheduleComponent from '../components/page_schedule'

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

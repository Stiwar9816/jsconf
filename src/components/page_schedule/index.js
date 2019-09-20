import React from 'react'
import Day1 from './day1'
import Day2 from './day2'
import $ from 'jquery'
import "./schedule.scss";

class PageSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 1
    };
    this.pickDay = this.pickDay.bind(this);
  }

  pickDay(e, day) {
    e.preventDefault();
    this.setState({ day });
  }

  // Mterialize - Collapse
  // componentDidMount() {
  //   const elems = document.querySelectorAll('.collapsible');
  //   window.M.Collapsible.init(elems);
  // }

  // jQuery button
  componentDidMount() {
    $(document).ready(function() {
      $("#toggle").click(function() {
        var elem = $("#toggle").text();
        if (elem === "Read More...") {
          //Stuff to do when btn is in the read more state
          $("#toggle").text("Read Less");
          $("#text").slideDown();
        } else {
          //Stuff to do when btn is in the read less state
          $("#toggle").text("Read More...");
          $("#text").slideUp();
        }
      });
    });
  }


  render() {
    return (
      <section className="page-schedule">
        <div className="container">

          <h2 className="page-schedule__title  inner-padding">schedule</h2>

          <div className="page-schedule__day-picker  inner-padding">
            <button className="pick-day" onClick={e => this.pickDay(e, 1)}>
              day 1
            </button>
            <button className="pick-day" onClick={e => this.pickDay(e, 2)}>
              day 2
            </button>
          </div>

          {this.state.day === 1 ? <Day1 /> : <Day2 />}
        </div>
      </section>
    );

  }
}

export default PageSchedule;

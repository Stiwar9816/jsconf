import React from 'react'
// import Day1 from './day1'
import Day2 from './day2'
import { Link } from "gatsby"
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



  // Mterialize - Modal
  componentDidMount() {
    const elems = document.querySelectorAll('.modal');
    window.M.Modal.init(elems);
  }


  render() {
    return (
      <section className="page-schedule">
        <div className="container">

          <h2 className="page-schedule__title  inner-padding" id="schedule">schedule</h2>

          <div id="modal1" className="modal">
            <div className="modal-content">
              <h4>Modal Header</h4>
              <p>A bunch of text</p>
            </div>
            <div className="modal-footer">
              <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
          </div>

          <div className="page-schedule__day-picker  inner-padding">

              <Link
                className="pick-day"
                to="/schedule_day1/#schedule"
                activeStyle={{ color: "#E1E1E1" }}
              >
                  day 1
              </Link>
              <Link
                className="pick-day"
                to="/schedule_day2/#schedule"
                activeStyle={{ color: "#E1E1E1" }}
              >
                  day 2
              </Link>

          </div>

          <Day2 />

        </div>
      </section>
    );

  }
}

export default PageSchedule;

import React from "react";
import Layout from "../components/layout";
import SectionTuned from "../components/section_tuned";
import SectionSpeakers from "../components/section_speakers";
import SectionSponsor from "../components/section_sponsors";
import SectionVenue from "../components/section_venue";
import SectionTeam from "../components/section_team";
import Asidebar from "../components/aside";
import "./styles.scss";

class IndexPage extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const offset = 130;

    const position = window.pageYOffset;

    // console.log(document.querySelectorAll('.aside .main-menu__item a'));
    document.querySelectorAll('.aside .main-menu__item a').forEach(a => {
      var anchorId = a.getAttribute('href');

      if (anchorId.startsWith('#') && document.querySelector(anchorId)) {
        const target = document.querySelector(anchorId).offsetTop - offset;
        const targetHeight = document.querySelector(anchorId).offsetHeight + target;
        if (position >= target && position < targetHeight) {
          const menuItems = document.querySelectorAll('.aside .main-menu__item');
          for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.remove('active');
          }
          a.parentElement.classList.add('active');
        }
      }
    });
  }


  render() {
    return (
      <Layout>
        <Asidebar />
        <SectionSpeakers />
        <SectionSponsor />
        <SectionVenue />
        <SectionTeam />
        <SectionTuned />
      </Layout>
    );
  }
}

export default IndexPage;

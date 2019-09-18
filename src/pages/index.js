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

  readMore() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
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

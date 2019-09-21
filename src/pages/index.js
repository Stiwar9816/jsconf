import React from "react";
import Layout from "../components/layout";
import SectionTuned from "../components/section_tuned";
import SectionSpeakers from "../components/section_speakers";
import SectionSponsor from "../components/section_sponsors";
import SectionVenue from "../components/section_venue";
import SectionSchedule from "../components/page_schedule";
import SectionTeam from "../components/section_team";
import Asidebar from "../components/aside";
import "./styles.scss";

class IndexPage extends React.Component {

  render() {
    return (
      <Layout>
        <Asidebar />
        <SectionSpeakers />
        <SectionSponsor />
        <SectionVenue />
        <SectionSchedule />
        <SectionTeam />
        <SectionTuned />
      </Layout>
    );
  }
}

export default IndexPage;

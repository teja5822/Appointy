import React from "react";
import { Grid } from "@material-ui/core";
import AcadItem from "../acadItem/acadItem";
import School from "../../../assets/Schools.svg";
import Univ from "../../../assets/Universities-and-Colleges.svg";
import Prof from "../../../assets/Professors-Teachers.svg";
import Lib from "../../../assets/Libraries.svg";
import Tutors from "../../../assets/Tutors.svg";
import StudentServices from "../../../assets/Student-Services.svg";
import TestCenters from "../../../assets/Test-Centers.svg";
import EducationalEvents from "../../../assets/Educational-Events.svg";

function Acad() {
  const acadItems = [
    {
      imgSrc: School,
      institute: "Schools",
      description: `Schools can make class time tables, schedule resources, organize staff & parent meetings.
    career counseling etc.`,
    },
    {
      imgSrc: Univ,
      institute: "Universities & Colleges",
      description: `Institutions can schedule
      academic counseling, advising sessions, applicant interviews, campus tours courses, and more`,
    },
    {
      imgSrc: Prof,
      institute: "Professors & Teachers",
      description: `Professors can let students book 1:1 classes, doubt clearing sessions, after school activities. project mentoring, and more`,
    },
    {
      imgSrc: Lib,
      institute: "Libraries",
      description: `Public, school or university Libraries can manage bookings of study rooms, computer systems, hourly reading slots, etc.`,
    },
    {
      imgSrc: Tutors,
      institute: "Tutors",
      description: `Tutors can schedule in-person or online classes, market their business, manage students and more`,
    },
    {
      imgSrc: StudentServices,
      institute: "Student-Services",
      description: `Students can schedule on campus tech support, repair works, admin enquiries etc. with student services`,
    },
    {
      imgSrc: TestCenters,
      institute: "Test-Centers",
      description: `Test centers can schedule seats, computers, test taking time-slots and more`,
    },
    {
      imgSrc: EducationalEvents,
      institute: "Educational Events",
      description: `Institutions.can let attendees reserve a seat for science fairs. art exhibitions, seminars webinars conferences, etc.`,
    },
  ];
  return (
    <Grid container className="headerContainer">
      <Grid item container>
        <Grid item xs={1} />
        <Grid container item xs={10} direction="column">
          <Grid item className="headerText" style={{ textAlign: "center" }}>
            <h1>academic institutions</h1>
          </Grid>
          <Grid item className="subText" style={{ textAlign: "center" }}>
            Appointy can help businesses and institutions in the education,
            advising and non-profitdomain schedule 1:1 sessions, round-robin
            meetings and group classes
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>

      <Grid container item className="mainContainer">
        {acadItems.map((i) => (
          <Grid item xs={12} sm={6} md={3} key={i.institute}>
            <AcadItem
              imgSrc={i.imgSrc}
              institute={i.institute}
              description={i.description}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Acad;

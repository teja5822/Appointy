import React from "react";
import { Grid } from "@material-ui/core";
import BetterStudent from "../../assets/Better-student-experience.svg";
import BookingConv from "../../assets/Booking-convenience.svg";
import Connect from "../../assets/Connect-with-students.svg";
import GoalItem from "./goalItem/goalItem";
import "./goals.css";
import AptCnf from "../../assets/Appointment-confirmation-page-and-zoom-meeting-window.svg";
import PortalWthStd from "../../assets/Portal-with-student-database.svg";
import Profile from "../../assets/Instagram-profile-with-book-button-and-booking-page-with-various-subjects.svg";

function Goals() {
  const goalItems = [
    {
      imgSrc: Connect,
      head: "Connect with prospective students easily",
      des:
        "Admission offices can make their services easily accessible and enroll new students",
    },
    {
      imgSrc: BookingConv,
      head: "Give students more booking convenience",
      des:
        "Avoid any coordination hassles and let students easily schedule appointments & classes with you",
    },
    {
      imgSrc: BetterStudent,
      head: `Deliver better student experience`,
      des: `Store important student details that you can use to plan out your advising sessions & classes`,
    },
  ];
  return (
    <Grid container className="headerContainer">
      <Grid item container>
        <Grid item xs={1} />
        <Grid container item xs={10} direction="column">
          <Grid item className="headerText" style={{ textAlign: "center" }}>
            <h1>
              All-in-one education scheduling software that helps you achieve
              all your academic and business goals
            </h1>
          </Grid>
          <Grid item className="subText" style={{ textAlign: "center" }}>
            Appointy's education software takes the friction out of your
            scheduling process and helps you grow your teaching business or
            institute while keeping students as the top priority
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>

      <Grid container className="goalsSubContainer">
        {goalItems.map((i) => (
          <GoalItem
            key={i.head}
            imgSrc={i.imgSrc}
            head={i.head}
            des={i.des}
            xs={12}
            sm={4}
          />
        ))}
      </Grid>

      <Grid container className="mainContainer" alignItems="center">
        <Grid container item xs={12} sm={6} direction="column">
          <Grid item className="headerText">
            <h4>
              Make it easier for students to find and book 1:1 career
              counselling and academic advising sessions{" "}
            </h4>
          </Grid>
          <Grid item className="subText">
            <span style={{ fontWeight: 800 }}>
              Branded online booking system:{" "}
            </span>
            Create a professional, multi-lingual booking website for your
            university orinstitute. Customize it to match your brand - add a
            logo, services or classes you offer, staff portfolios, campus maps,
            etc. to ensure that applicants can schedule with the right staff for
            them. <br />
            <br />
            <span style={{ fontWeight: 800 }}>Multi-channel bookings: </span>
            Share your booking link with students in emails, texts, brochures,
            etc. or let them book campus tours and interviews directly from your
            website with Appointy's website integration.
            <br />
            <br />
            Add a book now button your institute's Facebook and Instagram
            profiles to connect with new students and give them an option to
            book an admission assistance call instantly.
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={6}>
          <Grid item className="goalImgContainer">
            <img src={Profile} alt="profile" className="goalImg" />
          </Grid>
        </Grid>
      </Grid>

      <Grid container className="mainContainer" alignItems="center">
        <Grid container item xs={12} sm={6}>
          <Grid item className="goalImgContainer">
            <img src={AptCnf} alt="aptCnf" className="goalImg" />
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={6} direction="column">
          <Grid item className="headerText">
            <h4>
              Eliminate the scheduling back and forth to empower students to
              reach out whenever they need you
            </h4>
          </Grid>
          <Grid item className="subText">
            <span style={{ fontWeight: 800 }}>24x7 online scheduling: </span>
            Students can easily find a time that works for them and book a
            session or sign-up for recurring classes on their own. Confirmed
            appointments are added to your calendar so that you're never double
            booked!
            <br />
            <br />
            <span style={{ fontWeight: 800 }}>
              Intelligent timezone detection:{" "}
            </span>
            Help students & applicants around the globe and ensure that everyone
            who wants to schedule with you can view your availability in their
            timezone.
            <br />
            <br />
            <span style={{ fontWeight: 800 }}>Web conferencing: </span>Offer
            students to schedule virtual courses, classes and admission
            counselling with Appointy's Zoom integration Automatically send a
            Zoom meeting or class linn scheduling notifications so that students
            can join your virtual classroom with just a click!
          </Grid>
        </Grid>
      </Grid>

      <Grid container className="mainContainer" alignItems="center">
        <Grid container item xs={12} sm={6} direction="column">
          <Grid item className="headerText">
            <h4>
              Personalize sessions based on student's needs and elevate their
              experience & satisfaction{" "}
            </h4>
          </Grid>
          <Grid item className="subText">
            <span style={{ fontWeight: 800 }}>
              Dedicated student profiles:{" "}
            </span>
            Collect important student information like contact details, classes
            attended, payments, etc. under student profiles. Use notes to make
            quick remarks about weak subjects, career analysis, etc. to
            communicate progress reports to parents regularly.
            <br />
            <br />
            <span style={{ fontWeight: 800 }}>Intake forms: </span> Collect
            crucial info at the time of enrollment using our intake forms to
            prepare better lesson plans and consultation notes before your
            sessions.
            <br />
            <br />
            <span style={{ fontWeight: 800 }}>
              Online Reputation Management:
            </span>{" "}
            Automatically request reviews from happy parents and students after
            a session. Promote these positive reviews on your social media and
            display them on your booking page with just a click.
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={6}>
          <Grid item className="goalImgContainer">
            <img
              src={PortalWthStd}
              alt="portalWithStudentDb"
              className="goalImg"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Goals;

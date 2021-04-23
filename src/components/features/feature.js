import React from "react";
import { Grid } from "@material-ui/core";
import AcadItem from "../academicInstitutions/acadItem/acadItem";
import CalSched from "../../assets/Calendar-Scheduler-2.svg";
import CalRem from "../../assets/Class-Reminders.svg";
import ResSched from "../../assets/Resource-Scheduling-1.svg";
import BookingAuto from "../../assets/Booking-Settings-1.svg";
import StaffMgmt from "../../assets/Team-Management-1.svg";
import OlPay from "../../assets/Online-prepayments-1.svg";
import RepAna from "../../assets/Reporting-and-Analytics-2.svg";
import App from "../../assets/Wellness-Scheduling-App-1.svg";

function Feature() {
  const featureItems = [
    {
      imgSrc: CalSched,
      institute: "Calendar Scheduler",
      description: `See your entire schedule at a glance with Appointy's easy-to use calendar with
       colour-coded thes for teachers and sessions Sync schedule with your personal or professional 
       calendars so that you're never double booked`,
    },
    {
      imgSrc: CalRem,
      institute: "Class Reminders",
      description: `Send automated email and text reminder notifications to students prior to a session
       meeting or a class to ensure that they don't miss it. Customize them to add info like room number, 
       location tinks, etc`,
    },
    {
      imgSrc: ResSched,
      institute: "Resource Scheduling",
      description: `Reserve equipments, lab rooms, sports fields, conference hails etc. automatically
       when a session is booked Save time and reduce operational costs that come with manually 
       allocating resources`,
    },
    {
      imgSrc: BookingAuto,
      institute: "Booking Automation",
      description: `Limit number of meetings and classes you can take in a day/week so that you are not
       overloaded Choose how much in advance anyone can bookcancel set maximum capacity for a class or 
       session, and more.`,
    },
    {
      imgSrc: StaffMgmt,
      institute: "Staff Management",
      description: `Boost staff productivity and let them view & manage their own schedules and sick leaves 
      using separate staff logins Distribute sessions across your team automatically with intelligent statt allocation`,
    },
    {
      imgSrc: OlPay,
      institute: "Online Prepayments",
      description: `Allow students to pay for your classes/sessions when they book Require full/partial fee with our  
      payment integrations with Stripe, Square, and Paypal so that you don't lose out on last-minute cancellations`,
    },
    {
      imgSrc: RepAna,
      institute: "Reporting & Analytics",
      description: `Keep a track on the number of classes in a week/month, sales, staff utilization, and more. Powerful
       reporting tools help you spot and resolve operational inefficiencies and help apt mize your processes`,
    },
    {
      imgSrc: App,
      institute: "Scheduling Mobile App",
      description: `Stay on top of upcoming
      appointments and schedule changes with Appointy's Android & OS mobile app You and your staff can manage scheduling payments,
       and reminders even when you are away from the desk`,
    },
  ];

  return (
    <Grid container className="headerContainer">
      <Grid item container>
        <Grid item xs={1} />
        <Grid container item xs={10} direction="column">
          <Grid item className="headerText" style={{ textAlign: "center" }}>
            <h1>
              Appointy handles your everyday admin so that you can focus on
              increasing student success
            </h1>
          </Grid>
          <Grid item className="subText" style={{ textAlign: "center" }}>
            Cost-effective education booking software that streamlines
            end-to-end operations, reduces no-shows, and ensures that your staff
            isn't overwhelmed
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>

      <Grid container item className="mainContainer">
        {featureItems.map((i) => (
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

export default Feature;

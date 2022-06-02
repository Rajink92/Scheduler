import React, { useState,useEffect } from "react";
import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "components/Appointment/index";
import axios from 'axios';
import getAppointmentsForDay from "../helpers/selectors"


//Appointment Data
// const appointments = [
//   {
//     id: 1,
//     time: "12pm",
//   },
//   {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer: {
//         id: 1,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   {
//     id: 3,
//     time: "2pm",
//     interview: {
//       student: "Archie Cohen",
//       interviewer: {
//         id: 2,
//         name: "Tori Malcolm",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   }
// ];
 



export default function Application(props) {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  console.log("days from state: ",state.days)
  console.log("appointments from state: ",state.appointments);

  let dailyAppointments = getAppointmentsForDay(state, state.day);

  const setDay = day => {
    return setState({ ...state, day })};


  useEffect(()=>{
    const dayURL = "http://localhost:8001/api/days";

    const appointmentURL="http://localhost:8001/api/appointments";
    
    Promise.all([
      axios.get(dayURL),
      axios.get(appointmentURL)
    ]).then((all) =>{
      
      setState(prev=>({...prev, days:all[0].data, appointments:all[1].data}));
    })
  },[]);
  return (
    <main className="layout">
      <section className="sidebar">
      <img
  className="sidebar--centered"
  src="images/logo.png"
  alt="Interview Scheduler"
/>
<hr className="sidebar__separator sidebar--centered" />
<nav className="sidebar__menu">
<DayList
  days={state.days}
  day={state.day}
  value={value}
  onChange={onChange}
/>
</nav>
<img
  className="sidebar__lhl sidebar--centered"
  src="images/lhl.png"
  alt="Lighthouse Labs"
/>
      </section>
      <section className="schedule">
      {dailyAppointments.map(appointment =>{
          return <Appointment key={appointment.id} {...appointment} />
        })}
        <Appointment key="last" time="5pm" />      </section>
    </main>
  );
}


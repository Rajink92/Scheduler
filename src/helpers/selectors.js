export function getAppointmentsForDay(state, name) {
  const filteredDays = state.days.filter(day => day.name === name);
  if(state.days.length===0 || filteredDays.length===0){
    return [];
  }

  //get the appointments
  const appointmentsFromDays = filteredDays[0].appointments;
 
  let filteredAppointments = [];
 
  for(let appointment of appointmentsFromDays) {
    filteredAppointments.push(state.appointments[appointment]);
  }
  return filteredAppointments;
}

export  function getInterview(state, interview) {
  if(!interview) return null;
  const filteredInterview = {};
  filteredInterview.student = interview.student;
  filteredInterview.interviewer = state.interviewers[interview.interviewer];
  return filteredInterview;

}


export function getInterviewersForDay(state, name) {
    const filteredDays = state.days.filter(day => day.name === name);
    if(state.days.length===0 || filteredDays.length===0){
      return [];
    }
  
    //get interviwers for the days
    const interviewersFromDays = filteredDays[0].interviewers;
   
    let filteredInterviewers = [];
  
    for(let interviewer of interviewersFromDays) {
      filteredInterviewers.push(state.interviewers[interviewer]);
    }
    return filteredInterviewers;


}
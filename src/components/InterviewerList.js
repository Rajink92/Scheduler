import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";
import PropTypes from 'prop-types';


export default function interviewerList(props) {
  const {interviewers} = props;
  const interviewersListData = interviewers.map(interviewer =>{
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={props.interviewer===interviewer.id}
        setInterviewer={event=>{props.onChange(interviewer.id)}}
      />
    );
  });
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewersListData}</ul>
  </section>
  )
}

interviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
}; 


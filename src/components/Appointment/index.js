import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "../../hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";


export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);

    //in Application.js, we used return axios which will return a promise, so we need to use .then() here,  .then uses an anonymous callback function
    props.bookInterview(props.id,interview).then(()=>{

      transition(SHOW);
    }
    );
  }

  return (
    <article className="appointment" >
      <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
      <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer.name}
      />
      )}
      {mode === CREATE && (
      <Form
         interviewer={props.interviewer}
         interviewers={props.interviewers}
         onCancel={() => back(EMPTY)}
         bookInterview={props.bookInterview} 
         onSave={save}/>
      )}
      {mode === SAVING && (
        <Status />        )}
      
      </article>
  )
} 
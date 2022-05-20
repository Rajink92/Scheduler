import "components/InterviewerListItem.scss";
import classnames from 'classnames';


export default function InterviewerListItem(props) {


  const { name, selected, avatar, setInterviewer} = props;

  const interviewerListItemClass = classnames("interviewers__item",{
    "interviewers__item--selected": selected,

  })
  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );

}
import "components/InterviewerListItem.scss";
import classnames from 'classnames';


export default function InterviewerListItem(props) {


  const { name, selected, setInterviewer} = props;

  const interviewerListItemClass = classnames("interviewers__item",{
    "interviewers__item--selected": selected,

  })
return(
  <li className={interviewerListItemClass} selected={selected} onClick={setInterviewer}>
    <img
      className="interviewers__item-image"
      src="https://i.imgur.com/LpaY82x.png"
      alt={name}
    />
    {selected && name}
  </li>
);

}
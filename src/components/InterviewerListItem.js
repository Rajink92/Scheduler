import React from "react";
import "components/InterviewerListItem.scss";
import classnames from 'classnames';
export default function InterviewerListItem(props) {
const { name, selected, avatar} = props;
const interviewerListItemClass = classnames("interviewers__item",{
    "interviewers__item--selected": selected,
  })
  return (
    <li className={interviewerListItemClass} onClick={props.setInterviewer} data-testid="day">
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {selected && name}
    </li>
  );
}
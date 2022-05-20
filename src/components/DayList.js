import DayListItem from "./DayListItem";

export default function DayList(props) {
  const {days} = props;
  const dayListData = days.map(day =>{
    return <DayListItem key={day.key} name={day.name} spots={day.spots} selected={day.name === props.value} setDay={props.onChange}/>
  });
  return (
   <ul>
     {dayListData}
   </ul>
  );
} 
// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import TimeStamp from "../PostsContainer/TimeStamp";

const CommentSection = props => {
  const [comments, setComments] = useState(props.comments)
  const [timeSince, setTimeSince] = useState(()=>{
    let dateValues = props.time.split(" ")
    let todayDate = Date(Date.now()).split(" ");
    console.log(Date.parse(`July 1, 2020 ${todayDate[4]}`))
    console.log(dateValues, todayDate)
    if(todayDate[3] !== dateValues[2]){
      return `${parseInt(todayDate[3]) - parseInt(dateValues[2])} years ago`
    }
    if(todayDate[1] !== dateValues[0]){
      let postMonth = new Date(Date.parse(`${dateValues[0]} 1, 2020`)).getMonth()+1
      let todayMonth = new Date(Date.parse(`${todayDate[1]} 1, 2020`)).getMonth()+1
      return `${todayMonth - postMonth} months ago`
    }
    let postDay = parseInt(todayDate(dateValues[1]))
    let todayDay = parseInt(todayDate[2]);
    if(postDay !== todayDay){
      return `${todayDay - postDay} days ago`
    }
    let postHours = Date.parse(`July 1, 2020 ${dateValues[3]}`)
    if(dateValues[4] === "pm" && parseInt(dateValues[3]) !== 12){
      postHours += 3600000;
    }
    else if(dateValues[4] === "am" && parseInt(dateValues[3]) === 12){
      postHours -= 3600000;
    }
  })
  const [newComment, setnewComment] = useState("")

  function submitComment(e){
    e.preventDefault();
    setComments(comments => [...comments, {
      username: "anonnymoose",
      text: newComment
    }])
    setnewComment("");
    
  }
  function changeComment(e){
    e.preventDefault();
    setnewComment(e.target.value)
  }

  return (
    <div role={props.postid}>
      {/* map through the comments data and return the Comment component */}
      {comments.map(comment =>{
        return <Comment comment={comment} />
      })}
      <TimeStamp time={timeSince} />
      <CommentInput comment={newComment} changeComment={changeComment} submitComment={submitComment}/>
    </div>
  );
};

export default CommentSection;

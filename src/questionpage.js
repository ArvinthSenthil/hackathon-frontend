import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import {API} from "./globe.js"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import {Postanswer} from "./Addanswer"


export function QuestionPage() {
  const { id } = useParams();
  const [questionlist, setquestionlist] = useState({});

  
 

  useEffect(()=>{fetch(`${API}/questions/${id}`,{
    method:"GET"}) //Promise
    .then((data)=>data.json())// Response
    .then((mv)=>setquestionlist(mv));},[id])

   
  return (
    <div>
    <Card className="question-container">
        <h1>{questionlist.question_title}</h1>
         <CardContent>
         <div>
             <p>{questionlist.question}</p>
             <p><h3>Answer:</h3>{questionlist.answer}</p>
             <Counter qn={questionlist}  id={id}/>
             </div>
         </CardContent>
         </Card>
       <Postanswer/>
         </div>
  );
}





export function Counter(qn,id) {
  // const likes = 1;
  const [like, setLike] = useState(0);


  const incrementLike = ()=> setLike(like + 1)

  return (

    <div className="counter-container">
      <IconButton color="success" aria-label="delete" onClick={incrementLike}>
        <Badge badgeContent={like} color="success">👍

        </Badge>
      </IconButton>
    </div>
  );
}
